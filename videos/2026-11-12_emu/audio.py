import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('E',40,[52,56,59,64])]
DM=[('Dm',50,[62,65,69,74]),('Bb',46,[58,62,65,70]),('F',41,[57,60,65,69]),('C',48,[55,60,64,67])]
setMusic(104,AM)
trSfx(TRS,E)
# S0
P(lambda: wind(8.0),0,.22)
for k in range(8): P(step,.3+k*.5,.28)
Pn(lambda: stamp(),'a_1932',.5); Pn(lambda: boom(1.2,50,.6),'a_1932',.45)
Pn(lambda: whoosh(.4),'a_ejer',.4); Pn(lambda: clang(),'a_ejer',.4)
Pn(stamp,'a_20',.7); Pn(lambda: boom(1.2,45,.7),'a_20',.6)
for k in range(9): P(tick,E['a_20']+k*.12,.4)
Pn(pop,'a_emus',.5); Pn(lambda: stinger(),'a_gano',.5); Pn(lambda: boom(1.4,50,.8),'a_gano',.7)
# S1
P(lambda: wind(4.0),T[1],.25); Pn(pop,'b_oeste',.5); Pn(lambda: bell(660,2.2),'b_oeste',.35)
Pn(pop,'b_vet',.5)
for k in range(3): P(lambda: ping(988,.8),E['b_vet']+k*.1,.3)
Pn(pop,'b_crisis',.45); Pn(lambda: downsweep(1.0),'b_crisis',.4); Pn(stamp,'b_ruina',.6); Pn(lambda: boom(1.2,45,.6),'b_ruina',.5)
Pn(lambda: whoosh(.6),'b_llegaron',.35)
for k in range(10): P(step,E['b_llegaron']+k*.2,.2)
Pn(pop,'b_agua',.4); Pn(stamp,'b_arras',.7); Pn(lambda: boom(1.4,40,.8),'b_arras',.7); Pn(lambda: rumble(2.0),'b_arras',.4)
# S2
Pn(lambda: paper(),'c_pid',.55); Pn(pop,'c_pid',.45)
P(lambda: engine(2.8) if False else rumble(2.8),E['c_gob']-.3,.5); Pn(pop,'c_gob',.45)
Pn(lambda: clang(),'c_dos',.5); Pn(pop,'c_dos',.5); Pn(lambda: clunk(),'c_lewis',.45)
for k in range(10): P(tick,E['c_diez']+k*.1,.4)
Pn(stamp,'c_diez',.5); Pn(pop,'c_cart',.45); Pn(stamp,'c_mere',.8); Pn(lambda: boom(1.4,45,.8),'c_mere',.7); Pn(lambda: brassSting(),'c_mere',.4)
# S3
Pn(lambda: stinger(),'d_blanco',.4); Pn(pop,'d_blanco',.4); Pn(lambda: whoosh(.5),'d_grupos',.4); Pn(pop,'d_grupos',.45); Pn(lambda: whoosh(.6,True),'d_dir',.45)
for k in range(14): P(lambda: clang(),E['d_disp']+k*.18,.22)
Pn(pop,'d_disp',.45); Pn(lambda: riser(1.2,300,1800,.3),'d_esc',.4,-1.1); Pn(stamp,'d_esc',.7)
for k in range(8): P(step,E['d_dir']+k*.3,.2)
# S4
P(lambda: rumble(5.0),T[4],.4); Pn(pop,'e_incl',.4); Pn(pop,'e_cam',.45); Pn(lambda: downsweep(1.3),'e_tamp',.5); P(lambda: hiss(1.3),E['e_tamp'],.4); Pn(lambda: clunk(),'e_tamp',.5)
P(lambda: stamp(),E['e_tamp']+.5,.8); P(lambda: boom(1.4,40,.9),E['e_tamp']+.5,.8)
# S5
P(lambda: wind(5.7),T[5],.3); Pn(pop,'f_mes',.5); Pn(lambda: paper(),'f_mes',.5); Pn(lambda: bell(440,2.5),'f_mes',.4); Pn(pop,'f_ret',.4)
for k in range(10): P(step,E['f_ret']+k*.3,.22)
Pn(pop,'f_sig',.45); Pn(pop,'f_trigo',.45)
# S6
P(lambda: sparkle(1.2),T[6],.3); Pn(stamp,'g_rec',.6); Pn(lambda: chime(880,1.6),'g_rec',.45); Pn(pop,'g_caz',.45)
Pn(stamp,'g_res',.7); Pn(tada,'g_res',.5); Pn(pop,'g_seis',.45)
for k in range(18): P(coin,E['g_rec']+k*.35,.3)
for k in range(14): P(tick,E['g_57']+k*.09,.4)
Pn(stamp,'g_57',.6); Pn(lambda: boom(1.2,50,.7),'g_57',.6); Pn(lambda: cashreg(),'g_mil',.5)
# S7
Pn(pop,'h_dime',.5); Pn(pop,'h_ejer',.45); Pn(pop,'h_emus',.45); Pn(lambda: whoosh(.4),'h_dime',.3,-.5)
Pn(notif,'h_com',.8); Pn(pop,'h_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7=T[1:8]
layer_drone(0,t1,.45); layer_pad(0,t1,.3,lpf=1000); layer_drums(0,t1,.22,'march'); bells(0,t1,.15,seed=2)
layer_pad(t1,t2,.35,lpf=1500); layer_arp(t1,t2,.28,step=.5); layer_bass(t1,t2,.22)
layer_pad(t2,t3,.38,lpf=1600); layer_drums(t2,t3,.26,'march'); layer_ost(t2,t3,.22); layer_bass(t2,t3,.26)
layer_pad(t3,t4,.4,lpf=1700); layer_drums(t3,t4,.32,'tribal'); layer_arp(t3,t4,.3,step=.5); layer_bass(t3,t4,.28)
layer_pad(t4,t5,.4,lpf=1500); layer_drums(t4,t5,.3,'tribal'); layer_ost(t4,t5,.25)
layer_drone(t5,t6,.4); layer_pad(t5,t6,.3,lpf=800); bells(t5,t6,.18,seed=7)
layer_pad(t6,t7,.4,lpf=1800); layer_arp(t6,t7,.3,step=.5); layer_drums(t6,t7,.25,'light'); bells(t6,t7,.22,seed=9)
layer_pad(t7,DUR,.4,lpf=1600); layer_arp(t7,DUR,.28,step=.5); bells(t7,DUR,.22,seed=14); swell(E['h_dime'],E['h_com'],.3,(57,64,69,72))
duck(E['e_tamp'],E['e_tamp']+.8,.3,.5)
save()
