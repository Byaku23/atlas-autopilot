import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('Dm',38,[50,53,57,62]),('Bb',34,[46,50,53,58]),('F',41,[53,57,60,65]),('A',33,[45,49,52,57])]
setMusic(92,MA)
trSfx(TRS,E)
def trump(d=1.2,f0=420,g=1.0):
    s,f=glide([f0*.8,f0*1.5,f0*1.9,f0*1.6,f0*1.0],d); t=tt(d)
    x=2*((np.cumsum(f*(1+.04*np.sin(2*np.pi*11*t)))/sr)%1)-1; x=bp(x,350,1800)*1.0+bp(x,1800,3500)*.5
    e=np.minimum(1,t/.05)*np.minimum(1,(d-t)/.35); return reverb(fade(x*e*.55*g,.01,.05),1.4,.25,2)
def chug(t0,n,gap,g=.3):
    for k in range(n): P(lambda: hiss(.12),t0+k*gap,g*(0.7+0.3*(k%2)))
# S0 gancho
P(lambda: crowd(3.0),0.0,.12)
Pn(lambda: trump(1.3,430),'famoso',.5,-.1); Pn(lambda: boom(.8,60,.5),'famoso',.35)
Pn(lambda: paper(),'dicc',.5); Pn(lambda: ping(1400,.6),'dicc',.35)
Pn(lambda: riser(.6,200,1500,.3),'jumbo',.4,-.6); Pn(impact,'jumbo',.9); Pn(lambda: stamp(),'jumbo',.6); Pn(lambda: fanfare(50,1.8),'jumbo',.4); Pn(lambda: sparkle(1.2),'jumbo',.4)
# S1 Sudán
P(lambda: wind(6.0),T[1]+.1,.2)
Pn(lambda: stamp(),'sudan',.4)
Pn(lambda: whoosh(.4,False),'caz',.3,-.2); Pn(lambda: step(),'caz',.4)
Pn(lambda: boom(.9,70,.8),'mataron',.8); Pn(impact,'mataron',.5)
Pn(lambda: howl(1.4),'madre',.2,.1) if False else None
Pn(lambda: trump(1.1,360,.8),'madre',.4,.1)
Pn(lambda: creak(.8),'llev',.35)
Pn(lambda: stinger(45),'cria',.5); Pn(lambda: boom(1.0,50,.6),'cria',.5)
# S2 Londres
Pn(lambda: bell(392,2.5),'zoo',.4); Pn(lambda: clang(),'zoo',.5)
Pn(lambda: stamp(),'londres',.35)
Pn(lambda: drip(),'flaco',.45)
Pn(lambda: riser(.7,150,1200,.3),'seis',.35,-.7); Pn(lambda: boom(1.0,48,.7),'seis',.6); Pn(lambda: trump(1.0,400,.9),'seis',.45,.05)
Pn(lambda: stamp(),'tonel',.5)
# S3 nervioso
Pn(lambda: whoosh(.4),'volvio',.3,-.2)
for k in range(14): P(lambda: scratch(.12),E['desgast']+k*.28,.2)
for k in range(8): P(lambda: tick(),E['desgast']+.1+k*.28,.2)
Pn(lambda: hum(2.5,60),'miedo',.0) if False else None
for k in range(8): P(lambda: heart(),E['miedo']+k*.28,.3)
Pn(lambda: stinger(45),'dano',.55); Pn(lambda: stamp(),'dano',1.0); Pn(lambda: boom(1.2,50,.8),'dano',.7)
# S4 venta
Pn(lambda: stamp(),'vend',1.0); Pn(lambda: boom(1.0,55,.7),'vend',.6); Pn(lambda: paper(),'vend',.4,-.3)
for k in range(8): P(tick,E['diez']-.1+k*.1,.25)
Pn(lambda: cashreg(),'diez',.55); Pn(lambda: coin(),'dolares',.4)
Pn(lambda: riser(E['estallo']-E['londres4'],200,1600,.3),'londres4',.35)
Pn(impact,'estallo',1.0); Pn(lambda: crowd(2.5),'estallo',.35); Pn(lambda: boom(1.2,50,.8),'estallo',.7)
for k in range(10): P(lambda: paper(),E['miles']+k*.12,.22)
Pn(lambda: stamp(),'protestas',.5); Pn(lambda: knock(),'protestas',.5)
Pn(lambda: whoosh(.5,False),'reina',.4,-.3); Pn(lambda: fanfare(50,1.6),'reina',.45); Pn(lambda: sparkle(1.2),'reina',.4)
Pn(lambda: stamp(),'quejo',.55); Pn(lambda: gong(98,3.0),'quejo',.35)
# S5 Nueva York
Pn(lambda: whoosh(.4),'recup',.3,-.2)
for k in range(24): P(lambda: coin(),E['recup']+k*.09,.28)
Pn(lambda: cashreg(),'tres',.55); Pn(lambda: stamp(),'tres',.5)
Pn(lambda: sparkle(1.2),'sem',.45); Pn(lambda: stamp(),'sem',.4)
# S6 tren
P(lambda: engine(3.4),T[6]+.1,.22)
chug(T[6]+.2,14,.22,.3)
Pn(lambda: whistle(1.0),'recorrio',.35,-.1) if False else None
Pn(lambda: whoosh(.5,False),'recorrio',.35,-.2); Pn(lambda: stamp(),'tren6',.4)
# S7 muerte
P(lambda: wind(8.0),T[7]+.2,.25)
Pn(lambda: bell(440,3.0),'quince',.4); Pn(lambda: stamp(),'quince',.4)
Pn(lambda: stamp(),'canada',.45)
for k in range(8): P(lambda: step(),T[7]+.6+k*.5,.22)
Pn(lambda: riser(.9,150,1400,.35),'carga',.4,-.7)
P(lambda: engine(2.5),E['atro']-1.5,.3)
Pn(lambda: whistle(1.2),'atro',.35,-.3) if False else None
Pn(impact,'atro',1.0); Pn(lambda: boom(1.4,45,.9),'atro',.9); Pn(lambda: crowd(1.5),'atro',.1) if False else None
Pn(lambda: bell(330,4.0),'tenia',.5); Pn(lambda: drip(),'tenia',.4)
for k in range(10): P(tick,E['tenia']-.05+k*.065,.25)
Pn(lambda: stamp(),'anos24',.6); Pn(lambda: boom(1.0,48,.6),'anos24',.5)
# S8 versión
Pn(lambda: paper(),'conto',.5); Pn(lambda: whoosh(.4),'conto',.3,-.2)
Pn(lambda: trump(.8,480,.6),'salv',.3,.0)
Pn(lambda: whoosh(.5,False),'versi',.3,-.2)
Pn(lambda: scratch(.4),'pudo',.35)
Pn(lambda: stamp(),'inv',1.0); Pn(lambda: boom(1.2,50,.8),'inv',.7); Pn(impact,'inv',.6)
# S9 piel y esqueleto
Pn(lambda: whoosh(.5),'esq',.3,-.2); Pn(lambda: click(),'esq',.5)
for k in range(8): P(lambda: pop(500+k*40),E['esq']+.1+k*.14,.25)
Pn(lambda: chime(659,2.0),'museo',.4); Pn(lambda: stamp(),'museo',.4)
Pn(lambda: riser(.7,150,1200,.3),'quemo',.3,-.7); Pn(lambda: flameOn(),'quemo',.6); Pn(lambda: crackle(3.0),'quemo',.35); Pn(lambda: boom(1.0,50,.7),'quemo',.6)
Pn(lambda: stamp(),'n75',.8); Pn(lambda: boom(1.2,48,.8),'n75',.7); Pn(impact,'n75',.5)
# S10 jumbo
Pn(lambda: whoosh(.5,False),'jumbo10',.35,-.3); Pn(lambda: stamp(),'jumbo10',.7); Pn(lambda: boom(.9,55,.6),'jumbo10',.5); Pn(lambda: sparkle(1.2),'jumbo10',.4)
Pn(lambda: ping(1100,.6),'gigante',.4)
Pn(lambda: pop(800),'huevos',.6); Pn(lambda: pop(950),'huevos',.5)
Pn(lambda: whoosh(.6,True),'jet',.5,-.3); Pn(lambda: stamp(),'jet',.35)
# S11 cierre
Pn(lambda: chime(1000,1.0),'explot',.4); Pn(lambda: pop(700),'explot',.6)
Pn(lambda: pop(950),'inmortal',.7); Pn(lambda: sparkle(1.0),'inmortal',.45)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7); Pn(lambda: whoosh(.4),'coment',.3)
Pn(lambda: ping(1600,.5),'sig',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11=T[1:12]
layer_pad(0,t1,.32,lpf=1500); layer_drums(0,t1,.32,'march'); layer_bass(0,t1,.26)
layer_drone(t1,t2,.34); layer_pad(t1,t2,.3,lpf=1000); bells(t1+1,t2,.14,seed=3)
layer_pad(t2,t3,.3,lpf=1100); layer_arp(t2,t3,.2,step=1); layer_bass(t2,t3,.22)
layer_drone(t3,t4,.32); layer_pad(t3,t4,.28,lpf=900); swell(E['miedo'],E['dano'],.3,(50,57,62,65))
layer_pad(t4,t5,.34,lpf=1700); layer_arp(t4,t5,.28,step=.5); layer_drums(t4,t5,.32,'light'); layer_bass(t4,t5,.26)
layer_pad(t5,t6,.34,lpf=1900); layer_arp(t5,t6,.3,step=.5); layer_drums(t5,t6,.35,'march'); bells(t5,t6,.2,seed=7)
layer_pad(t6,t7,.32,lpf=1500); layer_drums(t6,t7,.38,'march'); layer_bass(t6,t7,.3)
layer_drone(t7,t8,.36); layer_pad(t7,t8,.28,lpf=800); bells(t7,t8,.14,seed=11)
layer_pad(t8,t9,.28,lpf=1000); layer_arp(t8,t9,.2,step=1); layer_drone(t8,t9,.28)
layer_pad(t9,t10,.3,lpf=1100); layer_drone(t9,t10,.3); layer_arp(t9,t10,.22,step=1)
layer_pad(t10,t11,.34,lpf=1900); layer_arp(t10,t11,.3,step=.5); layer_drums(t10,t11,.34,'pop'); bells(t10,t11,.22,seed=13)
layer_drums(t11,DUR,.38,'pop'); layer_pad(t11,DUR,.34,lpf=2000); layer_arp(t11,DUR,.32,step=.5); bells(t11,DUR,.22,seed=15); layer_bass(t11,DUR,.3)
duck(E['mataron']-.05,E['mataron']+.4,.4,.4); duck(E['dano']-.05,E['dano']+.5,.4,.4); duck(E['atro']-.05,E['atro']+1.0,.5,.4); duck(E['inv']-.05,E['inv']+.5,.4,.4); duck(E['n75']-.05,E['n75']+.5,.4,.4)
save()
