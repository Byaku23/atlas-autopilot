// Escena escrita a mano en JavaScript, dentro del mismo video que una escena declarativa (compatibilidad).
function cierre(t,u){bg('#14082a','#341452');catHead(180,330,2.2+.1*Math.sin(t*2),{look:Math.sin(t*1.5)*.6,blink:(t%2)<.12?1:0});
  mtext('ESCENA EN JAVASCRIPT',180,150,24,'#fff',t,T[1]+.2,{stroke:'rgba(10,3,24,.85)',sw:5})}
