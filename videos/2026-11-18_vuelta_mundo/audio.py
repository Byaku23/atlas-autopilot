import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Dm',38,[50,53,57,62]),('Bb',34,[46,53,58,62]),('F',41,[53,57,60,65]),('C',36,[48,55,60,64])]
setMusic(84,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(2.0,200,1400,.3),0.0,.3)
for k in ['h_cinco','h_barcos']: Pn(pop,k,.6)
Pn(lambda: waves(3.0),'h_cinco',.2)
Pn(stamp,'h_uno',.9); Pn(lambda: boom(1.6,45,.9),'h_uno',.8); Pn(lambda: shatter(),'h_uno',.4)
Pn(lambda: fanfare(),'h_logro',.35); Pn(lambda: sparkle(.9),'h_logro',.4); Pn(lambda: ping(988,.8),'h_logro',.4)
Pn(pop,'h_mapa',.5); Pn(lambda: ping(880,.8),'h_mapa',.4)
# S1 zarpa
Pn(stamp,'a_20',.8); Pn(lambda: boom(1.2,52,.7),'a_20',.6)
Pn(pop,'a_flota',.5); Pn(lambda: whoosh(.7),'a_magal',.45)
Pn(lambda: bell(660,2.0),'a_zarpa',.4); Pn(lambda: whoosh(.9),'a_zarpa',.5); Pn(lambda: waves(2.5),'a_zarpa',.25)
Pn(pop,'a_sanl',.5); Pn(lambda: ping(660,.8),'a_sanl',.35); Pn(pop,'a_esp',.5)
# S2 especias
Pn(pop,'b_buscan',.5)
Pn(lambda: sparkle(1.0),'b_esp',.45); Pn(lambda: ping(1046,.9),'b_esp',.4); Pn(lambda: whoosh(.6),'b_esp',.4)
Pn(stamp,'b_oeste',.85); Pn(lambda: boom(1.4,48,.8),'b_oeste',.7); Pn(lambda: whoosh(.8),'b_oeste',.4)
# S3 Atlántico
Pn(pop,'c_cruzan',.5); Pn(lambda: whoosh(.9),'c_cruzan',.4); Pn(lambda: waves(3.0),'c_cruzan',.25)
Pn(pop,'c_atl',.5); Pn(lambda: ping(523,.8),'c_atl',.35)
Pn(pop,'c_bajan',.5); Pn(pop,'c_sur',.5); Pn(lambda: ping(660,.8),'c_sur',.35)
# S4 naufragio y regreso
Pn(pop,'d_alli',.5)
Pn(lambda: boom(1.4,45,.9),'d_nau',.9); Pn(lambda: shatter(),'d_nau',.5); Pn(lambda: bubble(),'d_nau',.4); Pn(lambda: creak(1.0),'d_nau',.4)
Pn(lambda: whoosh(.8),'d_media',.55); Pn(lambda: scratch(.6),'d_media',.3); Pn(pop,'d_media',.5)
Pn(pop,'d_regresa',.5); Pn(lambda: whoosh(.9),'d_regresa',.4)
# S5 estrecho y Pacífico
Pn(pop,'e_pasan',.5); Pn(lambda: wind(2.0),'e_pasan',.3)
Pn(pop,'e_estr',.5); Pn(lambda: ping(440,.9),'e_estr',.4)
Pn(pop,'e_mag',.5); Pn(lambda: bell(523,2.0),'e_mag',.35)
Pn(lambda: riser(1.2,200,1100,.3),'e_oce',.4,-.2); Pn(pop,'e_oce',.5)
Pn(lambda: boom(1.8,42,1.0),'e_pac',.9); Pn(lambda: sparkle(1.0),'e_pac',.4); Pn(lambda: stinger(),'e_pac',.35); Pn(lambda: waves(3.0),'e_pac',.3)
# S6 Mactán
Pn(stamp,'f_27',.8); Pn(lambda: boom(1.2,52,.7),'f_27',.6)
Pn(pop,'f_fil',.5); Pn(lambda: ping(660,.8),'f_fil',.35)
Pn(lambda: boom(2.0,38,1.0),'f_muere',1.0); Pn(lambda: stinger(),'f_muere',.45); Pn(lambda: clang(),'f_muere',.4); Pn(lambda: downsweep(1.2),'f_muere',.4)
Pn(pop,'f_50',.55); Pn(lambda: whoosh(.6),'f_mil',.5); Pn(lambda: rumble(1.4),'f_mil',.45); Pn(pop,'f_mil',.5)
# S7 Elcano
Pn(pop,'g_juan',.5); Pn(lambda: whoosh(.7),'g_elcano',.5); Pn(lambda: fanfare(),'g_elcano',.25)
Pn(pop,'g_mando',.5); Pn(lambda: ping(784,.8),'g_mando',.4)
Pn(pop,'g_vict',.5); Pn(lambda: bell(784,2.0),'g_vict',.4)
Pn(pop,'g_ind',.5); Pn(pop,'g_afr',.5); Pn(lambda: whoosh(.8),'g_afr',.4)
Pn(pop,'g_llega',.5)
Pn(lambda: boom(1.8,42,1.0),'g_sanl',.9); Pn(lambda: tada(),'g_sanl',.4); Pn(lambda: sparkle(1.0),'g_sanl',.4); Pn(lambda: cheer(),'g_sanl',.3)
Pn(stamp,'g_6',.8); Pn(lambda: boom(1.2,52,.7),'g_6',.6)
# S8 18
Pn(pop,'h2_200',.55); Pn(lambda: whoosh(.7),'h2_200',.4)
Pn(lambda: downsweep(1.4),'h2_18',.6); Pn(lambda: boom(2.0,38,1.0),'h2_18',.95); Pn(lambda: shatter(),'h2_18',.4); Pn(lambda: stamp(),'h2_18',.7)
Pn(pop,'h2_vuel',.55); Pn(lambda: bell(523,2.0),'h2_vuel',.4)
# S9 cierre
Pn(stamp,'z_abrio',.8); Pn(lambda: boom(1.2,52,.7),'z_abrio',.6)
Pn(lambda: boom(1.6,42,.9),'z_murio',.8); Pn(lambda: clang(),'z_murio',.4)
Pn(pop,'z_term',.5)
Pn(stamp,'z_elc',.9); Pn(lambda: boom(1.6,45,.9),'z_elc',.8); Pn(lambda: sparkle(.9),'z_termino',.35)
Pn(lambda: whoosh(.6),'z_quien',.4); Pn(lambda: ping(660,.9),'z_quien',.45)
Pn(pop,'z_merece',.6); Pn(lambda: ping(988,.8),'z_merece',.4)
Pn(pop,'z_prim',.6); Pn(lambda: bell(523,2.0),'z_prim',.4)
Pn(notif,'z_com',.8); Pn(pop,'z_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7,t8,t9=T[1:10]
layer_drone(0,t1,.45); layer_pad(0,t1,.3,lpf=1000); layer_drums(0,t1,.22,'light')
layer_pad(t1,t2,.36,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.22,step=.5)
layer_pad(t2,t3,.38,lpf=1200); layer_drone(t2,t3,.35); layer_drums(t2,t3,.26,'march'); layer_bass(t2,t3,.24)
layer_pad(t3,t4,.4,lpf=1500); layer_ost(t3,t4,.22); layer_bass(t3,t4,.24); bells(t3,t4,.18,seed=5); layer_drums(t3,t4,.26,'tribal')
layer_pad(t4,t5,.4,lpf=1300); layer_drums(t4,t5,.3,'march'); layer_bass(t4,t5,.26); layer_arp(t4,t5,.24,step=.5)
layer_pad(t5,t6,.42,lpf=1400); layer_drone(t5,t6,.38); layer_bass(t5,t6,.28); layer_drums(t5,t6,.3,'tribal'); swell(E['e_oce']-1.0,E['e_pac'],.3,(50,57,62,65))
layer_pad(t6,t7,.4,lpf=1200); layer_drone(t6,t7,.45); layer_bass(t6,t7,.24); layer_drums(t6+4,t7,.3,'march')
layer_pad(t7,t8,.42,lpf=1600); layer_ost(t7,t8,.25); layer_drums(t7,t8,.3,'march'); swell(E['g_llega']-1.0,E['g_sanl'],.3,(53,60,65,69))
layer_pad(t8,t9,.4,lpf=1400); layer_drone(t8,t9,.4); layer_bass(t8,t9,.24)
layer_pad(t9,DUR,.38,lpf=1700); layer_arp(t9,DUR,.26,step=.5); bells(t9,DUR,.2,seed=14); layer_drums(t9+3,DUR,.22,'pop')
for k in ['h_uno','b_oeste','d_nau','e_pac','f_muere','g_sanl','h2_18','z_elc']: duck(E[k],E[k]+1.0,.3,.4)
save()
