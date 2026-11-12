import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
CM=[('C',48,[60,64,67,72]),('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('G',43,[55,59,62,67])]
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('G',43,[55,59,62,67])]
setMusic(92,CM)
trSfx(TRS,E)
# gancho
Pn(pop,'h_feliz',.6); Pn(lambda: chime(1046,1.0),'h_feliz',.4); Pn(heart,'h_feliz',.5,.05); Pn(lambda: sparkle(.8),'h_feliz',.3)
Pn(lambda: whoosh(.4),'h_cien',.3); Pn(lambda: riser(.8,200,1500,.3),'h_mir',.4,-.1)
Pn(stamp,'h_lado',.6); Pn(lambda: boom(1.0,60,.5),'h_lado',.5); Pn(lambda: ping(1320,.6),'h_lado',.4)
# Italia 2007
Pn(stamp,'s1_siete',.7); Pn(lambda: boom(1.0,55,.5),'s1_siete',.5); Pn(pop,'s1_ita',.6); Pn(lambda: chime(880,1.0),'s1_ita',.4)
Pn(shutter,'s1_grabo',.9); Pn(impact,'s1_grabo',.5); Pn(lambda: beep(.12),'s1_grabo',.4,.12)
for k in range(3): Pn(pop,'s1_dist',.6,k*.13); Pn(lambda: ping(900+k*200,.5),'s1_dist',.3,k*.13)
# derecha
Pn(pop,'s2_dueno',.7); Pn(heart,'s2_dueno',.7,.05); Pn(lambda: chime(1318,1.2),'s2_dueno',.4)
Pn(lambda: whoosh(.6,True),'s2_acerc',.4,-.2)
for k in range(6): P(step,E['s2_acerc']+k*.28,.25)
Pn(stamp,'s2_der',.8); Pn(lambda: boom(1.0,60,.5),'s2_der',.5); Pn(lambda: ping(1568,.8),'s2_der',.45); Pn(lambda: sparkle(1.0),'s2_der',.4)
# izquierda
Pn(growl,'s3_grande',.55,-.3); Pn(lambda: sub(1.4,42),'s3_grande',.6); Pn(lambda: boom(1.2,50,.5),'s3_grande',.5,.1)
Pn(lambda: stinger(45),'s3_desc',.35); Pn(heart,'s3_desc',.4)
Pn(stamp,'s3_izq',.8); Pn(lambda: downsweep(1.0),'s3_izq',.45); Pn(lambda: boom(1.2,45,.6),'s3_izq',.6)
# diferencia mínima / video
Pn(lambda: ping(1760,.4),'s4_min',.3); Pn(pop,'s4_min',.4)
Pn(buzz,'s4_imp',.35); Pn(lambda: whoosh(.3),'s4_imp',.3); Pn(lambda: zap(.3),'s4_imp',.3,.15)
Pn(click,'s4_solo',.5)
for k in range(8): P(tick,E['s4_solo']+.35+k*.2,.4)
Pn(pop,'s4_anal',.7); Pn(lambda: sparkle(1.0),'s4_anal',.4)
Pn(shutter,'s4_vid',.6)
# lobos y zorros vs perros
Pn(lambda: howl(1.8,420),'s5_lobos',.3,-.1); Pn(pop,'s5_zor',.5)
Pn(lambda: downsweep(.8),'s5_no',.35)
Pn(pop,'s5_per',.7); Pn(bark,'s5_per',.55,.1)
Pn(lambda: sparkle(1.0),'s5_si',.5); Pn(bark,'s5_si',.7); Pn(stamp,'s5_si',.5)
for k in range(8): P(swish,E['s5_si']+.3+k*.2,.15)
Pn(stamp,'s5_dom',.8); Pn(lambda: boom(1.2,50,.6),'s5_dom',.6); Pn(lambda: chime(1046,1.4),'s5_dom',.4)
# zorros plateados
Pn(pop,'s6_pista',.5); Pn(swish,'s6_exp',.5,-.1); Pn(lambda: sparkle(1.2),'s6_plat',.55); Pn(lambda: ping(1760,.8),'s6_plat',.35)
for k in range(5): P(pop,E['s6_crian']+.1+k*.45,.55); P(lambda: ping(700+k*150,.5),E['s6_crian']+.1+k*.45,.3)
Pn(lambda: riser(1.0,200,1400,.3),'s6_gen',.4,-1.0); Pn(stamp,'s6_gen',.5)
Pn(pop,'s6_dom',.6); Pn(lambda: whoosh(.5),'s6_mov',.4); Pn(lambda: sparkle(1.0),'s6_mov',.4)
# misterio y teoría
Pn(lambda: boing(180,.7),'s7_pas',.5); Pn(impact,'s7_pas',.7); Pn(lambda: sub(1.2,44),'s7_pas',.5)
Pn(lambda: whoosh(.4),'s7_nadie',.3); Pn(lambda: boom(.9,60,.4),'s7_cert',.45)
Pn(lambda: chime(988,1.2),'s7_teo',.4); Pn(pop,'s7_hum',.6)
for tt_ in (59.8,60.35,60.9,61.45,61.95): P(tick,tt_,.6); P(lambda: ping(1200,.4),tt_,.25)
Pn(tada,'s7_mov',.5); Pn(bark,'s7_mov',.6); Pn(lambda: sparkle(1.2),'s7_mov',.5)
# cierre
Pn(pop,'c_asi',.6)
Pn(swish,'c_ti',.5,-.1); Pn(lambda: whoosh(.3),'c_ti',.3); Pn(pop,'c_ti',.4)
Pn(swish,'c_plato',.5,-.1); Pn(pop,'c_plato',.5)
Pn(notif,'c_com',.8); Pn(pop,'c_com',.7)
Pn(pop,'c_sig',.6); Pn(lambda: chime(1318,1.4),'c_sig',.4)
# música
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
layer_pad(0,t1,.3,lpf=1100); layer_arp(0,t1,.3,step=1); layer_drone(0,t1,.35)
layer_pad(t1,t3,.3,lpf=1500); layer_arp(t1,t3,.3); layer_drums(t2,t3,.3,'light'); bells(t1,t3,.18,seed=3)
layer_drone(t3,t4,.45); layer_pad(t3,t4,.25,lpf=800)
layer_pad(t4,t5,.3,lpf=1300); layer_arp(t4,t5,.3,step=.5); bells(t4,t5,.2,seed=5)
setMusic(96,AM); layer_drums(t5,t6,.4,'pop'); layer_bass(t5,t6,.3,prog=AM); layer_arp(t5,t6,.3,prog=AM); layer_pad(t5,t6,.28,prog=AM,lpf=1600)
layer_drums(t6,t7,.45,'pop'); layer_bass(t6,t7,.35,prog=AM); layer_pad(t6,t7,.3,prog=AM,lpf=1800); bells(t6,t7,.2,prog=AM,seed=8)
setMusic(80,AM); layer_drone(t7,t8,.4); layer_pad(t7,t8,.3,prog=AM,lpf=900); swell(E['s7_teo'],E['s7_mov'],.25,(57,64,69,72)); bells(t8-0.01,t8,.0,prog=AM,seed=9)
setMusic(92,CM); layer_drums(t8,DUR,.35,'light'); layer_pad(t8,DUR,.35,prog=CM,lpf=1800); layer_arp(t8,DUR,.3,prog=CM); bells(t8,DUR,.22,prog=CM,seed=14)
duck(E['s7_pas'],E['s7_pas']+.5,.5,.4); duck(E['s3_izq'],E['s3_izq']+.4,.5,.4)
save()
