import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('G',43,[55,59,62,67])]
DM=[('Dm',50,[62,65,69,74]),('Bb',46,[58,62,65,70]),('F',41,[57,60,65,69]),('C',48,[55,60,64,67])]
setMusic(72,AM)
trSfx(TRS,E)
# S0 gancho
P(lambda: wind(5.0),0,.3)
for k in range(2): P(heart,.3+k*.6,.45)
P(lambda: whoosh(.25),E['h_casi']-.25,.3); Pn(stamp,'h_diez',.7); Pn(lambda: sub(1.3,45),'h_diez',.6); Pn(lambda: chime(660,1.6),'h_diez',.35)
Pn(lambda: whoosh(.4),'h_nunca',.3); Pn(lambda: boom(1.0,55,.5),'h_volver',.5); Pn(lambda: ping(880,1.0),'h_volver',.3)
# S1 presentación
Pn(lambda: chime(880,1.4),'s1_nom',.5); Pn(lambda: sparkle(1.0),'s1_nom',.35); Pn(pop,'s1_akita',.6); Pn(bark,'s1_akita',.25,.15)
Pn(pop,'s1_nac',.4); Pn(stamp,'s1_1923',.7); Pn(lambda: boom(1.0,60,.5),'s1_1923',.5)
for k in range(6): P(step,E['s1_prof']-.2+k*.2,.3)
Pn(lambda: bell(660,2.0),'s1_ueno',.35); Pn(pop,'s1_ueno',.5); Pn(pop,'s1_tokio',.5); Pn(lambda: ping(1046,.7),'s1_tokio',.3)
P(lambda: purr(1.0) if False else sparkle(.8),E['s1_prof']+1.1,.3)
# S2 rutina
for k in range(10): P(step,E['s2_man']+.2+k*.3,.28)
Pn(lambda: whoosh(.5),'s2_man',.3); Pn(lambda: bell(784,2.5),'s2_shib',.45); Pn(pop,'s2_shib',.5)
P(lambda: wind(2.0),E['s2_tarde']-.4,.3); Pn(lambda: chime(520,1.4),'s2_tarde',.4); Pn(lambda: chime(700,1.6),'s2_esp',.4); Pn(bark,'s2_esp',.35,.3); Pn(sparkle,'s2_esp',.3,.1)
# S3 el tren
Pn(lambda: stamp(),'s3_mayo',.5); Pn(lambda: boom(1.2,50,.5),'s3_mayo',.4); Pn(lambda: clunk(),'s3_mur',.6); Pn(lambda: downsweep(1.2),'s3_mur',.45); Pn(lambda: boom(1.6,40,.8),'s3_mur',.7)
P(lambda: rumble(2.0),E['s3_esa']-.2,.3); P(lambda: engine(1.6) if False else rumble(1.6),27.7,.45); Pn(lambda: whoosh(1.0,False),'s3_tren',.4,-.7)
Pn(lambda: hiss(.9),'s3_tren',.35,.7)
for k in range(5): P(step,E['s3_tren']+.9+k*.17,.3)
for k in range(3): P(heart,E['s3_el']+k*.55,.5)
Pn(lambda: boom(1.8,38,.9),'s3_bajo',.9); Pn(impact,'s3_bajo',.6); Pn(lambda: downsweep(1.4),'s3_bajo',.4)
# S4 estaciones
P(lambda: wind(11.1),T[4],.18)
Pn(lambda: sparkle(1.2),'s4_poc',.4); Pn(lambda: chime(988,1.4),'s4_poc',.35)
P(lambda: chime(1318,1.2),E['s4_dia']-.1,.35); P(lambda: chime(1046,1.2),E['s4_sig2']-.1,.35)
P(lambda: wind(3.5),E['s4_casi']-.2,.45)
P(lambda: riser(E['s4_nueve']-E['s4_casi'],200,1200,.3),E['s4_casi'],.4)
for k in range(9): P(tick,E['s4_nueve']+k*.075,.5)
Pn(stamp,'s4_nueve',.6); Pn(lambda: boom(1.3,50,.7),'s4_nueve',.6); Pn(lambda: bell(660,2.5),'s4_meses',.5)
P(lambda: riser(.6,300,1800,.35),E['tr5']-.6,.45)
# S5 fama y estatua
Pn(stamp,'s5_dos',.7); Pn(lambda: boom(1.0,55,.6),'s5_dos',.5); Pn(lambda: paper(),'s5_per',.5); Pn(lambda: whoosh(.5),'s5_per',.4,-.2)
Pn(lambda: sparkle(1.4),'s5_jap',.6); Pn(lambda: tada(),'s5_jap',.4)
for k in range(5): P(lambda: pop(700+k*120),E['s5_amor']+k*.2,.4)
Pn(stamp,'s5_cuatro',.8); Pn(lambda: boom(1.0,55,.6),'s5_cuatro',.6)
Pn(lambda: whoosh(.7,True),'s5_est',.5,-.15); Pn(lambda: sparkle(1.6),'s5_est',.6,.15); Pn(lambda: chime(1046,2.0),'s5_est',.5,.15)
Pn(bark,'s5_estuvo',.4); Pn(lambda: cheer(1.8),'s5_inau',.45); Pn(tada,'s5_inau',.5)
# S6 su última noche
P(lambda: wind(7.5),T[6],.4)
Pn(lambda: bell(440,3.5),'s6_mur',.55); Pn(lambda: sub(2.0,40),'s6_mur',.6)
Pn(lambda: heart(),'s6_ocho',.3) if False else Pn(pop,'s6_ocho',.4); Pn(pop,'s6_calle',.4)
for k in range(5): P(heart,E['s6_calle']+k*1.0,.3)
Pn(lambda: chime(660,2.2),'s6_once',.5); Pn(stamp,'s6_once',.5)
# S7 estatua fundida / nueva
Pn(lambda: clang(),'s7_est',.4); Pn(lambda: flameOn(),'s7_fund',.7); P(lambda: crackle(2.6,40),E['s7_fund'],.45); Pn(lambda: downsweep(1.4),'s7_fund',.5); Pn(lambda: hiss(1.2),'s7_fund',.4,.3)
Pn(lambda: rumble(2.0),'s7_gue',.5); Pn(lambda: boom(1.4,45,.7),'s7_gue',.6)
Pn(stamp,'s7_48',.8); Pn(lambda: boom(1.0,60,.6),'s7_48',.5)
Pn(lambda: riser(.8,200,1600,.35),'s7_pus',.5,-.7); Pn(lambda: sparkle(1.6),'s7_pus',.7); Pn(lambda: chime(880,2.0),'s7_pus',.5); Pn(lambda: bell(660,3.0),'s7_hoy',.4)
# S8 cierre
Pn(lambda: chime(700,1.4),'c_era',.4); Pn(stamp,'c_leal',.6); Pn(lambda: sparkle(1.2),'c_leal',.5)
Pn(pop,'c_dejar',.4,-.9); Pn(lambda: whoosh(.4),'c_dejar',.3,-.9)
Pn(notif,'c_com',.8); Pn(pop,'c_com',.7)
# ---------------- música ----------------
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
layer_drone(0,t1,.45); layer_pad(0,t1,.3,lpf=900)
layer_pad(t1,t2,.35,lpf=1400); layer_arp(t1+.5,t2,.25,step=.5); layer_bass(t1,t2,.2)
layer_pad(t2,t3,.35,lpf=1600); layer_arp(t2,t3,.3,step=.5); bells(t2,t3,.2,seed=4)
layer_drone(t3,t4,.5); layer_pad(t3,t4,.3,lpf=700)
setMusic(66,DM); layer_pad(t4,t5,.38,lpf=1200,prog=DM); layer_arp(t4,t5,.3,step=1,prog=DM); bells(t4,t5,.22,prog=DM,seed=7)
setMusic(80,AM); layer_pad(t5,t6,.4,lpf=1800); layer_arp(t5,t6,.35,step=.5); layer_drums(t5,t6,.25,'light'); bells(t5,t6,.22,seed=9)
layer_drone(t6,t7,.4); layer_pad(t6,t7,.3,lpf=600); bells(t6,t7,.15,seed=11)
setMusic(84,DM); layer_drone(t7,t8,.4,prog=DM); layer_ost(t7,t8,.25,prog=DM); layer_pad(E['s7_48']-.1,t8,.4,prog=DM,lpf=2000)
setMusic(80,AM); layer_pad(t8,DUR,.4,lpf=1600); layer_arp(t8,DUR,.28,step=.5); bells(t8,DUR,.25,seed=14); swell(E['c_leal'],E['c_dejar'],.3,(57,64,69,72))
duck(E['s3_mur'],E['s3_mur']+1.0,.3,.4); duck(E['s3_bajo'],E['s3_bajo']+1.2,.3,.5)
save()
