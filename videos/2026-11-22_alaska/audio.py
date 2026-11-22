import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Am',33,[45,52,57,60]),('F',29,[41,48,53,57]),('C',36,[48,55,60,64]),('G',31,[43,50,55,59])]
setMusic(80,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(2.0,200,1400,.3),0.0,.3)
Pn(pop,'h_rusia',.55); Pn(lambda: ping(660,.8),'h_menos',.4); Pn(lambda: coin(),'h_centavos',.55); Pn(stamp,'h_centavos',.8); Pn(lambda: boom(1.4,46,.8),'h_centavos',.7)
Pn(lambda: downsweep(1.2),'h_hizo',.45); Pn(stamp,'h_hizo',.85); Pn(lambda: stinger(),'h_hizo',.35)
# S1 colonos y pieles
Pn(pop,'a_prim',.5); Pn(pop,'a_dificil',.55); Pn(lambda: ping(440,.9),'a_dificil',.35)
Pn(pop,'a_400',.6); Pn(lambda: boom(1.4,48,.8),'a_400',.75); Pn(lambda: cntTick(),'a_400',.4)
Pn(pop,'a_pieles',.5); Pn(lambda: paper(),'a_pieles',.4); Pn(lambda: downsweep(1.0),'a_hundio',.5); Pn(lambda: shatter(),'a_hundio',.4); Pn(lambda: boom(1.4,40,.9),'a_hundio',.85)
# S2 Crimea
Pn(pop,'b_crimea',.55); Pn(lambda: gong(),'b_crimea',.35)
Pn(lambda: boom(1.8,38,1.0),'b_perdio',.95); Pn(lambda: clang(),'b_perdio',.45); Pn(lambda: shatter(),'b_perdio',.4)
for k in ['b_gb','b_fr','b_tu']: Pn(lambda: whoosh(.7),k,.45); Pn(pop,k,.5)
Pn(stamp,'b_1856',.85); Pn(lambda: boom(1.2,52,.7),'b_1856',.6)
# S3 Canadá y venta
Pn(pop,'c_enemiga',.5); Pn(lambda: ping(523,.8),'c_enemiga',.35)
Pn(pop,'c_canada',.6); Pn(lambda: boom(1.2,50,.7),'c_canada',.6)
Pn(lambda: whoosh(.9),'c_lado',.5); Pn(pop,'c_lado',.5)
Pn(lambda: coin(),'c_dinero',.5); Pn(lambda: cashreg(),'c_dinero',.4); Pn(lambda: sparkle(1.0),'c_dinero',.4)
Pn(lambda: whoosh(1.0),'c_vender',.5); Pn(pop,'c_vender',.5)
Pn(pop,'c_eeuu',.6); Pn(lambda: boom(1.4,46,.8),'c_eeuu',.7); Pn(lambda: bell(660,2.0),'c_eeuu',.3)
Pn(pop,'c_brit',.5); Pn(lambda: clang(),'c_brit',.3)
# S4 Seward y Stoeckl
Pn(pop,'d_sec',.5); Pn(pop,'d_seward',.6); Pn(lambda: ping(587,.8),'d_seward',.4); Pn(lambda: whoosh(.6),'d_seward',.35)
Pn(pop,'d_acepto',.5); Pn(lambda: whoosh(.8),'d_acepto',.45); Pn(lambda: paper(),'d_oferta',.5); Pn(lambda: sparkle(1.0),'d_oferta',.45)
Pn(pop,'d_stoeckl',.6); Pn(lambda: ping(784,.8),'d_stoeckl',.4)
# S5 tratado
Pn(lambda: paper(),'e_trat',.5); Pn(lambda: whoosh(.7),'e_trat',.4)
Pn(stamp,'e_30',.9); Pn(lambda: boom(1.8,40,1.0),'e_30',.95)
Pn(pop,'e_1867',.5); Pn(pop,'e_sen',.55); Pn(lambda: bell(523,2.2),'e_sen',.4)
Pn(stamp,'e_9',.8); Pn(lambda: boom(1.2,52,.7),'e_9',.6)
Pn(pop,'e_18',.55); Pn(stamp,'e_18',.85); Pn(lambda: boom(1.4,46,.8),'e_18',.7)
Pn(lambda: fanfare(),'e_usa',.35); Pn(lambda: boom(2.0,38,1.0),'e_usa',1.0); Pn(lambda: sparkle(1.2),'e_usa',.5); Pn(lambda: stinger(),'e_usa',.4)
# S6 precio y tamaño
Pn(pop,'f_siete',.5); Pn(lambda: riser(1.8,300,1500,.25),'f_siete',.3)
Pn(lambda: coin(),'f_dol',.55); Pn(lambda: cashreg(),'f_dol',.5); Pn(lambda: sparkle(1.0),'f_dol',.45)
Pn(pop,'f_km',.55); Pn(lambda: boom(1.8,38,1.0),'f_km',.9); Pn(lambda: ping(988,.8),'f_km',.4)
# S7 locura, nevera, Klondike
Pn(pop,'g_locura',.55); Pn(lambda: downsweep(1.0),'g_locura',.4)
Pn(pop,'g_nevera',.55); Pn(lambda: wind(2.0),'g_nevera',.3); Pn(lambda: sparkle(.9),'g_nevera',.3)
Pn(stamp,'g_1896',.85); Pn(lambda: boom(1.2,52,.7),'g_1896',.6)
Pn(lambda: boom(1.8,40,1.0),'g_klon',.95); Pn(lambda: coin(),'g_klon',.55); Pn(lambda: cashreg(),'g_klon',.45); Pn(lambda: sparkle(1.2),'g_klon',.5)
Pn(pop,'g_crit',.55); Pn(lambda: tada(),'g_crit',.35)
# S8 cierre
Pn(pop,'h2_unos',.6); Pn(lambda: ping(523,.8),'h2_unos',.4); Pn(lambda: whoosh(.5),'h2_unos',.4); Pn(pop,'h2_ganga',.55)
Pn(pop,'h2_otros',.6); Pn(lambda: ping(784,.8),'h2_otros',.4); Pn(lambda: whoosh(.5),'h2_otros',.4); Pn(pop,'h2_vendio',.55)
Pn(lambda: boom(1.6,42,.9),'h2_piensas',.8); Pn(lambda: sparkle(1.0),'h2_piensas',.35)
Pn(notif,'h2_com',.8); Pn(pop,'h2_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7,t8=T[1:9]
layer_drone(0,t1,.45); layer_pad(0,t1,.32,lpf=1100); layer_drums(0,t1,.22,'light')
layer_pad(t1,t2,.36,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.2,step=.5)
layer_pad(t2,t3,.4,lpf=1300); layer_drone(t2,t3,.4); layer_drums(t2,t3,.3,'march'); layer_bass(t2,t3,.26)
layer_pad(t3,t4,.4,lpf=1400); layer_drone(t3,t4,.4); layer_drums(t3,t4,.26,'march'); layer_bass(t3,t4,.24)
layer_pad(t4,t5,.36,lpf=1100); layer_bass(t4,t5,.22); layer_drums(t4,t5,.18,'light'); bells(t4,t5,.16,seed=3)
layer_pad(t5,t6,.4,lpf=1300); layer_drone(t5,t6,.4); layer_bass(t5,t6,.26); layer_drums(t5+2,t6,.26,'tribal')
layer_pad(t6,t7,.4,lpf=1500); layer_arp(t6,t7,.22,step=.5); layer_bass(t6,t7,.24)
layer_pad(t7,t8,.38,lpf=1300); layer_drone(t7,t8,.4); layer_bass(t7,t8,.24); layer_arp(t7+2,t8,.2,step=.5); bells(t7+4,t8,.16,seed=9)
layer_pad(t8,DUR,.38,lpf=1700); layer_arp(t8,DUR,.26,step=.5); bells(t8,DUR,.2,seed=14); layer_drums(t8+3,DUR,.22,'pop')
for k in ['h_hizo','b_perdio','e_30','e_usa','f_km','g_klon']: duck(E[k],E[k]+1.0,.3,.4)
save()
