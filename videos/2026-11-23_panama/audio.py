import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Dm',33,[50,53,57,62]),('Bb',29,[46,53,57,62]),('F',36,[48,53,57,60]),('C',31,[43,48,52,55])]
setMusic(84,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(2.0,200,1400,.3),0.0,.3)
Pn(pop,'h_pais',.55); Pn(lambda: ping(660,.8),'h_1903',.4); Pn(stamp,'h_1903',.7); Pn(lambda: boom(1.4,46,.8),'h_1903',.6)
Pn(lambda: whoosh(.9),'h_barco',.5); Pn(lambda: waves(1.6),'h_barco',.25); Pn(pop,'h_barco',.5)
Pn(pop,'h_porque',.55); Pn(pop,'h_pan',.55); Pn(lambda: ping(587,.8),'h_pan',.4)
Pn(lambda: downsweep(1.2),'h_col',.45); Pn(stamp,'h_col',.85); Pn(lambda: stinger(),'h_col',.35)
# S1 lejos, Francia, muertos, EE. UU.
Pn(pop,'a_bogota',.55); Pn(lambda: ping(440,.9),'a_bogota',.35)
Pn(pop,'a_selva',.5); Pn(lambda: wind(1.8),'a_selva',.25); Pn(lambda: sparkle(.9),'a_selva',.25)
Pn(pop,'a_fr',.55); Pn(lambda: whoosh(.7),'a_fr',.4)
Pn(pop,'a_canal',.5); Pn(lambda: knock(),'a_canal',.4); Pn(lambda: step(),'a_canal',.3)
Pn(pop,'a_20',.6); Pn(lambda: cntTick(),'a_20',.4)
Pn(lambda: boom(1.8,38,1.0),'a_muertos',.95); Pn(lambda: shatter(),'a_muertos',.35); Pn(lambda: downsweep(1.0),'a_muertos',.5)
Pn(pop,'a_eeuu',.6); Pn(lambda: boom(1.2,50,.7),'a_eeuu',.6)
Pn(lambda: whoosh(.9),'a_quiso',.5); Pn(lambda: sparkle(1.0),'a_quiso',.4)
# S2 tratado rechazado
Pn(pop,'b_trat',.5); Pn(lambda: paper(),'b_trat',.5); Pn(lambda: whoosh(.9),'b_trat',.4)
Pn(pop,'b_sen',.6); Pn(lambda: gong(),'b_sen',.35)
Pn(lambda: boom(1.8,38,1.0),'b_rech',1.0); Pn(lambda: clang(),'b_rech',.45); Pn(lambda: shatter(),'b_rech',.4); Pn(stamp,'b_rech',.8)
Pn(pop,'b_ago',.5); Pn(lambda: ping(784,.8),'b_ago',.35)
Pn(pop,'b_poco',.55); Pn(lambda: coin(),'b_poco',.4); Pn(pop,'b_ced',.55); Pn(lambda: clunk(),'b_ced',.5)
# S3 Roosevelt y rebeldes
Pn(pop,'c_ent',.5); Pn(pop,'c_roos',.6); Pn(lambda: ping(587,.8),'c_roos',.4)
Pn(lambda: whoosh(.8),'c_apoyo',.5); Pn(pop,'c_apoyo',.5); Pn(pop,'c_reb',.55)
Pn(stamp,'c_tres',.85); Pn(lambda: boom(1.2,52,.7),'c_tres',.6)
Pn(lambda: fanfare(),'c_indep',.35); Pn(lambda: boom(2.0,38,1.0),'c_indep',1.0); Pn(lambda: sparkle(1.2),'c_indep',.5); Pn(lambda: cheer(),'c_indep',.3)
# S4 ferrocarril y Nashville
Pn(pop,'d_fc',.55); Pn(lambda: engine(1.6),'d_fc',.3); Pn(lambda: whistle(),'d_fc',.35); Pn(lambda: whoosh(.9),'d_fc',.35)
Pn(pop,'d_var',.6); Pn(lambda: downsweep(1.0),'d_var',.45); Pn(lambda: boom(1.2,48,.7),'d_var',.6)
Pn(pop,'d_colon',.5); Pn(pop,'d_trop',.5)
Pn(lambda: whoosh(1.0),'d_nash',.5); Pn(lambda: boom(1.8,40,1.0),'d_nash',.95); Pn(lambda: clang(),'d_nash',.4)
# S5 reconocimiento, tratado, dinero
Pn(pop,'e_tres',.55); Pn(lambda: tick(),'e_tres',.4)
Pn(stamp,'e_rec',.85); Pn(lambda: boom(1.2,52,.7),'e_rec',.6); Pn(lambda: bell(660,2.0),'e_rec',.3)
Pn(pop,'e_15',.55); Pn(lambda: paper(),'e_firmo',.5); Pn(stamp,'e_firmo',.85); Pn(lambda: boom(1.4,46,.8),'e_firmo',.7)
Pn(pop,'e_diez',.5); Pn(lambda: riser(1.8,300,1500,.25),'e_diez',.3)
Pn(lambda: coin(),'e_dol',.55); Pn(lambda: cashreg(),'e_dol',.5); Pn(lambda: sparkle(1.0),'e_dol',.45)
Pn(pop,'e_neg',.5); Pn(pop,'e_ing',.6); Pn(lambda: ping(523,.8),'e_ing',.4); Pn(lambda: whoosh(.6),'e_ing',.35)
Pn(pop,'e_fr',.55); Pn(lambda: stinger(),'e_fr',.35)
# S6 canal y traspaso
Pn(pop,'f_canal',.55); Pn(lambda: whoosh(1.0),'f_canal',.45)
Pn(stamp,'f_1914',.85); Pn(lambda: boom(1.4,46,.8),'f_1914',.75); Pn(lambda: bell(523,2.2),'f_1914',.35); Pn(lambda: sparkle(1.1),'f_1914',.45)
Pn(pop,'f_pan',.55); Pn(pop,'f_rec',.5)
Pn(pop,'f_31',.55); Pn(lambda: tick(),'f_31',.45); Pn(pop,'f_dic',.45)
Pn(lambda: fanfare(),'f_1999',.35); Pn(lambda: boom(2.0,38,1.0),'f_1999',1.0); Pn(lambda: sparkle(1.2),'f_1999',.5); Pn(lambda: tada(),'f_1999',.3)
# S7 cierre
Pn(pop,'g_unos',.6); Pn(lambda: ping(523,.8),'g_unos',.4); Pn(lambda: whoosh(.5),'g_unos',.4); Pn(pop,'g_pueblo',.55)
Pn(pop,'g_otros',.6); Pn(lambda: ping(784,.8),'g_otros',.4); Pn(lambda: whoosh(.5),'g_otros',.4); Pn(pop,'g_jugada',.55)
Pn(lambda: boom(1.6,42,.9),'g_piensas',.8); Pn(lambda: sparkle(1.0),'g_piensas',.35)
Pn(notif,'g_com',.8); Pn(pop,'g_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7=T[1:8]
layer_drone(0,t1,.45); layer_pad(0,t1,.32,lpf=1100); layer_drums(0,t1,.22,'light')
layer_pad(t1,t2,.38,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.2,step=.5); layer_drums(t1+6,t2,.2,'tribal')
layer_pad(t2,t3,.4,lpf=1300); layer_drone(t2,t3,.4); layer_drums(t2,t3,.28,'march'); layer_bass(t2,t3,.26)
layer_pad(t3,t4,.4,lpf=1500); layer_bass(t3,t4,.24); layer_drums(t3,t4,.3,'march'); layer_arp(t3+2,t4,.22,step=.5)
layer_pad(t4,t5,.4,lpf=1200); layer_drone(t4,t5,.4); layer_bass(t4,t5,.26); layer_drums(t4,t5,.26,'tribal')
layer_pad(t5,t6,.38,lpf=1400); layer_arp(t5,t6,.22,step=.5); layer_bass(t5,t6,.24); bells(t5+4,t6,.16,seed=5)
layer_pad(t6,t7,.4,lpf=1500); layer_drone(t6,t7,.4); layer_bass(t6,t7,.26); layer_arp(t6+2,t7,.2,step=.5); bells(t6+3,t7,.16,seed=9)
layer_pad(t7,DUR,.38,lpf=1700); layer_arp(t7,DUR,.26,step=.5); bells(t7,DUR,.2,seed=14); layer_drums(t7+3,DUR,.22,'pop')
for k in ['h_col','a_muertos','b_rech','c_indep','d_nash','e_rec','f_1999']: duck(E[k],E[k]+1.0,.3,.4)
save()
