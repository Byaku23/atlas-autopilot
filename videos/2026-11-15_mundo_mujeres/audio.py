import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
MA=[('Cm7',48,[60,63,67,70]),('Abmaj7',44,[56,60,63,67]),('Ebmaj7',51,[58,63,67,70]),('Bb',46,[58,62,65,70])]
setMusic(100,MA)
trSfx(TRS,E)
# S0 gancho: los hombres se desvanecen, aparece Venus
Pn(lambda: whoosh(.5),'desap',.5,-.1); Pn(lambda: glitch(.5),'desap',.5); Pn(lambda: sparkle(1.4),'desap',.6); Pn(lambda: boom(1.0,65,.5),'desap',.5)
Pn(lambda: stinger(48),'muj',.5,-.05); Pn(impact,'muj',.7); Pn(lambda: chime(1400,1.4),'muj',.5); Pn(lambda: sparkle(1.2),'muj',.5,.1)
Pn(lambda: pop(900),'tard',.6); Pn(lambda: boing(300,.4),'tard',.3)
Pe(lambda: riser(.5,300,1800,.35),'muj',.5,.4)
# S1 bebés / esperma / papel
Pn(lambda: babycry(.9),'beb',.45,.05); Pn(lambda: pop(800),'beb',.6)
for k in range(5): Pn(lambda: pop(700+k*90),'gen',.45,.1+k*.12)
Pn(lambda: downsweep(.8),'gen',.4,.3); Pn(lambda: stamp(),'gen',.5,.55)
Pn(lambda: chime(900,1.2),'hip',.4); Pn(lambda: hum(1.6,60),'esp',.2,-.2); Pn(lambda: steam(1.2),'esp',.3); Pn(lambda: ping(1500,.5),'esp',.4)
for k in range(10): P(lambda: drip(),E['esp']+.3+k*.18,.25)
Pn(lambda: downsweep(1.2),'agu',.35); Pn(lambda: whoosh(.4),'pap',.5,-.1); Pn(lambda: scratch(.3),'pap',.4,.5); Pn(lambda: boing(220,.5),'pap',.5)
Pn(lambda: clunk(),'bano',.5); Pn(lambda: tada(),'bano',.5); Pn(lambda: sparkle(1.0),'bano',.5)
# S2 crimen: 9 de 10, 93 %, celdas
Pn(lambda: stamp(),'nueve',.7); Pn(lambda: pop(900),'nueve',.5)
for k in range(10): P(lambda: pop(650+k*70),E['nueve']+.1+k*.05,.35)
Pn(lambda: stinger(45),'homic',.4,-.1); Pn(lambda: zap(.3),'hom2',.4); Pn(lambda: boom(.7,70,.5),'hom2',.5)
Pn(lambda: riser(.5,300,1900,.35),'nov',.4,-.5); Pn(lambda: stamp(),'nov',.7)
for k in range(30): P(cntTick,E['nov']+k*.04,.35)
Pn(lambda: shatter(),'vac',.3,.05); Pn(lambda: glitch(.5),'vac',.45); Pn(lambda: clang(),'carc',.5); Pn(lambda: clunk(),'carc',.6,.1)
Pn(lambda: tada(),'vac',.45,.15)
# S3 ojo: serio
Pn(lambda: buzz(),'ojo',.5); Pn(lambda: stinger(40),'ojo',.55,-.05); Pn(lambda: boom(1.0,55,.6),'ojo',.6)
Pn(lambda: clang(),'delit',.35); Pn(lambda: ping(900,.8),'delit',.4)
Pn(lambda: riser(.6,200,1200,.3),'mitad',.4,-.6); Pn(impact,'mitad',.5); Pn(lambda: heart(),'ases',.55); Pn(lambda: heart(),'pareja',.5,.5)
# S4 casa
Pn(lambda: knock(),'casa',.5); Pn(lambda: knock(),'casa',.4,.2); Pn(lambda: pop(800),'nada',.5)
for k in range(8): P(step,E['casa']+.4+k*.28,.3)
Pn(lambda: stamp(),'set',.6); 
for k in range(20): P(cntTick,E['set']+k*.045,.35)
Pn(lambda: chime(1000,1.2),'cuid',.4); Pn(lambda: sparkle(.9),'cuid',.4)
Pn(lambda: coin(),'cobrar',.5); Pn(lambda: scratch(.3),'cobrar',.4,.1); Pn(lambda: stamp(),'cobrar',.7); Pn(lambda: glitch(.3),'cobrar',.3)
# S5 universidad + Science
Pn(lambda: whoosh(.6),'estu',.5,-.1); Pn(lambda: riser(1.2,200,1400,.3),'trece',.35,-.2)
for k in range(24): P(cntTick,E['estu']+.4+k*.05,.3)
Pn(lambda: stamp(),'trece',.5,.8); Pn(lambda: chime(1200,1.2),'cien',.4); Pn(lambda: sparkle(1.0),'cien',.4)
Pn(lambda: notif(),'science',.6); Pn(lambda: whoosh(.4),'science',.4,-.1); Pn(lambda: typew(),'science',.4,.1)
for k in range(14): P(lambda: ping(900+k*60,.2),E['rel']+k*.12,.25)
Pn(lambda: pop(1000),'escu',.6); Pn(lambda: pop(700),'escu',.5,.6); Pn(lambda: pop(1000),'turnos',.6,-.4); Pn(lambda: pop(700),'turnos',.6); Pn(lambda: tada(),'turnos',.3,.3)
# S6 músculo, muertes laborales, piano
Pn(lambda: scratch(.3),'vent',.4); Pn(lambda: boom(.8,70,.5),'vent',.5); Pn(lambda: stamp(),'cuar',.7)
for k in range(16): P(cntTick,E['cuar']+k*.05,.35)
Pn(lambda: growl(.5),'mus',.25); Pn(lambda: stinger(42),'mus',.4)
Pn(lambda: stamp(),'nueve2',.7); 
for k in range(10): P(lambda: pop(600+k*60),E['nueve2']+.1+k*.05,.3)
Pn(lambda: clang(),'obras',.55); Pn(lambda: clunk(),'obras',.4); Pn(lambda: knock(),'minas',.5); Pn(lambda: clang(),'minas',.5,.1); Pn(lambda: wind(.8),'tej',.3,-.2); Pn(lambda: pop(900),'tej',.5)
Pn(lambda: boing(160,.7),'piano',.6,-.5); Pn(lambda: creak(1.2),'piano',.35,-.4); Pn(lambda: whoosh(.7),'piano',.4); Pn(lambda: pop(950),'piano',.7); Pn(lambda: clunk(),'piano',.45)
Pn(lambda: scratch(.4),'quinto',.5); Pn(lambda: boing(220,.6),'quinto',.5); Pn(lambda: zap(.3),'quinto',.3)
# S7 Umoja
Pn(lambda: whoosh(.5),'kenia',.4); Pn(lambda: chime(900,1.4),'umoja',.5); Pn(lambda: bell(600,2.5),'umoja',.4); Pn(lambda: sparkle(1.2),'umoja',.5)
Pn(lambda: stamp(),'solo7',.5)
for k in range(30): P(cntTick,E['mil']+k*.05,.3)
Pn(lambda: tada(),'nov90',.5,.2)
# S8 debate
Pn(lambda: pop(900),'seguro',.6); Pn(lambda: sparkle(.9),'seguro',.4); Pn(lambda: zap(.3),'func',.4); Pn(lambda: pop(700),'func',.6)
Pn(notif,'coment',.8); Pn(lambda: pop(900),'coment',.7)
Pn(lambda: whoosh(.4),'tard2',.5,-.1); Pn(lambda: stinger(50),'tard2',.45); Pn(lambda: boom(.9,65,.4),'tard2',.4)
Pn(lambda: ping(1600,.5),'sig',.4); Pn(lambda: sparkle(1.2),'sig',.4)
# ---- música ----
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
layer_pad(0,t1,.3,lpf=1400); layer_drone(0,t1,.3); layer_drums(.7,t1,.32,'pop')
layer_pad(t1,t2,.28,lpf=1500); layer_arp(t1,t2,.3,step=.5); layer_bass(t1,t2,.3); layer_drums(t1,t2,.3,'light'); bells(t1,t2,.15,seed=3)
layer_pad(t2,t3,.3,lpf=1200); layer_ost(t2,t3,.3); layer_bass(t2,t3,.3); layer_drums(t2,t3,.32,'trap')
layer_pad(t3,t4,.35,lpf=900); layer_drone(t3,t4,.4); swell(E['mitad']-.8,E['mitad']+.2,.3,(48,55,60,63))
layer_pad(t4,t5,.3,lpf=1300); layer_arp(t4,t5,.28,step=.5); layer_bass(t4,t5,.25); layer_drums(t4,t5,.25,'light')
layer_pad(t5,t6,.3,lpf=1500); layer_arp(t5,t6,.3,step=.5); bells(t5,t6,.2,seed=7); layer_drums(t5,t6,.3,'pop'); layer_bass(t5,t6,.3)
layer_pad(t6,t7,.3,lpf=1100); layer_ost(t6,t7,.3); layer_bass(t6,t7,.3); layer_drums(t6,t7,.3,'trap')
layer_pad(t7,t8,.35,lpf=1400); layer_arp(t7,t8,.3,step=.5); bells(t7,t8,.25,seed=11); layer_drums(t7,t8,.25,'tribal')
layer_drums(t8,DUR,.4,'pop'); layer_pad(t8,DUR,.35,lpf=2000); layer_arp(t8,DUR,.35,step=.5); bells(t8,DUR,.25,seed=15); layer_bass(t8,DUR,.3)
duck(E['muj']-.2,E['muj']-.02,.6,.1); duck(E['ojo']-.05,E['ojo']+.4,.4,.4); duck(E['piano']-.1,E['piano']+.3,.5,.3)
save()
