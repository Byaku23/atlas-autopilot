import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('Dm',38,[50,53,57,62]),('Bb',34,[46,50,53,58]),('F',41,[53,57,60,65]),('C',36,[48,52,55,60])]
setMusic(92,MA)
trSfx(TRS,E)
# S0 gancho
Pn(lambda: whoosh(.4,False),'berlin',.3,-.5); Pn(lambda: stamp(),'berlin',.6)
Pn(lambda: stamp(),'n1904',.8); Pn(lambda: boom(1.0,52,.6),'n1904',.5)
Pn(lambda: whoosh(.4),'caballo',.3,-.2); Pn(lambda: stamp(),'caballo',.4)
for d in (.25,.55,.85): P(lambda: knock(),E['sumar']+d,.5)
for d in (.3,.6): P(lambda: knock(),E['restar']+d,.5)
Pn(lambda: pop(700),'sumar',.4); Pn(lambda: pop(800),'restar',.4); Pn(lambda: pop(900),'fecha',.4)
Pn(lambda: riser(.6,200,1500,.3),'listo',.4,-.6); Pn(lambda: stamp(),'listo',.9); Pn(lambda: boom(1.0,52,.7),'listo',.6); Pn(lambda: sparkle(1.2),'listo',.5)
P(lambda: wind(5.0),.1,.08)
# S1 von Osten y los 11 golpes
Pn(lambda: stamp(),'wilhelm',.5); Pn(lambda: stamp(),'profesor',.4)
Pn(lambda: pop(700),'ocho',.5); Pn(lambda: pop(800),'viernes',.5)
for i in range(11): P(lambda: knock(),E['golpeaba']+i*.27,.6); P(lambda: tick(),E['golpeaba']+i*.27,.3)
Pn(lambda: stamp(),'once',.8); Pn(lambda: boom(1.0,50,.6),'once',.5)
Pn(lambda: ding(),'correcto',.6); Pn(lambda: sparkle(1.2),'correcto',.6); Pn(lambda: stamp(),'correcto',.7)
# S2 comisión
Pn(lambda: paper(),'nyt',.5); Pn(lambda: stamp(),'nyt',.4)
Pn(lambda: whoosh(.5),'comision',.3,-.2); Pn(lambda: stamp(),'comision',.5)
for k in range(13): P(lambda: pop(500+k*40),E['comision']+.1+k*.05,.18)
Pn(lambda: stamp(),'trece',.9); Pn(lambda: boom(1.0,52,.7),'trece',.6)
for k in ('vet','circo','caballeria','zoo'): Pn(lambda: stamp(),k,.45); Pn(lambda: ping(1300,.4),k,.35)
# S3 sin trucos
Pn(lambda: stamp(),'concl',.5); Pn(lambda: stamp(),'sept',.4); Pn(lambda: stamp(),'no',.6)
Pn(lambda: stamp(),'trucos',.95); Pn(lambda: boom(1.0,52,.8),'trucos',.7); Pn(lambda: tada(),'trucos',.35); Pn(lambda: sparkle(1.2),'trucos',.5)
# S4 Pfungst
Pn(lambda: whoosh(.4),'joven',.3,-.2); Pn(lambda: stamp(),'joven',.4)
Pn(lambda: stamp(),'oskar',.6); Pn(lambda: ping(1500,.4),'oskar',.4)
Pn(lambda: stamp(),'prueba',.4)
Pn(lambda: clunk(),'anteo',.6); Pn(lambda: stamp(),'anteo',.7); Pn(lambda: whoosh(.4),'anteo',.3,-.2)
Pn(lambda: stamp(),'siveia',.4)
Pn(lambda: riser(.8,200,1200,.3),'ochenta',.35,-.8); Pn(lambda: stamp(),'ochenta',.8); Pn(lambda: ding(),'ochenta',.5); Pn(lambda: boom(1.0,52,.6),'ochenta',.5)
Pn(lambda: stamp(),'sino',.4)
Pn(lambda: buzz(),'seis',.5); Pn(lambda: stamp(),'seis',.8); Pn(lambda: clunk(),'seis',.6)
# S5 lee a las personas
Pn(lambda: stamp(),'nosabia',.7); Pn(lambda: buzz(),'nosabia',.4)
Pn(lambda: whoosh(.4),'leia',.3,-.2); Pn(lambda: stamp(),'leia',.5); Pn(lambda: pop(900),'leia',.4)
Pn(lambda: stamp(),'llegar',.4)
for i in range(9): P(lambda: knock(),E['llegar']+.9+i*.42,.55)
Pn(lambda: stinger(45),'gesto',.5); Pn(lambda: stamp(),'gesto',.7); Pn(lambda: swish(),'gesto',.4)
Pn(lambda: stamp(),'detenia',.9); Pn(lambda: boom(1.0,52,.6),'detenia',.5); Pn(lambda: ding(),'detenia',.4)
# S6 efecto Clever Hans
Pn(lambda: stamp(),'nadie',.4)
Pn(lambda: buzz(),'nunca',.4); Pn(lambda: stamp(),'nunca',.8); Pn(lambda: pop(500),'nunca',.5)
Pn(lambda: riser(.7,200,1500,.3),'efecto',.4,-.7); Pn(lambda: stamp(),'efecto',.7)
Pn(lambda: stamp(),'clever',.95); Pn(lambda: boom(1.0,50,.8),'clever',.7); Pn(lambda: sparkle(1.4),'clever',.6); Pn(lambda: fanfare(),'clever',.35)
# S7 debate
Pn(lambda: whoosh(.4),'listo2',.3,-.2); Pn(lambda: stamp(),'listo2',.5); Pn(lambda: pop(600),'listo2',.4)
Pn(lambda: stamp(),'lector',.5); Pn(lambda: pop(700),'lector',.5)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7); Pn(lambda: whoosh(.4),'coment',.3)
Pn(lambda: ping(1600,.5),'sig',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7=T[1:8]
layer_pad(0,t1,.3,lpf=1300); layer_drone(0,t1,.3); layer_bass(0,t1,.24); layer_drums(0,t1,.2,'light')
layer_pad(t1,t2,.28,lpf=1500); layer_arp(t1,t2,.2,step=1); layer_bass(t1,t2,.22); bells(t1,t2,.12,seed=3); layer_drums(t1,t2,.14,'hats')
layer_pad(t2,t3,.3,lpf=1300); layer_arp(t2,t3,.22,step=1); layer_drums(t2,t3,.22,'march'); bells(t2,t3,.12,seed=5)
layer_drone(t3,t4,.34); layer_pad(t3,t4,.28,lpf=1000); bells(t3,t4,.16,seed=9); layer_bass(t3,t4,.22)
layer_pad(t4,t5,.32,lpf=1100); layer_arp(t4,t5,.22,step=.5); layer_drums(t4,t5,.26,'light'); layer_bass(t4,t5,.24)
layer_pad(t5,t6,.34,lpf=1300); layer_drums(t5,t6,.28,'trap'); layer_bass(t5,t6,.28); bells(t5,t6,.14,seed=7)
layer_pad(t6,t7,.34,lpf=1600); layer_arp(t6,t7,.26,step=.5); layer_drums(t6,t7,.3,'march'); layer_bass(t6,t7,.26); bells(t6,t7,.2,seed=11)
layer_drone(t7,DUR,.28); layer_pad(t7,DUR,.32,lpf=1800); layer_arp(t7,DUR,.3,step=.5); layer_drums(t7,DUR,.32,'pop'); bells(t7,DUR,.2,seed=15); layer_bass(t7,DUR,.28)
for k in ('listo','once','trece','trucos','ochenta','seis','detenia','clever'): duck(E[k]-.05,E[k]+.5,.4,.4)
save()
