import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('Am7',45,[57,60,64,67]),('Fmaj7',41,[57,60,64,65]),('Cmaj7',48,[60,64,67,71]),('G7',43,[55,59,62,65])]
setMusic(84,MA)
trSfx(TRS,E)
# S0 gancho
Pn(lambda: meow(.7,600),'eng',.6,-.05); Pn(lambda: boom(.8,70,.5),'eng',.4); Pn(lambda: sparkle(.8),'eng',.3)
P(lambda: purr(3.2),.9,.5)
Pn(lambda: babycry(.5),'llanto',.35,.1); Pn(lambda: pop(900),'llanto',.7); Pn(lambda: stinger(50),'llanto',.3)
Pn(lambda: riser(.45,300,1700,.3),'ron',.4,-.5); Pn(impact,'ron',.8)
# S1 feliz / miedo / duele
Pn(lambda: chime(1200,1.2),'feliz',.5); Pn(lambda: sparkle(1.0),'feliz',.5)
Pn(lambda: purr(1.6),'feliz',.35,.05)
Pn(lambda: stinger(50),'miedo',.5); Pn(lambda: zap(.3),'miedo',.3); Pn(lambda: hiss(.5),'miedo',.4)
Pn(lambda: boom(.6,80,.6),'duele',.6); Pn(lambda: meow(.35,820),'duele',.55); Pn(lambda: glitch(.3),'duele',.3,.05)
# S2 25 por segundo + laringe
Pn(lambda: stamp(),'grav',.5)
for k in range(25): P(cntTick,E['veinte']+k*(.9/25),.5)
Pn(lambda: purr(2.0),'grav',.3,.1)
Pn(lambda: pop(800),'veinte',.7); Pn(lambda: chime(1400,1.0),'veinte',.4)
Pn(lambda: boom(.7,90,.5),'prod',.4); Pn(lambda: whoosh(.4),'prod',.4,-.05)
Pn(lambda: buzz(),'lar',.4); Pn(lambda: ping(1200,.5),'lar',.4)
for k in range(8): P(click,E['vel']-1.2+k*.15,.25)
# S3 gatitos
Pn(lambda: meow(.4,900),'gatitos',.45); Pn(lambda: sparkle(1.0),'gatitos',.3)
Pn(lambda: purr(2.4),'gatitos',.3,.1)
Pn(heart,'maman',.6); Pn(lambda: bell(784,2.0),'maman',.35); Pn(lambda: sparkle(1.0),'maman',.4)
# S4 estudio
Pn(stamp,'dos9',.7); Pn(lambda: bell(600,2.0),'dos9',.35)
Pn(lambda: ping(1500,.5),'karen',.5); Pn(lambda: typew(),'suss',.4,-.2)
for k in range(10): P(lambda: pop(700+k*80),E['diez']+k*.06,.4)
Pn(lambda: chime(1100,1.4),'diez',.4)
Pn(lambda: hum(1.2,70),'rela',.2); Pn(lambda: sparkle(.9),'rela',.4)
Pn(lambda: meow(.35,860),'pid',.4); Pn(lambda: pop(1100),'pid',.6); Pn(lambda: boing(300,.4),'pid',.3)
# S5 cincuenta personas
for k in range(14): P(tick,E['cinc']-.2+k*.06,.3)
Pn(stamp,'cinc',.7); Pn(lambda: pop(950),'cinc',.5)
Pn(lambda: riser(.5,300,1800,.35),'urg',.4,-.5); Pn(lambda: buzz(),'urg',.5); Pn(impact,'urg',.5)
Pn(lambda: downsweep(.6),'agr',.4)
for k in range(8): P(lambda: pop(1000+k*60),E['nunca']+k*.05,.35)
Pn(lambda: stamp(),'nunca',.5); Pn(lambda: sparkle(1.0),'nunca',.4)
# S6 secreto
Pn(stamp,'sec',.9); Pn(lambda: boom(1.2,55,.6),'sec',.6); Pn(lambda: scratch(.3),'sec',.4,.15)
P(lambda: purr(3.4),E['grave']-.2,.35)
Pn(lambda: riser(.6,300,2000,.3),'agudo',.4,-.6); Pn(lambda: babycry(.7),'agudo',.35,.0); Pn(lambda: zap(.4),'agudo',.35)
Pn(lambda: whoosh(.4),'llan2',.5,-.3); Pn(lambda: pop(1000),'llan2',.7); Pn(lambda: babycry(1.0),'llan2',.5,.05); Pn(lambda: sparkle(1.0),'llan2',.4)
# S7 quitar el llanto
Pn(lambda: whoosh(.55),'quit',.6); Pn(lambda: glitch(.5),'quit',.5)
Pn(lambda: downsweep(.7),'menos',.5); Pn(lambda: boom(.8,60,.4),'menos',.4)
Pn(lambda: riser(.7,300,1800,.35),'exag',.4,-.7); Pn(lambda: babycry(.9),'exag',.4,.05); Pn(lambda: zap(.4),'exag',.3)
Pn(lambda: clunk(),'func',.6)
for k in range(8): P(lambda: pop(1000+k*50),E['func']+.15+k*.04,.3)
Pn(lambda: tada(),'func',.4); Pn(heart,'func',.7,.2); Pn(lambda: sparkle(1.2),'func',.5)
# S8 CTA
Pn(lambda: chime(1200,1.0),'asi',.4)
Pn(lambda: pop(900),'quiere',.6); Pn(heart,'quiere',.5); Pn(lambda: pop(1100),'comida',.6); Pn(lambda: clunk(),'comida',.4)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7); Pn(lambda: whoosh(.4),'coment',.3)
Pn(lambda: ping(1600,.5),'sig2',.4); Pn(lambda: sparkle(1.2),'sig2',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
layer_pad(0,t1,.3,lpf=1100); layer_drone(0,t1,.3); layer_drums(1.0,t1,.3,'light')
layer_pad(t1,t2,.3,lpf=1500); layer_arp(t1,t2,.3,step=.5); layer_bass(t1,t2,.3); layer_drums(t1,t2,.3,'light')
layer_pad(t2,t3,.3,lpf=1300); layer_arp(t2,t3,.28,step=.5); layer_drums(t2,t3,.3,'light'); layer_bass(t2,t3,.3)
layer_pad(t3,t4,.35,lpf=900); bells(t3,t4,.22,seed=4)
layer_pad(t4,t5,.3,lpf=1200); layer_arp(t4,t5,.28,step=.5); layer_bass(t4,t5,.25); layer_drums(t4,t5,.25,'light')
layer_pad(t5,t6,.3,lpf=1300); layer_drone(t5,t6,.3); bells(t5,t6,.2,seed=7); layer_drums(t5,t6,.22,'hats')
layer_pad(t6,t7,.35,lpf=900); layer_drone(t6,t7,.4); swell(E['agudo']-.8,E['llan2']-.25,.3,(57,64,69,72))
layer_pad(t7,t8,.3,lpf=1400); layer_arp(t7,t8,.3,step=.5); layer_drums(t7,t8,.3,'light'); bells(t7,t8,.2,seed=9); layer_bass(t7,t8,.25)
layer_drums(t8,DUR,.4,'pop'); layer_pad(t8,DUR,.35,lpf=2000); layer_arp(t8,DUR,.35,step=.5); bells(t8,DUR,.25,seed=15); layer_bass(t8,DUR,.3)
duck(E['llan2']-.22,E['llan2']-.02,.6,.1); duck(E['sec']-.05,E['sec']+.4,.4,.4); duck(E['quit']-.05,E['quit']+.5,.5,.4)
save()
