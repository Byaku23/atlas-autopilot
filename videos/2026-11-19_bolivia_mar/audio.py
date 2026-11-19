import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Am',33,[45,52,57,60]),('F',29,[41,48,53,57]),('C',36,[48,55,60,64]),('G',31,[43,50,55,59])]
setMusic(80,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(2.0,200,1400,.3),0.0,.3)
Pn(pop,'h_bol',.6); Pn(lambda: waves(3.0),'h_bol',.25); Pn(lambda: ping(660,.8),'h_mar',.4); Pn(lambda: sparkle(.8),'h_mar',.35)
Pn(pop,'h_hoy',.5); Pn(lambda: downsweep(1.2),'h_costa',.5); Pn(lambda: boom(1.8,42,1.0),'h_costa',.9); Pn(lambda: shatter(),'h_costa',.4); Pn(lambda: stinger(),'h_costa',.3)
Pn(pop,'h_paso',.55); Pn(pop,'h_mapa',.5); Pn(lambda: ping(880,.8),'h_mapa',.4)
# S1 1825
Pn(stamp,'a_1825',.8); Pn(lambda: boom(1.2,52,.7),'a_1825',.6); Pn(pop,'a_nace',.5); Pn(lambda: bell(660,2.0),'a_nace',.35)
Pn(lambda: whoosh(.8),'a_400',.5); Pn(stamp,'a_400',.8); Pn(lambda: boom(1.3,50,.8),'a_400',.7)
Pn(pop,'a_km',.5); Pn(lambda: ping(988,.8),'a_km',.4); Pn(pop,'a_pac',.5); Pn(lambda: waves(3.0),'a_pac',.25)
# S2 salitre
Pn(lambda: sparkle(1.0),'b_sal',.5); Pn(lambda: ping(1046,.9),'b_sal',.45); Pn(stamp,'b_sal',.7)
Pn(pop,'b_min',.5)
Pn(lambda: coin(),'b_oro',.5); Pn(lambda: cashreg(),'b_oro',.35); Pn(lambda: sparkle(1.0),'b_oro',.5); Pn(lambda: boom(1.4,48,.8),'b_oro',.7)
# S3 guerra
Pn(stamp,'c_1879',.8); Pn(lambda: boom(1.2,52,.7),'c_1879',.6)
Pn(lambda: boom(1.6,40,.9),'c_guerra',.8); Pn(lambda: stinger(),'c_guerra',.4); Pn(lambda: rumble(1.4),'c_guerra',.4)
Pn(pop,'c_chile',.55); Pn(pop,'c_bol',.55); Pn(pop,'c_peru',.55)
Pn(lambda: whoosh(.9),'c_ocupa',.55); Pn(lambda: boom(1.8,38,1.0),'c_ocupa',.95); Pn(lambda: clang(),'c_ocupa',.4); Pn(lambda: shatter(),'c_ocupa',.35)
Pn(stamp,'c_nunca',.85); Pn(lambda: downsweep(1.0),'c_nunca',.45)
# S4 tregua
Pn(stamp,'d_1884',.8); Pn(lambda: boom(1.2,52,.7),'d_1884',.6)
Pn(lambda: whoosh(.7),'d_tregua',.45); Pn(lambda: bell(523,2.2),'d_tregua',.4); Pn(pop,'d_tregua',.5)
Pn(pop,'d_sigue',.5); Pn(lambda: step(),'d_sigue',.4); Pn(lambda: rumble(1.2),'d_sigue',.35)
Pn(pop,'d_lit',.55); Pn(lambda: ping(440,.9),'d_lit',.4)
# S5 tratado
Pn(stamp,'e_1904',.8); Pn(lambda: boom(1.2,52,.7),'e_1904',.6)
Pn(lambda: paper(),'e_trat',.5); Pn(lambda: whoosh(.7),'e_trat',.45)
Pn(lambda: typew(1.2),'e_recon',.35) if False else Pn(lambda: paper(),'e_recon',.4)
Pn(pop,'e_chile',.6); Pn(lambda: ping(660,.8),'e_chile',.35)
Pn(lambda: boom(2.0,38,1.0),'e_siempre',1.0); Pn(stamp,'e_siempre',.9); Pn(lambda: stinger(),'e_siempre',.4); Pn(lambda: downsweep(1.2),'e_siempre',.4)
# S6 ferrocarril y libre tránsito
Pn(pop,'f_cambio',.5)
Pn(lambda: engine(1.6),'f_ferro',.3); Pn(lambda: whoosh(.8),'f_ferro',.45); Pn(pop,'f_ferro',.5)
Pn(pop,'f_arica',.5); Pn(lambda: ping(784,.8),'f_arica',.4)
Pn(lambda: whoosh(.7),'f_libre',.5); Pn(pop,'f_libre',.55)
Pn(pop,'f_puertos',.5); Pn(lambda: bell(523,1.8),'f_puertos',.3)
# S7 reclamar y la Haya
Pn(pop,'g_pero',.5); Pn(lambda: rumble(1.2),'g_recl',.3); Pn(lambda: riser(1.6,200,1200,.3),'g_recl',.3)
Pn(stamp,'g_2013',.8); Pn(lambda: boom(1.2,52,.7),'g_2013',.6)
Pn(lambda: whoosh(1.0),'g_2013',.4)
Pn(lambda: gong(),'g_haya',.45); Pn(lambda: boom(1.6,45,.9),'g_haya',.8); Pn(lambda: ping(988,.8),'g_haya',.4)
# S8 2018
Pn(stamp,'h_2018',.8); Pn(lambda: boom(1.2,52,.7),'h_2018',.6)
Pn(lambda: gong(),'h_corte',.4); Pn(pop,'h_corte',.5)
Pn(lambda: knock(),'h_no',.9); Pn(lambda: boom(1.8,40,1.0),'h_no',.95); Pn(lambda: stinger(),'h_no',.4)
Pn(stamp,'h_oblig',.85); Pn(lambda: downsweep(1.2),'h_oblig',.45)
Pn(pop,'h_mar',.55); Pn(lambda: waves(2.5),'h_mar',.25)
# S9 posturas
Pn(pop,'i_chile',.6); Pn(lambda: ping(523,.8),'i_chile',.4); Pn(lambda: whoosh(.5),'i_chile',.4)
Pn(pop,'i_resp',.55)
Pn(pop,'i_bol',.6); Pn(lambda: ping(784,.8),'i_bol',.4); Pn(lambda: whoosh(.5),'i_bol',.4)
Pn(pop,'i_der',.55)
# S10 cierre
Pn(lambda: whoosh(.6),'j_ent',.4); Pn(lambda: ping(660,.9),'j_ent',.4)
Pn(stamp,'j_100',.8); Pn(lambda: boom(1.2,52,.7),'j_100',.6)
Pn(lambda: boom(1.6,42,.9),'j_sie',.8); Pn(lambda: sparkle(1.0),'j_sie',.35)
Pn(notif,'j_com',.8); Pn(pop,'j_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7,t8,t9,t10=T[1:11]
layer_drone(0,t1,.45); layer_pad(0,t1,.32,lpf=1100); layer_drums(0,t1,.22,'light')
layer_pad(t1,t2,.36,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.2,step=.5)
layer_pad(t2,t3,.38,lpf=1500); layer_ost(t2,t3,.2); bells(t2,t3,.18,seed=3)
layer_pad(t3,t4,.4,lpf=1300); layer_drone(t3,t4,.4); layer_drums(t3,t4,.3,'march'); layer_bass(t3,t4,.26)
layer_pad(t4,t5,.36,lpf=1100); layer_bass(t4,t5,.22); layer_drums(t4,t5,.18,'light')
layer_pad(t5,t6,.38,lpf=1200); layer_drone(t5,t6,.4); layer_bass(t5,t6,.24)
layer_pad(t6,t7,.4,lpf=1500); layer_arp(t6,t7,.22,step=.5); layer_drums(t6,t7,.26,'tribal'); layer_bass(t6,t7,.24)
layer_pad(t7,t8,.42,lpf=1400); layer_drone(t7,t8,.4); layer_drums(t7+2,t8,.28,'march'); swell(E['g_haya']-1.2,E['g_haya'],.3,(50,57,62,65))
layer_pad(t8,t9,.42,lpf=1300); layer_drone(t8,t9,.42); layer_bass(t8,t9,.26)
layer_pad(t9,t10,.38,lpf=1500); layer_arp(t9,t10,.22,step=.5); layer_bass(t9,t10,.22)
layer_pad(t10,DUR,.38,lpf=1700); layer_arp(t10,DUR,.26,step=.5); bells(t10,DUR,.2,seed=14); layer_drums(t10+3,DUR,.22,'pop')
for k in ['h_costa','c_ocupa','e_siempre','g_haya','h_no']: duck(E[k],E[k]+1.0,.3,.4)
save()
