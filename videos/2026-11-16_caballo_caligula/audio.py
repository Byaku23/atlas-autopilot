import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
def neigh(d=.95):
    t=tt(d); f=np.interp(t,[0,.12,.35,.6,d],[520,1250,900,1350,480])*(1+.03*np.sin(2*np.pi*18*t))
    x=2*((np.cumsum(f)/sr)%1)-1
    return fade(bp(x,500,3200)*np.minimum(1,t/.03)*np.exp(-np.maximum(0,t-d*.6)*5)*.8+hp(nz(d),3000)*.04*np.exp(-t*3),.004,.1)
DM=[('Dm',50,[62,65,69,74]),('Bb',46,[58,62,65,70]),('F',41,[57,60,65,69]),('C',48,[55,60,64,67])]
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('G',43,[55,59,62,67])]
setMusic(78,DM)
trSfx(TRS,E)
# S0
P(lambda: wind(6.8),0,.25)
Pn(neigh,'h_caballo',.6); Pn(lambda: boom(1.2,50,.6),'h_consul',.5); Pn(lambda: chime(784,1.6),'h_consul',.35); Pn(stamp,'h_cal',.5)
Pn(lambda: riser(.7,300,1800,.3),'h_cierto',.4,-.7); Pn(impact,'h_cierto',.9); Pn(lambda: shatter(),'h_cierto',.3); Pn(lambda: sparkle(1.0),'h_cierto',.4)
# S1
Pn(lambda: chime(660,1.6),'s1_cal',.4); Pn(lambda: whoosh(.4),'s1_emp',.25)
Pn(ding,'s1_37',.45); Pn(lambda: ding(1100,1.2),'s1_41',.5)
Pe(lambda: whoosh(.45),'s1_ase',.45,.5); Pn(stamp,'s1_ase',.9); Pn(impact,'s1_ase',.6); Pn(lambda: downsweep(1.2),'s1_ase',.4)
counter(E['s1_28'],E['s1_28']+.6); Pn(stamp,'s1_28',.7); Pn(lambda: boom(1.2,48,.7),'s1_28',.6)
# S2
P(lambda: wind(11.4),T[2],.2)
Pn(pop,'s2_cab',.4); Pn(neigh,'s2_inc',.45); Pn(lambda: chime(880,1.6),'s2_inc',.4); Pn(pop,'s2_sue',.4)
Pn(clunk,'s2_est',.5); Pn(stamp,'s2_mar',.6); Pn(lambda: chime(1046,1.6),'s2_mar',.35)
Pn(pop,'s2_pes',.5); Pn(lambda: ding(1568,1.2),'s2_mfl',.5)
Pn(lambda: sparkle(1.2),'s2_col',.6); Pn(lambda: ding(1568,1.2),'s2_col',.6); Pn(pop,'s2_col',.5)
for k in range(5): P(coin,E['s2_pie']+k*.08,.4)
Pn(lambda: whoosh(.6),'s2_cas',.4); Pn(lambda: chime(988,1.6),'s2_cas',.4)
for k in range(5): P(step,E['s2_sir']+k*.18,.2)
# S3
P(lambda: bell(523,2.5),E['s3_dion'],.35)
for k in range(5): P(knock,E['s3_av']+.3+k*.28,.22)
for k in range(14): P(coin,E['s3_hoj']+k*.07,.3)
Pn(lambda: sparkle(1.4),'s3_oro',.6); Pn(cashreg,'s3_oro',.4); Pn(lambda: boom(1.0,60,.5),'s3_oro',.5)
# S4
Pn(pop,'s4_fam',.5); Pn(lambda: whoosh(.4),'s4_plan',.3)
for k in range(3): P(lambda: bubble(),E['s4_nom']+k*.12,.35)
Pe(lambda: riser(.9,200,1800,.35),'s4_cons',.9,.5); Pn(stamp,'s4_cons',.8); Pn(lambda: brassSting(50,1.6),'s4_cons',.4); Pn(lambda: sparkle(1.2),'s4_cons',.4,.35)
Pn(pop,'s4_carg',.4)
# S5
Pn(lambda: whoosh(.5),'s5_sue',.35); Pn(paper,'s5_sue',.4); Pn(lambda: whoosh(.5),'s5_dion',.35); Pn(paper,'s5_dion',.4)
Pn(stamp,'s5_hic',.8); Pn(lambda: clang(),'s5_hic',.35); Pn(lambda: buzz(),'s5_hic',.3)
Pn(lambda: ding(1320,1.4),'s5_plan',.55); Pn(lambda: chime(1046,1.6),'s5_plan',.35)
Pn(lambda: whoosh(.5),'s5_dion2',.3)
Pn(impact,'s5_nunca',.9); Pn(stamp,'s5_nunca',.8); Pn(lambda: shatter(),'s5_nunca',.25)
# S6
P(lambda: wind(12.2),T[6],.22)
Pn(lambda: whoosh(.6),'s6_esc',.3); Pn(paper,'s6_esc',.4); Pn(lambda: sub(1.2,50),'s6_mucho',.4)
P(lambda: crowd(5.0),E['s6_todos']-.1,.35); Pn(lambda: growl(1.2),'s6_todos',.3); Pn(lambda: boom(1.2,50,.6),'s6_odi',.5); Pn(stamp,'s6_odi',.5)
Pn(lambda: bell(440,2.5),'s6_enc',.45); Pn(lambda: chime(660,1.4),'s6_enc',.3)
for k in range(6): P(tick,E['s6_adm']+k*.3,.35)
Pn(stamp,'s6_imp',.8); Pn(lambda: boom(1.1,48,.6),'s6_imp',.6)
# S7
Pn(lambda: chime(784,1.6),'s7_ent',.4); Pn(lambda: sub(1.5,48),'s7_pas',.35)
Pn(lambda: whistle(.6),'s7_brom',.2); Pn(lambda: boing(),'s7_brom',.35); Pn(lambda: clang(),'s7_cruel',.35)
Pn(stamp,'s7_sen',.6); Pn(pop,'s7_cab',.45); Pn(pop,'s7_gob',.45)
Pn(lambda: riser(.5,300,1800,.3),'s7_val',.4,-.5)
for k in range(6): P(pop,E['s7_val']+k*.08,.25)
Pn(impact,'s7_ust',.9); Pn(stamp,'s7_ust',.7); Pn(lambda: downsweep(1.2),'s7_ust',.4)
# S8
Pn(lambda: hiss(1.4),'s8_otros',.35)
for k in range(5): P(lambda: swish(),E['s8_otros']+.2+k*.5,.3)
Pn(stamp,'s8_rumor',.8); Pn(lambda: boom(1.1,52,.6),'s8_rumor',.5)
Pn(stamp,'s8_inv',.6); Pn(lambda: buzz(),'s8_inv',.35); Pn(lambda: growl(1.0),'s8_ene',.35)
# S9
Pn(lambda: whoosh(.4),'c_asi',.3); Pn(pop,'c_preg',.5); Pn(pop,'c_cal',.5)
Pn(lambda: zap(.4),'c_loco',.4); Pn(stamp,'c_loco',.5); Pn(lambda: boing(),'c_brom',.5); Pn(lambda: clang(),'c_brom',.4)
P(stamp,E['c_brom']+.5,.6); P(lambda: boom(1.0,55,.5),E['c_brom']+.5,.5)
Pn(notif,'c_com',.8); Pn(pop,'c_com',.7); Pn(pop,'c_sig',.5)
# música
t1,t2,t3,t4,t5,t6,t7,t8,t9=T[1:10]
setMusic(78,DM); layer_drone(0,t1,.5); layer_pad(0,t1,.3,lpf=1000); layer_drums(E['h_cierto'],t1,.25,'march')
layer_drone(t1,t2,.45); layer_pad(t1,t2,.32,lpf=1200); layer_bass(t1,t2,.2); layer_drums(t1,t2,.2,'tribal')
setMusic(72,AM); layer_pad(t2,t3,.34,lpf=1500); bells(t2,t3,.22,seed=4); layer_arp(t2+3,t3,.2,step=1)
layer_pad(t3,t4,.34,lpf=1500); bells(t3,t4,.25,seed=5); layer_arp(E['s3_hoj'],t4,.22,step=.5)
setMusic(92,DM); layer_drone(t4,t5,.4); layer_drums(t4,t5,.3,'march'); layer_ost(t4,t5,.28); swell(E['s4_cons']-.9,E['s4_cons'],.3,(50,57,62,66))
setMusic(84,DM); layer_pad(t5,t6,.38,lpf=1700); layer_drums(t5,t6,.32,'march'); layer_bass(t5,t6,.22); layer_ost(t5,t6,.26)
setMusic(68,AM); layer_drone(t6,t7,.45); layer_pad(t6,t7,.34,lpf=1300); bells(t6,t7,.2,seed=7)
setMusic(96,DM); layer_drone(t7,t8,.4); layer_pad(t7,t8,.3,lpf=1400); layer_bass(t7,t8,.22); layer_drums(t7,t8,.25,'light')
setMusic(70,AM); layer_pad(t8,t9,.3,lpf=1100); layer_drone(t8,t9,.4); bells(t8,t9,.2,seed=9)
setMusic(88,AM); layer_pad(t9,DUR,.4,lpf=1800); layer_arp(t9,DUR,.28,step=.5); layer_drums(t9+.5,DUR,.22,'light'); bells(t9,DUR,.25,seed=12)
duck(E['s1_ase'],E['s1_ase']+.9,.3,.4); duck(E['s5_nunca'],E['s5_nunca']+.8,.35,.4); duck(E['s7_ust'],E['s7_ust']+.8,.35,.4)
save()
