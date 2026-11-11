// interp.js — intérprete declarativo de escenas (esquemas v1 y v2) para el motor Canvas de Atlas del saber.
// No sustituye a eng/core.js: fabrica las funciones de escena sK(t,u,p,L) que core.js espera y llama a boot().
// Todo es función pura del tiempo t (sin azar ni reloj) => los mismos datos dan siempre los mismos cuadros.
// Documentación del formato: catalogo/declarativo/ESQUEMA.md
(function () {
  const VERSIONES = [1, 2];
  const CURVAS = { lin: x => cl(x), eo, ei, ez, eio, eb, eel };
  const INTERNAS = { _rect: (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); } };
  const DIRS = { izquierda: [-420, 0], derecha: [420, 0], arriba: [0, -700], abajo: [0, 700] };
  const ACCIONES = ['lanzar', 'reaccionar', 'entrar', 'salir', 'desplazar'];
  const fallo = (m) => { throw new Error('[declarativo] ' + m); };
  // función o constante global definida por core.js / assets.js / escenas a mano (sirve también para `const`)
  const buscar = (n) => { if (!/^[A-Za-z_$][\w$]*$/.test(n)) fallo('nombre no válido: ' + n); try { return (0, eval)(n); } catch (e) { fallo('no existe la función «' + n + '» (¿falta un recurso?)'); } };

  // "@evento", "@evento+0.3", "@escena-0.1" o un número de segundos -> segundos
  function tiempo(s, T0) {
    if (typeof s === 'number') return s;
    const m = /^@([^\s+\-@]+)([+-]\d*\.?\d+)?$/.exec(s || '');
    if (!m) fallo('tiempo no válido: ' + JSON.stringify(s));
    const b = m[1] === 'escena' ? T0 : E[m[1]];
    if (b === undefined) fallo('evento desconocido: @' + m[1]);
    return b + (m[2] ? parseFloat(m[2]) : 0);
  }
  const curva = (n, d) => CURVAS[n || d || 'eio'] || fallo('curva desconocida: ' + n);

  // valor: número, texto, color, lista u operador -> función de t
  function valor(s, X) {
    if (s === null || typeof s === 'number' || typeof s === 'boolean') return () => s;
    if (typeof s === 'string') { if (s[0] !== '$') return () => s; const v = X.tema[s.slice(1)]; if (v === undefined) fallo('el tema no define ' + s); return () => v; }
    if (Array.isArray(s)) { const fs = s.map(e => valor(e, X)); return t => fs.map(f => f(t)); }
    if (s.claves) {            // valores clave en el tiempo, con curva de llegada (números o colores)
      const K = s.claves.map(k => ({ t: tiempo(k.t, X.T0), v: valor(k.v, X)(0), c: curva(k.curva) }));
      return t => {
        if (t <= K[0].t) return K[0].v;
        for (let i = 0; i < K.length - 1; i++) { const a = K[i], b = K[i + 1]; if (t < b.t) { const e = b.c((t - a.t) / (b.t - a.t)); return typeof a.v === 'number' ? lerp(a.v, b.v, e) : mixc(a.v, b.v, e); } }
        return K[K.length - 1].v;
      };
    }
    if (s.cambia) {            // v2: pasa de un valor a otro a partir de un momento (número o color)
      const a = valor(s.cambia[0], X)(0), b = valor(s.cambia[1], X)(0), en = tiempo(s.en, X.T0), d = s.dur || .4, c = curva(s.curva, 'eo');
      return t => { const e = t < en ? 0 : c((t - en) / d); return typeof a === 'number' ? lerp(a, b, e) : mixc(a, b, e); };
    }
    if (s.rampa) {             // crece a velocidad constante dentro de una ventana (pasos, giros)
      const r = s.rampa, d = tiempo(r.desde, X.T0), h = r.hasta === undefined ? null : tiempo(r.hasta, X.T0), an = r.antes || 0, lu = r.luego === undefined ? an : r.luego;
      return t => t > d ? (h === null || t < h ? (t - d) * r.vel : lu) : an;
    }
    if (s.de) {                // el valor de una propiedad de otra capa: "id.prop" (·por +mas)
      const [id, p] = s.de.split('.'), por = s.por === undefined ? 1 : s.por, mas = s.mas || 0;
      return t => { const a = X.actores[id]; if (!a || !a.P[p]) fallo('referencia desconocida: ' + s.de); return a.P[p](t) * por + mas; };
    }
    if (s.suma) { const fs = s.suma.map(e => valor(e, X)); return t => fs.reduce((q, f) => q + f(t), 0); }
    if (s.onda) { const o = s.onda; return t => o.amp * Math.sin(t * o.frec + (o.fase || 0)); }
    if (s.rebote) { const o = s.rebote, en = tiempo(o.en, X.T0); return t => o.amp * wob(t - en, o.k, o.d); }
    if (s.color) { const a = valor(s.alfa, X), c = valor(s.color, X), f = t => { const q = a(t); return q > 0 ? rgba(c(t), q) : null; }; f.nulo = true; return f; }
    fallo('valor no reconocido: ' + JSON.stringify(s));
  }

  // v2 · punto: [x, y], "actor" (su posición) o "actor.ancla" (una parte con nombre, p. ej. "lobo.ojo") -> función de t
  function punto(s, X) {
    if (Array.isArray(s)) { const fx = valor(s[0], X), fy = valor(s[1], X); return t => [fx(t), fy(t)]; }
    const [id, an] = String(s).split('.');
    return t => {
      const a = X.actores[id] || fallo('actor desconocido: ' + id); if (!a.P.x || !a.P.y) fallo('«' + id + '» no tiene posición');
      const x = a.P.x(t), y = a.P.y(t); if (!an) return [x, y];
      const p = ancla(a, an)(t); return [x + p[0], y + p[1]];
    };
  }
  // ancla: fórmula del registro en coordenadas de la pieza; aquí se le aplican escala y volteo de la capa
  function ancla(a, an) {
    a.anc = a.anc || {}; if (a.anc[an]) return a.anc[an];
    const r = a.r, e = (r.anclas || {})[an] || fallo('«' + a.L.usa + '» no tiene el ancla «' + an + '»');
    const ns = r.args.filter(n => n !== 't' && n !== 'o').concat(Object.keys(r.o || {})), f = new Function(...ns, 'return [' + e[0] + ',' + e[1] + ']');
    const v = (n, t, d) => a.P[n] ? a.P[n](t) : (r.base && r.base[n] !== undefined ? r.base[n] : d);
    return a.anc[an] = t => { const p = f.apply(null, ns.map(n => v(n, t, 0))), s = v('escala', t, 1); return [p[0] * s * (v('voltear', t, false) ? -1 : 1), p[1] * s]; };
  }

  // una capa = una pieza del registro con sus parámetros (cada uno puede variar en el tiempo, todos a la vez)
  function capa(L, X, REG, id) {
    if (L.estilo) L = Object.assign({}, (X.tema.estilos || {})[L.estilo] || fallo('estilo desconocido: ' + L.estilo), L);   // v2: estilo = parámetros con nombre del tema
    const r = REG[L.usa] || fallo('pieza desconocida: ' + L.usa);
    const fn = r.fn[0] === '_' ? INTERNAS[r.fn] : buscar(r.fn), esT = n => (r.tiempos || []).includes(n), P = {};
    const arg = (n, s) => { if (!esT(n)) return valor(s, X); const c = tiempo(s, X.T0); return () => c; };
    const def = n => { let s = (r.def || {})[n]; if (s === undefined && X.v >= 2) s = (r.def2 || {})[n]; return typeof s === 'string' && s[0] === '$' && X.tema[s.slice(1)] === undefined ? undefined : s; };
    r.args.filter(n => n !== 't' && n !== 'o').concat(Object.keys(r.o || {})).forEach(n => { const s = L[n] !== undefined ? L[n] : def(n); if (s !== undefined) P[n] = arg(n, s); });
    if (L.t !== undefined) P.t = valor(L.t, X);
    if (L.trayecto) {          // v1: la posición sigue un arco (en v2 se usa la acción «lanzar»)
      const a = L.trayecto.arco || fallo('trayecto no reconocido en ' + (L.id || L.usa)), ini = tiempo(a.inicio, X.T0), c = CURVAS[a.curva || 'lin'];
      const q = t => c((t - ini) / a.dur);
      P.x = t => lerp(a.de[0], a.a[0], q(t)); P.y = t => lerp(a.de[1], a.a[1], q(t)) - Math.sin(q(t) * Math.PI) * (a.altura || 0);
    }
    if (L.sobre) { const p = punto(L.sobre, X); P.x = t => p(t)[0]; P.y = t => p(t)[1]; }   // v2: pegada a un ancla
    const v = L.visible || {}, vd = v.desde === undefined ? null : tiempo(v.desde, X.T0), vh = v.hasta === undefined ? null : tiempo(v.hasta, X.T0);
    if (vd !== null || vh !== null) P._vis = t => !((vd !== null && !(t > vd)) || (vh !== null && !(t < vh)));
    const A = { r, L, P, id }; if (id) X.actores[id] = A;
    A.dibuja = t => {
      if (P._vis && !P._vis(t)) return;
      const args = r.args.map(n => {
        if (n === 't') return P.t ? P.t(t) : t;
        if (n === 'o') { const o = {}; for (const k in r.o) { if (P[k]) o[r.o[k]] = P[k](t); else if (r.o[k] === 't' && X.v >= 2) o.t = t; } return o; }
        return P[n] ? P[n](t) : undefined;
      });
      if (r.args.some((n, i) => P[n] && P[n].nulo && args[i] === null)) return;   // color totalmente transparente: no hay nada que dibujar
      if (P._alfa) withA(P._alfa(t), () => fn.apply(null, args)); else fn.apply(null, args);
    };
    return A;
  }

  // ---------- v2 · movimientos de alto nivel (sirven para cualquier pieza con posición; los gestos vienen del registro) ----------
  const y_ = (P, k, f) => { const g = P[k]; P[k] = g ? (k === '_vis' ? t => g(t) && f(t) : t => g(t) * f(t)) : f; };
  function gesto(a, nombre, en, k) {       // claves relativas al momento «en» sobre parámetros de la pieza
    const g = (a.r.gestos || {})[nombre] || fallo('«' + a.L.usa + '» no tiene el gesto «' + nombre + '»');
    for (const p in g) {
      const prev = a.P[p], v0 = g[p][0][1], K = g[p].map(q => [en + q[0], k === 1 ? q[1] : v0 + (q[1] - v0) * k, curva(q[2], 'eo')]);
      if (prev) K[0][1] = prev(K[0][0]);     // si el parámetro ya tenía valor, el gesto arranca desde él
      a.P[p] = t => {
        if (t <= K[0][0]) return prev ? prev(t) : K[0][1];
        for (let i = 0; i < K.length - 1; i++) { const A = K[i], B = K[i + 1]; if (t < B[0]) return lerp(A[1], B[1], B[2]((t - A[0]) / (B[0] - A[0]))); }
        return K[K.length - 1][1];
      };
    }
  }
  function acciones(S, X) {
    const dir = d => d === undefined ? null : (typeof d === 'string' ? DIRS[d] || fallo('dirección desconocida: ' + d) : d);
    for (const ac of S.acciones || []) {
      const tipo = ACCIONES.find(k => ac[k] !== undefined) || fallo('acción desconocida: ' + JSON.stringify(ac));
      const a = X.actores[ac[tipo]] || fallo('la acción «' + tipo + '» nombra un actor desconocido: ' + ac[tipo]);
      const en = tiempo(ac.en, X.T0), P = a.P, r = a.r, bx = P.x, by = P.y, segs = a.segs = a.segs || [];
      if (tipo === 'reaccionar') { gesto(a, ac.gesto || Object.keys(r.gestos || {})[0] || fallo('«' + a.L.usa + '» no tiene gestos'), en, ac.intensidad === undefined ? 1 : ac.intensidad); continue; }
      if (tipo === 'lanzar') {
        if (ac.quien) gesto(X.actores[ac.quien] || fallo('actor desconocido: ' + ac.quien), 'lanzar', en, 1);
        const t0 = en + (ac.suelta === undefined ? .05 : ac.suelta), d = ac.dur || .8;
        segs.push({ t0, dur: d, c: curva(ac.curva, 'lin'), de: punto(ac.desde || (ac.quien + '.mano'), X), a: punto(ac.a, X), alt: ac.altura === undefined ? 80 : ac.altura, pasos: 0 });
        if (!bx) y_(P, '_vis', t => t > t0);
        if (r.giro && ac.giro !== false) { const g = ac.giro || {}, vel = g.vel === undefined ? 10 : g.vel, h = g.hasta === undefined ? t0 + d : tiempo(g.hasta, X.T0), rep = g.reposo === undefined ? (h - en) * vel : g.reposo; P[r.giro] = t => t < h ? (t - en) * vel : rep; }
        continue;
      }
      const d = ac.dur || (tipo === 'entrar' ? .35 : tipo === 'salir' ? .5 : .6), c = curva(ac.curva, tipo === 'entrar' ? 'eo' : tipo === 'salir' ? 'ei' : 'eio');
      const pasos = ac.pasos === undefined ? d : ac.pasos, e = t => t < en ? 0 : c((t - en) / (ac.luz || d));
      if (tipo === 'entrar') {
        const o = dir(ac.desde); if (o) segs.push({ t0: en, dur: d, c, de: t => [bx(t) + o[0], by(t) + o[1]], a: t => [bx(t), by(t)], pasos });
        if (ac.sombra) {           // sale de la sombra: el color va de «sombra» al de la capa y los bordes se encienden
          const sv = valor(ac.sombra, X)(0), base = P[r.tinte] || fallo('«entrar» con sombra necesita «' + r.tinte + '» en la capa ' + a.id);
          P[r.tinte] = t => mixc(sv, base(t), e(t));
          (r.brillos || []).forEach(p => { const raw = a.L[p]; if (raw === undefined) return; const col = valor(raw.color || raw, X)(0), al = raw.alfa === undefined ? () => 1 : valor(raw.alfa, X); P[p] = t => { const q = al(t) * e(t); return q > 0 ? rgba(col, q) : null; }; });
        }
        if (ac.aparece) y_(P, '_alfa', e);
      } else if (tipo === 'salir') {
        const o = dir(ac.hacia); if (o) segs.push({ t0: en, dur: d, c, rel: o, pasos });
        if (ac.desvanece) y_(P, '_alfa', t => 1 - e(t));
        y_(P, '_vis', t => t < en + d);
      } else segs.push({ t0: en, dur: d, c, rel: ac.por, a: ac.a === undefined ? null : punto(ac.a, X), alt: ac.altura || 0, pasos });
    }
  }
  function posicion(a) {             // encadena los tramos de movimiento de un actor en una sola posición(t)
    if (!a.segs || !a.segs.length) return;
    const S = a.segs.sort((p, q) => p.t0 - q.t0), P = a.P, bx = P.x, by = P.y;
    const A = k => S[k]._A || (S[k]._A = S[k].de ? S[k].de(S[k].t0) : k > 0 ? B(k - 1) : [bx(S[k].t0), by(S[k].t0)]);
    const B = k => S[k]._B || (S[k]._B = S[k].rel ? [A(k)[0] + S[k].rel[0], A(k)[1] + S[k].rel[1]] : S[k].a(S[k].t0 + S[k].dur));
    const pos = t => {
      let k = -1; for (let i = 0; i < S.length; i++) if (t > S[i].t0) k = i;
      if (k < 0) return S[0].de ? A(0) : [bx(t), by(t)];
      const s = S[k], p = A(k), q = B(k), u = s.c((t - s.t0) / s.dur);
      return [lerp(p[0], q[0], u), s.alt ? lerp(p[1], q[1], u) - Math.sin(u * Math.PI) * s.alt : lerp(p[1], q[1], u)];
    };
    P.x = t => pos(t)[0]; P.y = t => pos(t)[1];
    const g = a.r.andar, W = S.filter(s => s.pasos > 0);   // si la pieza sabe andar, da pasos mientras se desplaza
    if (g && W.length) { const prev = P[g.param]; P[g.param] = t => { for (const s of W) if (t > s.t0 && t < s.t0 + s.pasos) return (t - s.t0) * g.vel; return prev ? prev(t) : 0; }; }
  }

  // cámara: claves base + capas que se mezclan encima (seguir a un actor, acercarse a un punto o a un ancla)
  function camara(C, X) {
    if (!C) return () => ({ x: 180, y: 320, z: 1, r: 0 });
    const K = (C.claves || [{ t: 0, x: 180, y: 320, z: 1 }]).map(k => [tiempo(k.t, X.T0), k.x, k.y, k.z, k.rot || 0, k.curva]);
    const capas = (C.capas || []).map(c => {
      const d = tiempo(c.desde, X.T0), cu = curva(c.curva), zc = curva(c.zCurva || c.curva), pos = punto(c.sigue || c.mira, X);
      return (k, t) => {
        if (t < d) return k;
        const q = cu((t - d) / c.mezcla), p = c.sigue ? follow(pos, t, c.retraso === undefined ? .35 : c.retraso) : pos(t);
        const z = c.z === undefined ? k.z : lerp(k.z, c.z, c.zDur ? zc((t - d) / c.zDur) : q);
        return { x: lerp(k.x, p[0], q), y: lerp(k.y, p[1], q), z, r: k.r };
      };
    });
    return t => capas.reduce((k, f) => f(k, t), camAt(t, K));
  }

  function escena(S, T0, tema, REG, v) {
    const X = { T0, tema, actores: {}, v }, n = {}, todas = [].concat(S.fondo || [], S.mundo || [], S.pantalla || []);
    todas.forEach(L => { n[L.usa] = (n[L.usa] || 0) + 1; });
    const ids = new Set(todas.map(L => L.id).filter(Boolean));   // v2: una pieza única en la escena se llama como ella misma
    const lista = k => (S[k] || []).map(L => capa(L, X, REG, L.id || (v >= 2 && n[L.usa] === 1 && !ids.has(L.usa) ? L.usa : null)));
    const fondo = lista('fondo'), mundo = lista('mundo'), pantalla = lista('pantalla'), cam = camara(S.camara, X);
    acciones(S, X); Object.values(X.actores).forEach(posicion);
    return t => { fondo.forEach(d => d.dibuja(t)); world(cam(t), () => mundo.forEach(d => d.dibuja(t))); pantalla.forEach(d => d.dibuja(t)); };
  }

  // punto de entrada: arrancar(VIDEO, REGISTRO)  (los dos vienen en video.js, generado por compilar.py)
  window.arrancar = function (V, REG) {
    if (!VERSIONES.includes(V.esquema)) fallo('esquema ' + V.esquema + ' no soportado (este intérprete entiende: ' + VERSIONES + ')');
    const tema = V.tema || {};
    boot(V.escenas.map((S, k) => S.js ? buscar(S.js) : escena(S, T[k], tema, REG, V.esquema)), TRS, { cap: { acc: tema.acento || CAP.acc } });
  };
})();
