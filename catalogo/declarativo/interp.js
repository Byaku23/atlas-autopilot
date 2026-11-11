// interp.js — intérprete declarativo de escenas (esquema v1) para el motor Canvas de Atlas del saber.
// No sustituye a eng/core.js: fabrica las funciones de escena sK(t,u,p,L) que core.js espera y llama a boot().
// Todo es función pura del tiempo t (sin azar ni reloj) => los mismos datos dan siempre los mismos cuadros.
// Documentación del formato: catalogo/declarativo/ESQUEMA.md
(function () {
  const VERSIONES = [1];
  const CURVAS = { lin: x => cl(x), eo, ei, ez, eio, eb, eel };
  const INTERNAS = { _rect: (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x, y, w, h); } };
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
  const curva = (n) => CURVAS[n || 'eio'] || fallo('curva desconocida: ' + n);

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
    if (s.rampa) {             // crece a velocidad constante dentro de una ventana (pasos, giros)
      const r = s.rampa, d = tiempo(r.desde, X.T0), h = r.hasta === undefined ? null : tiempo(r.hasta, X.T0), an = r.antes || 0, lu = r.luego === undefined ? an : r.luego;
      return t => t > d ? (h === null || t < h ? (t - d) * r.vel : lu) : an;
    }
    if (s.de) {                // el valor de una propiedad de otra capa: "id.prop" (·por +mas)
      const [id, p] = s.de.split('.'), por = s.por === undefined ? 1 : s.por, mas = s.mas || 0;
      return t => { const a = X.actores[id]; if (!a || !a[p]) fallo('referencia desconocida: ' + s.de); return a[p](t) * por + mas; };
    }
    if (s.suma) { const fs = s.suma.map(e => valor(e, X)); return t => fs.reduce((q, f) => q + f(t), 0); }
    if (s.onda) { const o = s.onda; return t => o.amp * Math.sin(t * o.frec + (o.fase || 0)); }
    if (s.rebote) { const o = s.rebote, en = tiempo(o.en, X.T0); return t => o.amp * wob(t - en, o.k, o.d); }
    if (s.color) { const a = valor(s.alfa, X), c = valor(s.color, X); return t => { const q = a(t); return q > 0 ? rgba(c(t), q) : null; }; }
    fallo('valor no reconocido: ' + JSON.stringify(s));
  }

  // una capa = una pieza del registro con sus parámetros (cada uno puede variar en el tiempo, todos a la vez)
  function capa(L, X, REG) {
    const r = REG[L.usa] || fallo('pieza desconocida: ' + L.usa);
    const fn = r.fn[0] === '_' ? INTERNAS[r.fn] : buscar(r.fn), esT = n => (r.tiempos || []).includes(n);
    const arg = (n, s) => { if (!esT(n)) return valor(s, X); const c = tiempo(s, X.T0); return () => c; };
    const props = {};
    const A = r.args.map(n => {
      if (n === 't') return L.t === undefined ? (t => t) : valor(L.t, X);
      if (n === 'o') {
        const ent = Object.keys(r.o || {}).filter(k => L[k] !== undefined).map(k => { const f = arg(k, L[k]); props[k] = f; return [r.o[k], f]; });
        return t => { const o = {}; for (const [k, f] of ent) o[k] = f(t); return o; };
      }
      const s = L[n] !== undefined ? L[n] : (r.def || {})[n];
      return props[n] = (s === undefined ? () => undefined : arg(n, s));
    });
    if (L.trayecto) {          // la posición sigue un trayecto (por ahora: arco, como un objeto lanzado)
      const a = L.trayecto.arco || fallo('trayecto no reconocido en ' + (L.id || L.usa)), ini = tiempo(a.inicio, X.T0), c = CURVAS[a.curva || 'lin'];
      const q = t => c((t - ini) / a.dur);
      props.x = t => lerp(a.de[0], a.a[0], q(t)); props.y = t => lerp(a.de[1], a.a[1], q(t)) - Math.sin(q(t) * Math.PI) * (a.altura || 0);
      A[r.args.indexOf('x')] = props.x; A[r.args.indexOf('y')] = props.y;
    }
    if (L.id) X.actores[L.id] = props;
    const v = L.visible || {}, vd = v.desde === undefined ? null : tiempo(v.desde, X.T0), vh = v.hasta === undefined ? null : tiempo(v.hasta, X.T0);
    return t => { if ((vd !== null && !(t > vd)) || (vh !== null && !(t < vh))) return; fn.apply(null, A.map(f => f(t))); };
  }

  // cámara: claves base + capas que se mezclan encima (seguir a un actor, acercarse a un punto)
  function camara(C, X) {
    if (!C) return () => ({ x: 180, y: 320, z: 1, r: 0 });
    const K = (C.claves || [{ t: 0, x: 180, y: 320, z: 1 }]).map(k => [tiempo(k.t, X.T0), k.x, k.y, k.z, k.rot || 0, k.curva]);
    const capas = (C.capas || []).map(c => {
      const d = tiempo(c.desde, X.T0), cu = curva(c.curva), zc = curva(c.zCurva || c.curva), px = c.mira ? valor(c.mira[0], X) : null, py = c.mira ? valor(c.mira[1], X) : null;
      const pos = t => { const a = X.actores[c.sigue]; if (!a) fallo('la cámara sigue a un actor desconocido: ' + c.sigue); return [a.x(t), a.y(t)]; };
      return (k, t) => {
        if (t < d) return k;
        const q = cu((t - d) / c.mezcla), p = c.sigue ? follow(pos, t, c.retraso === undefined ? .35 : c.retraso) : [px(t), py(t)];
        const z = c.z === undefined ? k.z : lerp(k.z, c.z, c.zDur ? zc((t - d) / c.zDur) : q);
        return { x: lerp(k.x, p[0], q), y: lerp(k.y, p[1], q), z, r: k.r };
      };
    });
    return t => capas.reduce((k, f) => f(k, t), camAt(t, K));
  }

  function escena(S, T0, tema, REG) {
    const X = { T0, tema, actores: {} }, lista = n => (S[n] || []).map(L => capa(L, X, REG));
    const fondo = lista('fondo'), mundo = lista('mundo'), pantalla = lista('pantalla'), cam = camara(S.camara, X);
    return t => { fondo.forEach(d => d(t)); world(cam(t), () => mundo.forEach(d => d(t))); pantalla.forEach(d => d(t)); };
  }

  // punto de entrada: arrancar(VIDEO, REGISTRO)  (los dos vienen en video.js, generado por compilar.py)
  window.arrancar = function (V, REG) {
    if (!VERSIONES.includes(V.esquema)) fallo('esquema ' + V.esquema + ' no soportado (este intérprete entiende: ' + VERSIONES + ')');
    const tema = V.tema || {};
    boot(V.escenas.map((S, k) => S.js ? buscar(S.js) : escena(S, T[k], tema, REG)), TRS, { cap: { acc: tema.acento || CAP.acc } });
  };
})();
