import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
DM=[('Dm',38,[50,53,57,62]),('Bb',34,[50,53,58,62]),('Gm',43,[55,58,62,67]),('A',45,[57,61,64,69])]
setMusic(84,DM)
trSfx(TRS,E)
# S0 gancho
P(lambda: wind(5.8),0,.35)
Pn(stamp,'s0_300',.9); Pn(lambda: boom(1.2,55,.7),'s0_300',.6); Pn(lambda: clang(),'s0_300',.3,.1)
for k in range(9): P(lambda: clang(),E['s0_300']+.06*k+.15,.18)
Pn(lambda: whoosh(.5),'s0_imp',.3,-.2)
Pn(shatter,'s0_no',.9); Pn(lambda: boom(1.2,45,.7),'s0_no',.6); Pn(lambda: downsweep(1.0),'s0_no',.3)
Pn(lambda: stinger(40),'s0_paso',.5); Pn(impact,'s0_paso',.8)
# S1 marea persa
P(lambda: rumble(7.5),T[1],.35)
for k in range(14): P(step,E['s1_480']+.2+k*.45,.25)
Pn(stamp,'s1_480',.8); Pn(lambda: boom(1.0,50,.6),'s1_480',.5)
Pn(lambda: fanfare(48,1.6),'s1_jer',.35); Pn(lambda: chime(1046,1.2),'s1_jer',.4)
P(lambda: riser(E['s1_gig']-E['s1_jer'],150,1100,.3),E['s1_jer'],.5); Pn(impact,'s1_gig',.8)
# S2 barra
Pn(lambda: paper(.6),'s2_her',.5)
P(lambda: riser(E['s2_dos']-E['s2_her']+.3,200,1500,.3),E['s2_her']+.2,.4); Pn(stamp,'s2_dos',.8); Pn(lambda: boom(1.4,50,.7),'s2_dos',.6)
Pn(lambda: downsweep(1.0),'s2_hoy',.7); Pn(lambda: shatter(),'s2_hoy',.35,.1); Pn(pop,'s2_hoy',.6,.35); Pn(lambda: ping(1320,.6),'s2_hoy',.4,.4)
Pn(lambda: chime(1200,1.0),'s2_menos',.4); Pn(stamp,'s2_80',.5); Pn(stamp,'s2_300',.6)
# S3 paso
P(lambda: rumble(1.4),E['s3_paso']-.5,.5); Pn(lambda: boom(1.4,45,.7),'s3_paso',.6); P(lambda: waves(10.5),T[3],.25)
Pn(lambda: bell(660,2.5),'s3_leo',.4); Pn(clang,'s3_leo',.5,.1)
Pn(lambda: buzz(),'s3_no',.5); Pn(lambda: stamp(),'s3_300',.6)
for k in range(30): P(lambda: pop(500+10*k),E['s3_7']+.02*k*4.6,.25)
Pn(stamp,'s3_7',.9); Pn(lambda: boom(1.0,55,.6),'s3_7',.5)
Pn(lambda: sparkle(1.2),'s3_gua',.6); Pn(lambda: bell(784,2.5),'s3_gua',.5)
# S4 tespios
for k in range(35): P(lambda: pop(700+k*12),E['s4_700']+k*.034,.18)
Pn(stamp,'s4_700',.8); Pn(lambda: chime(1100,1.4),'s4_tes',.4); Pn(pop,'s4_tes',.6)
Pn(lambda: downsweep(1.4),'s4_nadie',.5); Pn(lambda: sub(2.0,42),'s4_nadie',.5); P(lambda: wind(3),E['s4_nadie'],.3)
# S5 tres días
P(lambda: riser(1.9,200,1800,.3),E['s5_dias'],.5)
for k in range(3): P(tick,E['s5_dias']+k*.63,.6)
Pn(stamp,'s5_tres',.9); Pn(lambda: boom(1.0,60,.5),'s5_tres',.5)
Pn(lambda: clang(),'s5_ven',.5)
for k in range(5):
    tk=E['s5_per']-.2+k*.55+.9
    P(lambda: clang(),tk,.5); P(lambda: clunk(),tk,.4); P(lambda: shatter(),tk,.12)
