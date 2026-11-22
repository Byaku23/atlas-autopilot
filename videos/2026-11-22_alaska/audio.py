import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Am',33,[45,52,57,60]),('F',29,[41,48,53,57]),('C',36,[48,55,60,64]),('G',31,[43,50,55,59])]
setMusic(80,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(2.0,200,1400,.3),0.0,.3)
Pn(pop,'h_1848',.6); Pn(lambda: ping(660,.8),'h_mex',.4); Pn(lambda: downsweep(1.2),'h_perdio',.5); Pn(lambda: boom(1.8,42,1.0),'h_perdio',.9); Pn(lambda: shatter(),'h_perdio',.4)
Pn(stamp,'h_mitad',.85); Pn(lambda: stinger(),'h_mitad',.4); Pn(pop,'h_pas',.55); Pn(lambda: ping(880,.8),'h_pas',.4)
# S1 1845
Pn(stamp,'a_1845',.8); Pn(lambda: boom(1.2,52,.7),'a_1845',.6)
Pn(pop,'a_tx',.6); Pn(lambda: boom(1.4,48,.9),'a_tx',.8); Pn(lambda: bell(660,2.0),'a_tx',.3)
Pn(pop,'a_front',.55); Pn(lambda: whoosh(.8),'a_nueces',.45); Pn(pop,'a_nueces',.5); Pn(lambda: whoosh(.8),'a_bravo',.45); Pn(pop,'a_bravo',.5)
# S2 1846
Pn(stamp,'b_1846',.8); Pn(lambda: boom(1.2,52,.7),'b_1846',.6)
Pn(pop,'b_polk',.5); Pn(lambda: step(),'b_tropas',.4); Pn(lambda: rumble(1.4),'b_tropas',.4); Pn(pop,'b_tropas',.5)
Pn(pop,'b_zona',.55); Pn(lambda: ping(440,.9),'b_zona',.4)
Pn(lambda: boom(1.8,38,1.0),'b_choque',.95); Pn(lambda: clang(),'b_choque',.45); Pn(lambda: shatter(),'b_choque',.4); Pn(lambda: stinger(),'b_choque',.35)
Pn(pop,'b_cong',.5); Pn(lambda: gong(),'b_guerra',.45); Pn(stamp,'b_guerra',.9); Pn(lambda: boom(1.8,40,1.0),'b_guerra',.95)
# S3 avance
Pn(pop,'c_ejer',.5); Pn(lambda: whoosh(.9),'c_norte',.5); Pn(lambda: step(),'c_ejer',.35); Pn(pop,'c_norte',.5)
Pn(lambda: waves(2.5),'c_mar',.25); Pn(lambda: whoosh(.9),'c_mar',.5); Pn(pop,'c_mar',.5)
Pn(stamp,'c_sep',.8); Pn(lambda: boom(1.2,52,.7),'c_sep',.6)
Pn(lambda: boom(1.8,38,1.0),'c_toma',.95); Pn(lambda: clang(),'c_toma',.4); Pn(lambda: stinger(),'c_toma',.35); Pn(pop,'c_cdmx',.55)
# S4 tratado
Pn(pop,'d_trist',.5); Pn(pop,'d_paz',.55); Pn(lambda: bell(523,2.2),'d_paz',.4)
Pn(lambda: paper(),'d_trat',.5); Pn(lambda: whoosh(.7),'d_trat',.45)
Pn(lambda: paper(),'d_2',.35); Pn(stamp,'d_2',.9); Pn(lambda: boom(1.8,40,1.0),'d_2',.95)
Pn(pop,'d_gh',.55); Pn(lambda: ping(660,.8),'d_gh',.4)
# S5 cesión
Pn(lambda: whoosh(.9),'e_cede',.5); Pn(lambda: boom(1.8,38,1.0),'e_cede',.95); Pn(lambda: shatter(),'e_cede',.4)
Pn(pop,'e_mil',.5); Pn(lambda: riser(1.4,300,1500,.25),'e_mil',.3)
Pn(pop,'e_km',.55); Pn(lambda: ping(988,.8),'e_km',.4)
Pn(pop,'e_hoy',.5)
for k in ['e_cal','e_nev','e_utah','e_ariz','e_nm']: Pn(pop,k,.5)
Pn(stamp,'e_55',.9); Pn(lambda: boom(2.0,38,1.0),'e_55',1.0); Pn(lambda: stinger(),'e_55',.4); Pn(lambda: downsweep(1.2),'e_55',.4)
# S6 pago y La Mesilla
Pn(pop,'f_pago',.5); Pn(lambda: coin(),'f_15',.5); Pn(lambda: cashreg(),'f_15',.4); Pn(lambda: sparkle(1.0),'f_15',.45)
Pn(stamp,'f_1853',.8); Pn(lambda: boom(1.2,52,.7),'f_1853',.6); Pn(lambda: whoosh(1.0),'f_1853',.4)
Pn(pop,'f_mesilla',.55); Pn(lambda: ping(784,.8),'f_mesilla',.4); Pn(lambda: boom(1.4,48,.8),'f_mesilla',.7)
Pn(lambda: coin(),'f_diez',.5); Pn(lambda: sparkle(.9),'f_diez',.4)
# S7 cierre
Pn(pop,'g_unos',.6); Pn(lambda: ping(523,.8),'g_unos',.4); Pn(lambda: whoosh(.5),'g_unos',.4); Pn(pop,'g_conq',.55)
Pn(pop,'g_otros',.6); Pn(lambda: ping(784,.8),'g_otros',.4); Pn(lambda: whoosh(.5),'g_otros',.4); Pn(pop,'g_perder',.55)
Pn(lambda: boom(1.6,42,.9),'g_piensas',.8); Pn(lambda: sparkle(1.0),'g_piensas',.35)
Pn(notif,'g_com',.8); Pn(pop,'g_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7=T[1:8]
layer_drone(0,t1,.45); layer_pad(0,t1,.32,lpf=1100); layer_drums(0,t1,.22,'light')
layer_pad(t1,t2,.36,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.2,step=.5)
layer_pad(t2,t3,.4,lpf=1300); layer_drone(t2,t3,.4); layer_drums(t2,t3,.3,'march'); layer_bass(t2,t3,.26)
layer_pad(t3,t4,.4,lpf=1400); layer_drone(t3,t4,.4); layer_drums(t3,t4,.28,'march'); layer_bass(t3,t4,.24)
layer_pad(t4,t5,.36,lpf=1100); layer_bass(t4,t5,.22); layer_drums(t4,t5,.18,'light'); bells(t4,t5,.16,seed=3)
layer_pad(t5,t6,.4,lpf=1300); layer_drone(t5,t6,.4); layer_bass(t5,t6,.26); layer_drums(t5+2,t6,.26,'tribal')
layer_pad(t6,t7,.4,lpf=1500); layer_arp(t6,t7,.22,step=.5); layer_bass(t6,t7,.24)
layer_pad(t7,DUR,.38,lpf=1700); layer_arp(t7,DUR,.26,step=.5); bells(t7,DUR,.2,seed=14); layer_drums(t7+3,DUR,.22,'pop')
for k in ['h_perdio','b_choque','c_toma','d_2','e_55']: duck(E[k],E[k]+1.0,.3,.4)
save()
