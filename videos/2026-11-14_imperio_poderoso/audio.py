import sys,json; sys.path.insert(0,'../../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
PR=[('Dm',38,[50,53,57,62]),('Bb',46,[58,62,65,70]),('F',41,[53,57,60,65]),('C',48,[60,64,67,72])]
setMusic(96,PR)
trSfx(TRS,E)
# S0 gancho
P(lambda: riser(3.0,200,1400,.3),0.0,.35)
Pn(stamp,'h_cuarta',.8); Pn(lambda: boom(1.4,50,.8),'h_cuarta',.7); Pn(lambda: sparkle(1.0),'h_cuarta',.35,.3)
Pn(pop,'h_plan',.55); Pn(lambda: ping(880,.8),'h_plan',.4)
# S1 grande != poderoso
Pn(pop,'g_gran',.55); Pn(lambda: whoosh(.4),'g_gran',.3,-.2)
Pn(stamp,'g_mismo',.8); Pn(lambda: boom(1.0,55,.6),'g_mismo',.6); Pn(lambda: scratch(.4),'g_mismo',.45)
Pn(pop,'g_pod',.55); Pn(lambda: zap(.5),'g_pod',.4)
Pn(lambda: riser(1.0,300,1800,.3),'g_cual',.4,-.2); Pn(stamp,'g_cual',.7); Pn(pop,'g_pod2',.45)
# S2 británico
Pn(pop,'b_brit',.55); Pn(lambda: bell(523,2.0),'b_brit',.45)
Pn(stamp,'b_20',.8); Pn(lambda: boom(1.2,50,.7),'b_20',.6)
Pn(lambda: whoosh(.5),'b_tre',.4); Pn(cntTick,'b_tre',.5)
for k in range(5): P(pop,E['b_col']+k*.2,.4)
Pn(lambda: ping(1046,.9),'b_col',.45)
Pn(lambda: whoosh(.8),'b_uni',.4); Pn(tick,'b_uni',.5)
Pn(lambda: waves(1.6),'b_bar',.35); Pn(pop,'b_bar',.5)
# S3 India
Pn(stamp,'i_27',.8); Pn(lambda: boom(1.2,50,.7),'i_27',.6)
Pn(lambda: riser(1.2,250,1600,.3),'i_ind',.4,-.3)
Pn(shatter,'i_ind',.6); Pn(lambda: boom(1.4,45,.8),'i_ind',.7); Pn(lambda: sparkle(1.2),'i_ind',.4)
# S4 mongol
Pn(pop,'m_mon',.55); Pn(lambda: whoosh(.7),'m_mon',.4); Pn(lambda: rumble(3.0),'m_mon',.35)
Pn(lambda: whoosh(.5),'m_20',.4); Pn(cntTick,'m_20',.5)
Pn(lambda: ping(1175,.9),'m_seg',.5); Pn(pop,'m_seg',.45)
Pn(lambda: chime(1046,1.4),'m_cont',.55); Pn(stamp,'m_cont',.6)
# S5 muere el gran kan
Pn(pop,'d_mur',.5); Pn(lambda: bell(392,2.6),'d_mong',.55); Pn(pop,'d_mong',.5)
P(lambda: downsweep(1.0),E['d_mong']+.7,.5)
Pn(stamp,'d_1259',.8); Pn(lambda: boom(1.4,48,.8),'d_1259',.7)
Pn(lambda: zap(.6),'d_gue',.6); Pn(clang,'d_gue',.5); Pn(lambda: boom(1.4,42,.9),'d_gue',.8); Pn(lambda: arc(.8),'d_gue',.4)
Pn(stamp,'d_60',.8); Pn(lambda: boom(1.2,50,.7),'d_60',.6)
Pn(shatter,'d_4',.65); Pn(lambda: boom(1.6,42,.9),'d_4',.8); Pn(lambda: stinger(),'d_4',.5)
for k in range(4): P(pop,E['d_4']+.1+k*.1,.4)
# S6 Roma
Pn(lambda: brassSting(),'r_roma',.5); Pn(lambda: boom(1.4,50,.8),'r_roma',.7); Pn(lambda: whoosh(.9),'r_roma',.4)
Pn(lambda: whoosh(.5),'r_5',.4); Pn(cntTick,'r_5',.5)
Pn(stamp,'r_117',.8); Pn(lambda: boom(1.0,55,.6),'r_117',.5)
Pn(lambda: whoosh(.8),'r_casi',.45); Pn(pop,'r_casi',.5); Pn(lambda: ping(660,.8),'r_vec',.45)
Pn(pop,'r_occ',.5)
Pn(lambda: whoosh(.6),'r_500',.4); Pn(cntTick,'r_500',.5); Pn(lambda: gong(110,3.0),'r_500',.5)
# S7 cierre
Pn(pop,'c_dep',.5)
Pn(pop,'c_ocu',.6); Pn(lambda: whoosh(.4),'c_ocu',.3,-.1)
Pn(pop,'c_blo',.6); Pn(lambda: whoosh(.4),'c_blo',.3,-.1)
Pn(pop,'c_duro',.6); Pn(lambda: whoosh(.4),'c_duro',.3,-.1)
Pn(pop,'c_com',.6); Pn(notif,'c_com',.5)
layer_drums(0.0,DUR-1.2,.5,'light')
save()
