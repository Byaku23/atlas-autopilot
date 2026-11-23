import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('F',41,[53,57,60,65]),('Dm',38,[50,53,57,62]),('Bb',34,[46,50,53,58]),('C',36,[48,52,55,60])]
setMusic(84,MA)
trSfx(TRS,E)
def chug(t0,n,gap,g=.3):
    for k in range(n): P(lambda: hiss(.12),t0+k*gap,g*(0.7+0.3*(k%2)))
# S0
Pn(lambda: growl(.8),'winnie',.2,.1) if False else None
Pn(lambda: whoosh(.4,False),'winnie',.3,-.3); Pn(lambda: stamp(),'winnie',.4)
Pn(lambda: riser(.6,200,1500,.3),'verdad',.4,-.6); Pn(impact,'verdad',.9); Pn(lambda: stamp(),'verdad',.6); Pn(lambda: sparkle(1.2),'verdad',.4)
Pn(lambda: stamp(),'osa',.6); Pn(lambda: boom(.9,60,.5),'osa',.4)
Pn(lambda: stinger(45),'guerra',.4); Pn(lambda: boom(1.0,50,.6),'guerra',.5)
# S1
P(lambda: engine(7.5),T[1]+.1,.2); chug(T[1]+.2,32,.24,.28)
Pn(lambda: whoosh(.4),'agosto',.3,-.2)
Pn(lambda: stamp(),'n1914',.8); Pn(lambda: boom(1.0,52,.7),'n1914',.6); Pn(lambda: paper(),'n1914',.4)
Pn(lambda: stamp(),'harry',.45); Pn(lambda: whoosh(.3),'vet',.25,-.1)
# S2
Pn(lambda: stamp(),'estacion',.35); Pn(lambda: knock(),'white',.35)
Pn(lambda: stinger(48),'osezna',.4); Pn(lambda: pop(700),'osezna',.4)
Pn(lambda: whoosh(.4,False),'cazador',.3,-.2); Pn(lambda: step(),'cazador',.4)
Pn(lambda: coin(),'pago',.5)
Pn(lambda: cashreg(),'veinte',.6); Pn(impact,'veinte',.7); Pn(lambda: stamp(),'veinte',.7); Pn(lambda: sparkle(1.0),'veinte',.4)
# S3
Pn(lambda: whoosh(.4),'llamo',.3,-.2)
Pn(lambda: stamp(),'winnipeg',.9); Pn(lambda: boom(1.0,55,.6),'winnipeg',.5); Pn(lambda: chime(659,1.8),'winnipeg',.4)
Pn(lambda: stamp(),'ciudad',.35)
Pn(lambda: pop(900),'winnie2',.7); Pn(lambda: sparkle(1.2),'winnie2',.45)
Pn(lambda: swish(),'abrev',.4) if False else None
Pn(lambda: whoosh(.3),'abrev',.3,-.1)
# S4
P(lambda: wind(5.0),T[4]+.1,.12)
Pn(lambda: whoosh(.4),'mansa',.25,-.2); Pn(lambda: purr(1.6),'dormia',.25) if False else None
for k in range(6): P(lambda: pop(500+k*30),E['dormia']+.2+k*.45,.15)
Pn(lambda: chime(784,1.5),'soldados',.35)
Pn(lambda: cheer(1.6),'adoraron',.3); Pn(lambda: sparkle(1.2),'adoraron',.4)
# S5
P(lambda: waves(4.4),T[5]+.05,.25)
Pn(lambda: stamp(),'mascota',.5)
Pn(lambda: whistle(1.2),'cruzo',.35); Pn(lambda: whoosh(.5,False),'cruzo',.3,-.2)
Pn(lambda: stamp(),'atlantico',.5); Pn(lambda: bell(392,2.5),'atlantico',.35)
# S6
Pn(lambda: stamp(),'ejercito',.35)
for k in range(10): P(lambda: step(),E['ejercito']+k*.3,.3)
Pn(lambda: whoosh(.5,False),'francia',.4,-.3); Pn(lambda: stamp(),'francia',.5)
Pn(lambda: stinger(45),'frente',.5); Pn(lambda: boom(1.0,50,.7),'frente',.6)
Pn(lambda: stamp(),'dic',.4); Pn(lambda: stamp(),'n14b',.6)
Pn(lambda: whoosh(.5),'dejo',.35,-.2); Pn(lambda: clang(),'zoo',.5); Pn(lambda: bell(392,2.5),'zoo',.4)
Pn(lambda: drip(),'recoger',.4)
# S7
Pn(lambda: sparkle(1.4),'famosa',.5); Pn(lambda: stamp(),'famosa',.7); Pn(lambda: cheer(1.8),'famosa',.25)
Pn(lambda: pop(800),'ninos',.5); Pn(lambda: pop(950),'ninos',.4)
for k in range(5): P(lambda: pop(600+k*60),E['comer']+k*.12,.25)
Pn(lambda: riser(.7,150,1200,.3),'n1919',.35,-.7); Pn(lambda: stamp(),'n1919',.9); Pn(lambda: boom(1.0,52,.7),'n1919',.6); Pn(impact,'n1919',.5)
Pn(lambda: chime(880,2.0),'siempre',.45); Pn(lambda: stamp(),'siempre',.45)
# S8
Pn(lambda: whoosh(.4),'chris',.3,-.2); Pn(lambda: stamp(),'chris',.4)
Pn(lambda: stamp(),'milne',.4)
Pn(lambda: pop(900),'osito',.7); Pn(lambda: sparkle(1.2),'osito',.45)
Pn(lambda: riser(.7,150,1200,.3),'n1926',.35,-.7); Pn(lambda: stamp(),'n1926',.9); Pn(lambda: boom(1.0,52,.7),'n1926',.6); Pn(lambda: fanfare(50,1.6),'n1926',.4)
Pn(lambda: paper(),'publico',.4)
Pn(lambda: sparkle(1.4),'pu2',.5); Pn(lambda: chime(1047,2.0),'pu2',.45)
# S9
Pn(lambda: stamp(),'real',.4)
Pn(lambda: whoosh(.4),'londres9',.3,-.2)
for k in range(16): P(lambda: tick(),E['londres9']+k*.1,.18)
Pn(lambda: stinger(45),'n1934',.55); Pn(lambda: stamp(),'n1934',1.0); Pn(lambda: boom(1.2,48,.8),'n1934',.7); Pn(lambda: gong(98,3.0),'n1934',.35)
# S10
Pn(lambda: whoosh(.4),'harry10',.3,-.2)
Pn(lambda: stamp(),'bien',.5); Pn(lambda: clunk(),'bien',.4)
Pn(lambda: stamp(),'casa',.5); Pn(lambda: knock(),'casa',.5)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7); Pn(lambda: whoosh(.4),'coment',.3)
Pn(lambda: ping(1600,.5),'sig',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7,t8,t9,t10=T[1:11]
layer_pad(0,t1,.3,lpf=1500); layer_drone(0,t1,.3); layer_bass(0,t1,.24)
layer_pad(t1,t2,.32,lpf=1500); layer_drums(t1,t2,.3,'march'); layer_bass(t1,t2,.26); layer_arp(t1,t2,.2,step=1)
layer_pad(t2,t3,.3,lpf=1300); layer_arp(t2,t3,.22,step=1); bells(t2,t3,.12,seed=3)
layer_pad(t3,t4,.3,lpf=1600); layer_arp(t3,t4,.26,step=.5); layer_drums(t3,t4,.26,'light'); bells(t3,t4,.16,seed=5)
layer_drone(t4,t5,.3); layer_pad(t4,t5,.28,lpf=1000); bells(t4,t5,.14,seed=7)
layer_pad(t5,t6,.32,lpf=1700); layer_arp(t5,t6,.24,step=.5); layer_drums(t5,t6,.3,'light'); layer_bass(t5,t6,.24)
layer_pad(t6,t7,.32,lpf=1400); layer_drums(t6,t7,.36,'march'); layer_bass(t6,t7,.3)
layer_pad(t7,t8,.34,lpf=1900); layer_arp(t7,t8,.3,step=.5); layer_drums(t7,t8,.3,'light'); bells(t7,t8,.2,seed=9)
layer_pad(t8,t9,.32,lpf=1500); layer_arp(t8,t9,.24,step=1); bells(t8,t9,.18,seed=11); layer_bass(t8,t9,.24)
layer_drone(t9,t10,.34); layer_pad(t9,t10,.26,lpf=800); bells(t9,t10,.12,seed=13)
layer_drums(t10,DUR,.38,'pop'); layer_pad(t10,DUR,.34,lpf=2000); layer_arp(t10,DUR,.32,step=.5); bells(t10,DUR,.22,seed=15); layer_bass(t10,DUR,.3)
duck(E['guerra']-.05,E['guerra']+.4,.4,.4); duck(E['veinte']-.05,E['veinte']+.5,.4,.4); duck(E['frente']-.05,E['frente']+.5,.4,.4); duck(E['n1934']-.05,E['n1934']+1.0,.5,.4)
save()
