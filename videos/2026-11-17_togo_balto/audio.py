import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
DM=[('Dm',50,[62,65,69,74]),('Bb',46,[58,62,65,70]),('F',41,[57,60,65,69]),('C',48,[55,60,64,67])]
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('G',43,[55,59,62,67])]
setMusic(80,AM)
trSfx(TRS,E)
# S0
P(lambda: wind(6.0),0,.25)
for k in range(10): P(step,.1+k*.3,.18)
Pn(lambda: boom(1.2,55,.6),'h_420',.5); Pn(lambda: chime(880,1.6),'h_420',.35); Pn(lambda: whoosh(.4),'h_ciudad',.25)
Pn(lambda: howl(1.6,420),'h_otro',.22); Pn(lambda: riser(.6,300,1800,.3),'h_est',.4,-.6); Pn(impact,'h_est',.9); Pn(lambda: sparkle(1.2),'h_est',.5)
# S1
P(lambda: wind(10.5),T[1],.3)
Pn(pop,'s1_ene',.4); Pn(lambda: ding(1100,1.2),'s1_1925',.5); Pn(pop,'s1_nome',.4)
Pn(stamp,'s1_dif',.8); Pn(lambda: sub(1.4,45),'s1_dif',.5); Pn(lambda: heart(),'s1_dif',.4)
Pn(lambda: sparkle(1.0),'s1_med',.3); Pn(lambda: chime(660,1.6),'s1_lej',.35)
for k in range(6): P(step,E['s1_trin']-.3+k*.14,.2)
Pn(lambda: whoosh(.5),'s1_trin',.3); Pn(lambda: bark(),'s1_trin',.2)
# S2
for k in range(20): P(pop,E['s2_20']+k*.09,.2)
Pn(stamp,'s2_20',.5); Pn(lambda: ding(1320,1.2),'s2_150',.45); Pn(stamp,'s2_150',.6)
Pn(lambda: sparkle(1.0),'s2_suero',.4)
for k in range(8): P(lambda: ding(1568+k*40,.4),E['s2_mano']+k*.1,.2)
counter(E['s2_1085'],E['s2_1085']+1.4); Pn(stamp,'s2_1085',.5); Pn(lambda: boom(1.2,50,.6),'s2_1085',.5)
Pn(pop,'s2_dias',.4); Pn(lambda: hiss(1.4),'s2_52',.3); counter(E['s2_52'],E['s2_52']+.9); Pn(impact,'s2_cero',.7); Pn(lambda: shatter(),'s2_cero',.25)
# S3
Pn(pop,'s3_uno',.4); Pn(lambda: bark(),'s3_togo',.4); Pn(stamp,'s3_togo',.8); Pn(lambda: boom(1.2,55,.6),'s3_togo',.5); Pn(lambda: chime(784,1.6),'s3_togo',.4)
counter(E['s3_doce'],E['s3_doce']+.5); Pn(stamp,'s3_doce',.6); Pn(pop,'s3_lider',.4); Pn(lambda: whoosh(.4),'s3_sepp',.3); Pn(pop,'s3_sepp',.4)
# S4
Pn(pop,'s4_togo',.4)
for k in range(24): P(step,E['s4_togo']+.3+k*.4,.16)
counter(E['s4_420'],E['s4_420']+.9); Pn(stamp,'s4_420',.5); Pn(pop,'s4_nadie',.45)
Pn(lambda: whoosh(.5),'s4_cruz',.3); Pn(pop,'s4_nort',.4); Pn(lambda: creak(2.2),'s4_horas',.35); Pn(lambda: sub(1.5,42),'s4_horas',.4)
Pn(lambda: riser(.9,200,1800,.3),'s4_romp',.9,-.9); Pn(impact,'s4_romp',1.0); Pn(lambda: shatter(),'s4_romp',.5); Pn(stamp,'s4_romp',.8)
# S5
P(lambda: wind(9.2),T[5],.25)
Pn(pop,'s5_pero',.4); Pn(lambda: whoosh(.5),'s5_otro',.3); Pn(stamp,'s5_balto',.8); Pn(lambda: boom(1.2,55,.6),'s5_balto',.5); Pn(lambda: bark(),'s5_balto',.35)
Pn(pop,'s5_kaa',.4); counter(E['s5_85'],E['s5_85']+.9); Pn(stamp,'s5_85',.6); Pn(pop,'s5_km',.4)
Pn(lambda: ding(1320,1.4),'s5_nome',.6); Pn(lambda: sparkle(1.2),'s5_nome',.5)
# S6
Pn(stamp,'s6_balto',.7); Pn(lambda: chime(988,1.6),'s6_balto',.35); Pn(lambda: whoosh(.5),'s6_fam',.35)
for k in range(3): P(paper,E['s6_fam']+k*.15,.35)
Pn(lambda: cheer(1.8),'s6_pais',.25); Pn(pop,'s6_mismo',.4)
Pn(lambda: riser(.7,300,1800,.3),'s6_est',.4,-.7); Pn(impact,'s6_est',.9); Pn(lambda: sparkle(1.2),'s6_est',.5); Pn(lambda: bell(523,2.5),'s6_cp',.35); Pn(pop,'s6_ny',.4)
# S7
P(lambda: wind(10.0),T[7],.22)
Pn(pop,'s7_togo',.4); Pn(lambda: sub(1.5,45),'s7_esp',.4); Pn(lambda: whoosh(.5),'s7_est',.3)
for k in range(8): P(tick,E['s7_est']+.1+k*.2,.25)
Pn(impact,'s7_2001',.9); Pn(lambda: sparkle(1.2),'s7_2001',.5); Pn(lambda: chime(784,1.6),'s7_2001',.4)
Pn(lambda: whoosh(.5),'s7_2011',.3); Pn(lambda: riser(.6,300,1800,.3),'s7_2011',.35,-.1); Pn(clunk,'s7_2011',.5,.6); Pn(lambda: ding(1568,1.4),'s7_2011',.5,.6); Pn(pop,'s7_time',.45)
Pn(stamp,'s7_her',.7); Pn(lambda: boom(1.2,52,.6),'s7_her',.5); Pn(lambda: sparkle(1.4),'s7_hist',.5); Pn(lambda: tada(),'s7_hist',.3)
# S8
Pn(lambda: whoosh(.4),'c_asi',.3); Pn(pop,'c_preg',.5); Pn(pop,'c_quien',.45)
Pn(lambda: bark(),'c_togo',.3); Pn(stamp,'c_togo',.5); Pn(pop,'c_mas',.4)
Pn(lambda: bark(),'c_balto',.3); Pn(stamp,'c_balto',.6); Pn(pop,'c_meta',.4); Pn(lambda: boom(1.0,55,.5),'c_balto',.5)
Pn(notif,'c_com',.8); Pn(pop,'c_com',.7); Pn(pop,'c_sig',.5)
# música
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
setMusic(80,AM); layer_drone(0,t1,.5); layer_pad(0,t1,.3,lpf=1000); layer_drums(E['h_420'],t1,.25,'march')
setMusic(66,AM); layer_drone(t1,t2,.5); layer_pad(t1,t2,.32,lpf=1200); bells(t1,t2,.2,seed=3)
setMusic(96,DM); layer_drone(t2,t3,.4); layer_pad(t2,t3,.3,lpf=1500); layer_bass(t2,t3,.22); layer_drums(t2,t3,.28,'march'); layer_arp(t2+2,t3,.2,step=.5)
setMusic(84,DM); layer_pad(t3,t4,.36,lpf=1500); layer_ost(t3,t4,.26); layer_drums(t3,t4,.2,'light')
setMusic(100,DM); layer_drone(t4,t5,.4); layer_drums(t4,t5,.3,'tribal'); layer_bass(t4,t5,.22); layer_ost(t4,t5,.24); swell(E['s4_romp']-.9,E['s4_romp'],.3,(50,57,62,66))
setMusic(88,AM); layer_pad(t5,t6,.36,lpf=1600); layer_drums(t5,t6,.28,'march'); layer_bass(t5,t6,.2)
setMusic(92,AM); layer_pad(t6,t7,.36,lpf=1800); bells(t6,t7,.25,seed=6); layer_arp(t6,t7,.2,step=.5)
setMusic(68,DM); layer_drone(t7,t8,.4); layer_pad(t7,t8,.34,lpf=1300); bells(t7,t8,.22,seed=8); swell(E['s7_2011']-.5,E['s7_2011']+.4,.28,(57,62,65,69))
setMusic(90,AM); layer_pad(t8,DUR,.4,lpf=1800); layer_arp(t8,DUR,.28,step=.5); layer_drums(t8+.5,DUR,.22,'light'); bells(t8,DUR,.25,seed=12)
duck(E['s4_romp'],E['s4_romp']+.9,.3,.4); duck(E['s2_cero'],E['s2_cero']+.8,.35,.4); duck(E['s6_est'],E['s6_est']+.8,.35,.4)
save()
