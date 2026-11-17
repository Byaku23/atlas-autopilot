import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Em',40,[52,55,59,64]),('C',36,[48,55,60,64]),('Am',45,[57,60,64,69]),('B',47,[59,63,66,71])]
setMusic(88,PR)
trSfx(TRS,E)
# S0 gancho: muro parte la ciudad
P(lambda: riser(2.0,200,1400,.3),0.0,.35)
Pn(stamp,'s_dos',.9); Pn(lambda: boom(1.6,45,.9),'s_dos',.8); Pn(lambda: shatter(),'s_dos',.35)
Pn(stamp,'s_gf',.85); Pn(lambda: boom(1.8,42,.9),'s_gf',.8); Pn(lambda: downsweep(1.0),'s_gf',.4)
Pn(pop,'s_mapa',.5); Pn(lambda: ping(880,.8),'s_mapa',.4)
# S1 1947
Pn(stamp,'a_doce',.8); Pn(lambda: boom(1.2,52,.7),'a_doce',.6)
Pn(pop,'a_eeuu',.5); Pn(lambda: ping(660,.8),'a_eeuu',.4)
Pn(lambda: whoosh(.9),'a_prom',.5); Pn(pop,'a_prom',.5)
Pn(pop,'a_res',.5); Pn(lambda: ping(784,.8),'a_res',.35)
Pn(lambda: boom(1.4,45,.9),'a_com',.8); Pn(lambda: stinger(),'a_com',.4); Pn(lambda: hiss(.9),'a_com',.3)
# S2 bloqueo
Pn(stamp,'b_jun',.8); Pn(lambda: boom(1.2,50,.7),'b_jun',.6)
Pn(lambda: whoosh(.6),'b_urss',.45); Pn(pop,'b_urss',.5)
Pn(lambda: boom(1.4,45,.9),'b_blo',.8); Pn(lambda: clang(),'b_blo',.45); Pn(lambda: stinger(),'b_blo',.35)
Pn(pop,'b_occ',.5); Pn(lambda: ping(523,.8),'b_occ',.4)
# S3 OTAN
Pn(stamp,'n_4',.8); Pn(lambda: boom(1.2,52,.7),'n_4',.6)
Pn(lambda: riser(1.4,300,1500,.3),'n_nace',.4,-.3); Pn(pop,'n_nace',.5)
Pn(lambda: fanfare(),'n_otan',.45); Pn(lambda: boom(1.8,42,1.0),'n_otan',.9); Pn(lambda: sparkle(.9),'n_otan',.3)
Pn(pop,'n_oes',.5); Pn(lambda: bell(660,2.0),'n_oes',.4)
# S4 Varsovia
Pn(stamp,'w_14',.8); Pn(lambda: boom(1.2,52,.7),'w_14',.6)
Pn(pop,'w_este',.5); Pn(lambda: whoosh(.7),'w_resp',.5); Pn(lambda: rumble(1.4),'w_resp',.4)
Pn(lambda: boom(1.8,40,1.0),'w_pacto',.9); Pn(lambda: stinger(),'w_pacto',.4); Pn(stamp,'w_pacto',.7)
Pn(pop,'w_var',.5)
# S5 muro
Pn(stamp,'m_13',.8); Pn(lambda: boom(1.2,52,.7),'m_13',.6)
Pn(pop,'m_ber',.5); Pn(lambda: ping(660,.8),'m_ber',.35)
Pn(lambda: riser(1.0,200,1200,.3),'m_parte',.4,-.5); Pn(lambda: clang(),'m_parte',.45)
Pn(stamp,'m_muro',.95); Pn(lambda: boom(1.8,40,1.0),'m_muro',.95); Pn(lambda: clunk(),'m_muro',.5)
# S6 Cuba
Pn(stamp,'c_oct',.8); Pn(lambda: boom(1.2,50,.7),'c_oct',.6)
Pn(lambda: whoosh(.7),'c_mis',.5); Pn(lambda: boom(1.4,45,.9),'c_mis',.8); Pn(lambda: stinger(),'c_mis',.4)
Pn(pop,'c_cuba',.55); Pn(lambda: ping(440,.9),'c_cuba',.4)
Pn(lambda: sub(1.6,40),'c_mundo',.55); Pn(lambda: heart(),'c_mundo',.5)
Pn(lambda: heart(),'c_ali',.6)
# S7 el muro cae
Pn(stamp,'f_9',.8); Pn(lambda: boom(1.2,52,.7),'f_9',.6)
Pn(lambda: crowd(2.0),'f_9',.25)
Pn(lambda: rumble(1.4),'f_muro',.5)
Pn(lambda: boom(2.0,38,1.0),'f_cae',1.0); Pn(lambda: shatter(),'f_cae',.7); Pn(lambda: cheer(),'f_cae',.45); Pn(lambda: downsweep(1.2),'f_cae',.4)
# S8 URSS
Pn(stamp,'u_dic',.8); Pn(lambda: boom(1.2,52,.7),'u_dic',.6)
Pn(pop,'u_urss',.5); Pn(lambda: whoosh(.6),'u_urss',.35)
Pn(lambda: downsweep(1.6),'u_des',.7); Pn(lambda: boom(2.0,38,1.0),'u_des',.9); Pn(lambda: shatter(),'u_des',.5)
Pn(pop,'u_mapa',.5)
# S9 cierre
Pn(stamp,'z_dos',.7); Pn(lambda: boom(.9,55,.5),'z_dos',.5)
Pn(stamp,'z_blo',.65); Pn(lambda: boom(1.0,52,.55),'z_blo',.5)
Pn(stamp,'z_muro',.7); Pn(lambda: clunk(),'z_muro',.4)
Pn(stamp,'z_miedo',.9); Pn(lambda: boom(1.6,45,.9),'z_miedo',.8)
Pn(lambda: whoosh(.6),'z_quien',.4); Pn(lambda: ping(660,.9),'z_quien',.45)
Pn(pop,'z_gano',.6); Pn(lambda: ping(988,.8),'z_gano',.4); Pn(lambda: bell(523,2.0),'z_gano',.4)
Pn(notif,'z_com',.8); Pn(pop,'z_com',.7)
# música
t1,t2,t3,t4,t5,t6,t7,t8,t9=T[1:10]
layer_drone(0,t1,.45); layer_pad(0,t1,.3,lpf=1000); layer_drums(0,t1,.2,'light')
layer_pad(t1,t2,.36,lpf=1300); layer_bass(t1,t2,.22); layer_arp(t1+.5,t2,.22,step=.5)
layer_pad(t2,t3,.38,lpf=1200); layer_drone(t2,t3,.35); layer_drums(t2,t3,.28,'march'); layer_bass(t2,t3,.24)
layer_pad(t3,t4,.4,lpf=1500); layer_ost(t3,t4,.22); layer_bass(t3,t4,.24); bells(t3,t4,.18,seed=5)
layer_pad(t4,t5,.4,lpf=1500); layer_drums(t4,t5,.32,'march'); layer_bass(t4,t5,.26); layer_arp(t4,t5,.26,step=.5)
layer_pad(t5,t6,.42,lpf=1400); layer_drone(t5,t6,.38); layer_bass(t5,t6,.28); layer_drums(t5,t6,.3,'tribal')
layer_pad(t6,t7,.4,lpf=1200); layer_drone(t6,t7,.45); layer_bass(t6,t7,.22)
layer_pad(t7,t8,.42,lpf=1600); layer_ost(t7,t8,.25); layer_drums(t7,t8,.3,'march'); swell(E['f_muro']-1.0,E['f_cae'],.3,(52,59,64,67))
layer_pad(t8,t9,.4,lpf=1400); layer_drone(t8,t9,.4); layer_bass(t8,t9,.24)
layer_pad(t9,DUR,.38,lpf=1700); layer_arp(t9,DUR,.26,step=.5); bells(t9,DUR,.2,seed=14); layer_drums(t9+3,DUR,.22,'pop')
duck(E['s_dos'],E['s_dos']+.9,.3,.4); duck(E['a_com'],E['a_com']+1.0,.3,.4); duck(E['m_muro'],E['m_muro']+1.0,.3,.4); duck(E['f_cae'],E['f_cae']+1.0,.3,.4); duck(E['u_des'],E['u_des']+1.0,.3,.4); duck(E['c_mundo'],E['c_ali']+.8,.3,.5)
save()