Pn(impact,'s5_cai',.7)
# S6 sendero
P(lambda: wind(7),T[6],.3); Pn(lambda: whistle(.6),'s6_pas',.15)
Pn(lambda: stinger(40),'s6_efi',.5); Pn(lambda: boom(1.2,50,.6),'s6_efi',.5)
P(lambda: riser(E['s6_rod']-E['s6_sen'],300,1400,.3),E['s6_sen'],.5)
for k in range(10): P(step,E['s6_sen']+.4+k*.28,.25)
Pn(impact,'s6_rod',.9); Pn(lambda: growl(.9),'s6_rod',.3,.1)
# S7 retirada y muerte
for k in range(12): P(step,E['s7_ret']+k*.18,.3)
Pn(lambda: whoosh(.8,True),'s7_ret',.4); Pn(lambda: bell(520,3),'s7_esp',.4); Pn(lambda: bell(660,3),'s7_tes',.4)
P(lambda: riser(E['s7_mur']-E['s7_tes'],200,1300,.3),E['s7_tes']+.1,.4)
Pn(impact,'s7_mur',.9)
for k in range(8): P(lambda: clang(),E['s7_mur']+.1+k*.17,.35)
Pn(lambda: stinger(38),'s7_cla',.5); Pn(lambda: sub(1.6,38),'s7_cla',.7); Pn(stamp,'s7_pos',.9); Pn(lambda: gong(110,4),'s7_pos',.5)
# S8 tiempo ganado
for k in range(10): P(tick,E['s8_pero']+k*.2,.35)
Pn(lambda: ding(1320,1.0),'s8_vano',.5); Pn(lambda: boom(1.2,50,.6),'s8_vano',.5)
P(lambda: waves(7.5),T[8]+2.5,.3); Pn(lambda: whoosh(.6),'s8_flota',.4); Pn(lambda: bell(784,2.5),'s8_flota',.35)
Pn(lambda: shatter(),'s8_sal',.5); Pn(lambda: boom(1.4,50,.7),'s8_sal',.6)
for k in range(4): P(lambda: creak(.6),E['s8_sal']+k*.12,.3)
Pn(lambda: whoosh(.5,False),'s8_ano',.4); Pn(stamp,'s8_plat',.9); Pn(lambda: fanfare(50,2.0),'s8_plat',.4)
Pn(impact,'s8_venc',.7); Pn(lambda: cheer(2.0),'s8_venc',.3); Pn(lambda: shatter(),'s8_jer',.5,.0)
# S9 CTA
Pn(lambda: chime(1200,1.0),'c_quien',.4); Pn(pop,'c_300',.7); Pn(lambda: bell(660,2.5),'c_300',.4); Pn(pop,'c_700',.7); Pn(lambda: bell(784,2.5),'c_700',.4)
Pn(stamp,'c_nadie',.6); Pn(notif,'c_com',.8); Pn(pop,'c_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7,t8,t9=T[1:10]
layer_drone(0,t1,.5); layer_pad(0,t1,.3,lpf=900)
layer_drums(t1,t2,.45,'tribal'); layer_pad(t1,t2,.3,lpf=1200); layer_bass(t1,t2,.35)
layer_drone(t2,t3,.4); layer_ost(t2,t3,.2); bells(t2,t3,.15,seed=3)
layer_drums(t3,t4,.45,'tribal'); layer_bass(t3,t4,.35); layer_pad(t3,t4,.3,lpf=1100)
layer_pad(t4,t5,.35,lpf=1500); bells(t4,t5,.2,seed=6)
layer_drums(t5,t6,.5,'tribal'); layer_bass(t5,t6,.4); layer_arp(t5,t6,.3,step=.5)
layer_drone(t6,t7,.4); layer_pad(t6,t7,.3,lpf=900); layer_arp(E['s6_sen'],t7,.3,step=.5)
layer_drums(t7,t8,.5,'tribal'); layer_bass(t7,t8,.4); layer_pad(t7,t8,.3,lpf=1000)
duck(E['s7_cla'],E['s7_pos']+.8,.4,.5)
layer_pad(t8,t9,.4,lpf=1600); layer_arp(E['s8_flota'],t9,.35,step=.5); bells(t8,t9,.2,seed=11); swell(E['s8_plat']-.6,E['s8_plat'],.3,(57,61,64,69))
setMusic(96,DM); layer_drums(t9,DUR,.35,'light'); layer_pad(t9,DUR,.35,lpf=1800); bells(t9,DUR,.25,seed=15)
duck(E['s0_no'],E['s0_no']+.5,.5,.4)
save()
