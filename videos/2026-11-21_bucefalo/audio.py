import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('Em',40,[52,55,59,64]),('C',36,[48,52,55,60]),('D',38,[50,54,57,62]),('Bm',35,[47,50,54,59])]
setMusic(84,MA)
trSfx(TRS,E)
def neigh(d=1.1,f0=700):
    s,f=glide([f0*.8,f0*1.6,f0*1.9,f0*1.5,f0*.9],d); t=tt(d)
    x=2*((np.cumsum(f*(1+.03*np.sin(2*np.pi*14*t)))/sr)%1)-1; x=bp(x,500,1500)*1.0+bp(x,2000,3800)*.45
    e=np.minimum(1,t/.05)*np.minimum(1,(d-t)/.3); return reverb(fade(x*e*.55,.01,.05),1.4,.25,2)
def hoofs(t0,n,gap,g=.35):
    for k in range(n): P(lambda: knock(),t0+k*gap,g*(0.8+0.2*(k%2)))
# S0 gancho
P(lambda: wind(4.0),0.0,.25)
Pn(lambda: neigh(1.3),'cab',.5,-.05); Pn(lambda: boom(.8,60,.5),'cab',.35)
hoofs(.2,8,.16,.3)
Pn(stamp,'montar',.4); Pn(lambda: whoosh(.5,False),'nino',.4,-.3); Pn(lambda: step(),'nino',.3,.2)
Pn(lambda: riser(.8,200,1500,.3),'logro',.4,-.8); Pn(impact,'logro',.9); Pn(lambda: gong(98,3.0),'logro',.5); Pn(lambda: sparkle(1.2),'logro',.4)
# S1 nombre y talentos
Pn(lambda: whoosh(.5,False),'bucef',.35,-.4); Pn(stamp,'bucef',.7); Pn(lambda: boom(.9,55,.5),'bucef',.5); Pn(lambda: bell(660,2.0),'bucef',.3)
Pn(lambda: step(),'trat',.4); Pn(lambda: whoosh(.4,False),'ofre',.3)
for k in range(8): P(tick,E['trece']-.1+k*.08,.25)
Pn(lambda: stamp(),'trece',.5)
for k in range(8): P(lambda: coin(),E['trece']+.05+k*.07,.3)
Pn(lambda: cashreg(),'fort',.5); Pn(lambda: sparkle(1.3),'fort',.5)
# S2 encabritado
Pn(lambda: neigh(1.0,780),'encab',.55,-.05); Pn(lambda: boom(.9,50,.6),'encab',.5)
hoofs(E['encab']+.2,6,.14,.3)
for k in range(6): P(lambda: step(),E['nadie']+k*.07,.3)
Pn(lambda: whoosh(.5,True),'nadie',.4)
Pn(stamp,'rech',1.0); Pn(lambda: boom(1.2,50,.8),'rech',.7); Pn(impact,'rech',.6); Pn(lambda: scratch(.3),'rech',.3,.05)
# S3 apuesta
Pn(lambda: chime(900,1.0),'yo',.35); Pn(lambda: whoosh(.4),'domo',.3,-.2)
Pn(lambda: riser(.5,300,1800,.3),'apost',.35,-.45); Pn(lambda: clunk(),'apost',.7); Pn(lambda: cashreg(),'apost',.5); Pn(lambda: sparkle(1.2),'apost',.4)
Pn(lambda: stamp(),'frac',.4)
# S4 sombra
P(lambda: hum(5.0,50),T[4]+.2,.2)
Pn(lambda: ping(1500,.6),'vio',.5); Pn(lambda: whoosh(.4),'vio',.3,-.2)
for k in range(3): P(lambda: pop(700+k*100),E['todos']+k*.15,.3)
Pn(lambda: chime(784,1.4),'bucef4',.4)
for k in range(10): P(lambda: heart(),E['miedo']+k*.48,.22)
Pn(lambda: stinger(45),'sombra',.55); Pn(lambda: boom(1.0,48,.7),'sombra',.55); Pn(lambda: neigh(.9,860),'sombra',.3,.05)
# S5 sol, calma, salto
Pn(lambda: whoosh(.5,False),'giro',.4,-.2); Pn(lambda: neigh(.6,600),'giro',.3,.1)
Pn(lambda: riser(1.2,200,1500,.3),'sol',.35,-1.2); Pn(lambda: sparkle(1.6),'sol',.5); Pn(lambda: chime(659,2.0),'sol',.4)
Pn(lambda: purr(1.4),'calma',.2) if False else None
Pn(lambda: chime(880,1.6),'calma',.4)
Pn(lambda: whoosh(.5,True),'salto',.45,-.1); Pn(lambda: stamp(),'salto',.5)
Pn(lambda: boom(.9,60,.6),'lomo',.6); Pn(lambda: fanfare(50,2.2),'lomo',.45); Pn(lambda: sparkle(1.5),'lomo',.5); Pn(lambda: cheer(1.6),'lomo',.25,.05)
# S6 Filipo
Pn(lambda: whoosh(.5),'plut',.35,-.4); Pn(lambda: paper(),'plut',.5,-.2)
Pn(lambda: stamp(),'reino',.4); Pn(lambda: ping(1200,.6),'digno',.4)
Pn(lambda: pop(900),'maced',.5); Pn(lambda: riser(E['peq']-E['maced'],200,1400,.3),'maced',.3)
Pn(lambda: boom(.9,55,.6),'peq',.5); Pn(lambda: stamp(),'peq',.5)
# S7 guerra
Pn(lambda: stamp(),'llevo',.35)
Pn(lambda: stamp(),'anos7',.45)
for k in range(10): P(lambda: knock(),E['grecia']+k*.16,.25)
Pn(lambda: ping(1000,.6),'grecia',.4); Pn(lambda: chime(1318,1.4),'asia',.5); Pn(lambda: sparkle(1.2),'asia',.4)
# S8 muerte
P(lambda: wind(6.0),T[8]+.2,.25)
Pn(lambda: bell(500,3.5),'murio',.5); Pn(lambda: boom(1.2,45,.7),'murio',.6)
Pn(lambda: waves(3.0),'rio',.2) if False else None
Pn(lambda: drip(),'hidas',.4); Pn(lambda: chime(587,2.0),'hidas',.35)
for k in range(10): P(tick,E['n326']-.1+k*.08,.28)
Pn(lambda: stamp(),'n326',.6); Pn(lambda: boom(.8,60,.5),'n326',.4)
Pn(lambda: stamp(),'trein',.5)
# S9 fuentes
Pn(lambda: whoosh(.5),'fuentes',.35,-.2); Pn(lambda: stinger(50),'fuentes',.3,-.0)
Pn(lambda: pop(800),'arriano',.55); Pn(lambda: pop(700),'otros',.55)
Pn(lambda: clunk(),'canse',.3); Pn(lambda: stamp(),'heridas',.5)
Pn(lambda: riser(.8,200,1200,.3),'otros',.3,-.5)
# S10 ciudad
Pn(lambda: drip(),'lloro',.55); Pn(lambda: ping(1700,.6),'lloro',.3,.15)
Pn(lambda: riser(1.2,150,1400,.35),'fundo',.4,-.6)
for k in range(5): P(lambda: clunk(),E['fundo']+.1+k*.18,.35)
Pn(lambda: boom(1.2,48,.7),'fundo',.5)
Pn(lambda: riser(.9,200,1600,.35),'bucefala',.4,-.9); Pn(impact,'bucefala',.9); Pn(lambda: gong(110,3.0),'bucefala',.5); Pn(lambda: fanfare(50,2.4),'bucefala',.45)
Pn(lambda: stamp(),'pak',.5)
# S11 cierre
Pn(lambda: chime(1200,1.0),'merece',.4)
Pn(lambda: pop(900),'nombre',.7); Pn(lambda: sparkle(.9),'nombre',.4)
Pn(lambda: riser(E['coment']-E['nombre'],300,1800,.3),'nombre',.3,.2)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7); Pn(lambda: whoosh(.4),'coment',.3)
Pn(lambda: ping(1600,.5),'sig',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11=T[1:12]
layer_pad(0,t1,.3,lpf=1200); layer_drone(0,t1,.3); layer_drums(0,t1,.3,'tribal')
layer_pad(t1,t2,.32,lpf=1500); layer_arp(t1,t2,.28,step=.5); layer_bass(t1,t2,.26); bells(t1+1,t2,.12,seed=3)
layer_pad(t2,t3,.34,lpf=1500); layer_drums(t2,t3,.32,'tribal'); layer_bass(t2,t3,.28)
layer_pad(t3,t4,.3,lpf=1300); layer_arp(t3,t4,.26,step=1); bells(t3+1,t4,.15,seed=5)
layer_drone(t4,t5,.3); layer_pad(t4,t5,.28,lpf=900); swell(E['miedo'],E['sombra'],.3,(52,59,64,67))
layer_pad(t5,t6,.36,lpf=1900); layer_arp(t5,t6,.3,step=.5); layer_drums(E['sol'],t6,.35,'march'); swell(E['sol']-.8,E['salto'],.35,(52,59,64,67)); bells(E['lomo'],t6,.22,seed=7)
layer_pad(t6,t7,.32,lpf=1400); layer_bass(t6,t7,.26); bells(t6+1,t7,.14,seed=9)
layer_pad(t7,t8,.32,lpf=1500); layer_drums(t7,t8,.38,'march'); layer_bass(t7,t8,.3); layer_arp(t7,t8,.28,step=.5)
layer_drone(t8,t9,.34); layer_pad(t8,t9,.3,lpf=800); bells(t8,t9,.14,seed=11)
layer_pad(t9,t10,.3,lpf=900); layer_drone(t9,t10,.32); layer_arp(t9,t10,.2,step=1)
layer_pad(t10,t11,.34,lpf=1700); layer_arp(t10,t11,.28,step=.5); bells(E['bucefala'],t11,.25,seed=13); layer_drums(E['fundo'],t11,.3,'march')
layer_drums(t11,DUR,.4,'pop'); layer_pad(t11,DUR,.35,lpf=2000); layer_arp(t11,DUR,.33,step=.5); bells(t11,DUR,.22,seed=15); layer_bass(t11,DUR,.3)
duck(E['rech']-.05,E['rech']+.5,.4,.4); duck(E['logro']-.05,E['logro']+.4,.4,.4); duck(E['sombra']-.05,E['sombra']+.5,.4,.4); duck(E['bucefala']-.05,E['bucefala']+.4,.4,.4)
save()
