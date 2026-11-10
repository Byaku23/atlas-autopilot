import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
DM=[('Dm',38,[50,53,57,62]),('Bb',34,[46,50,53,58]),('F',41,[53,57,60,65]),('A',33,[57,61,64,69])]
setMusic(100,DM)
trSfx(TRS,E)
# ---------------- S0 gancho ----------------
P(lambda: boom(1.4,58,1.0),0,.8); P(lambda: growl(1.4),0.02,.55); P(stamp,0,.7); P(lambda: sparkle(.8),.05,.3)
Pn(stamp,'h_oso',.4)
Pn(clunk,'h_mun',.95); Pn(lambda: ping(1500,.7),'h_mun',.5,.04); Pn(lambda: sparkle(1.0),'h_mun',.4,.05)
Pn(stamp,'h_mund',.8); Pn(lambda: boom(.9,75,.6),'h_mund',.5)
Pn(lambda: whoosh(.7,False),'h_uni',.55,-.05)
for i in range(3):
    tl=E['h_uni']+.68+i*.24
    P(lambda: whoosh(.28,True),tl-.3,.4); P(stamp,tl,.85); P(lambda: boom(.7,70,.5),tl,.5); P(lambda: pop(500+i*150),tl+.02,.5)
Pn(lambda: rumble(.9),'h_camb',.55,-.05); Pn(lambda: boom(.8,65,.55),'h_camb',.5); Pn(lambda: clang(),'h_camb',.3,.02)
# ---------------- S1 Aníbal ----------------
Pn(stamp,'a_doc',.7); Pn(lambda: bell(520,2.5),'a_doc',.4)
Pn(impact,'a_ani',.8); Pn(lambda: stinger(45),'a_ani',.35)
P(lambda: rumble(4.2),E['a_cruz']+.1,.3); P(lambda: wind(4.0),E['a_cruz'],.2)
k=0
while E['a_cruz']+.3+k*.52<E['a_roma']: P(lambda: boom(.5,52,.7),E['a_cruz']+.3+k*.52,.45); P(step,E['a_cruz']+.3+k*.52+.26,.35); k+=1
Pn(lambda: rumble(1.2),'a_alp',.55,-.1); Pn(lambda: boom(1.0,50,.7),'a_alp',.7); Pn(lambda: sparkle(1.0),'a_alp',.3)
for j in range(6): P(lambda: pop(400+j*60),E['a_alp']+j*.08,.3)
counter(E['a_30']-.05,E['a_30']+.75,2/30,.3); P(lambda: ding(1320,1.0),E['a_30']+.78,.55)
Pn(stamp,'a_roma',.7); P(lambda: ping(1200,.6),E['a_roma']+.38,.6); P(lambda: boom(.6,90,.5),E['a_roma']+.4,.4)
P(lambda: wind(2.6),E['a_poc']-.1,.55); P(lambda: wind(2.6),E['a_poc']+2.2,.4); P(lambda: howl(2.0,300),E['a_poc']+.3,.12)
counter(E['a_solo'],E['a_uno'],2/30,.25)
for i in range(1,8):
    tf=E['a_solo']+.05+(E['a_uno']-.18-E['a_solo']-.05)*(7-i)/6; P(lambda: pop(300+i*40),tf,.35)
Pn(impact,'a_uno',.95); Pn(lambda: sub(2.0,40),'a_uno',.7); Pn(lambda: ding(880,1.6),'a_uno',.5); Pn(lambda: sparkle(1.4),'a_uno',.5,.05)
# ---------------- S2 Cher Ami ----------------
Pn(stamp,'c_18',.7); Pn(lambda: bell(660,2.0),'c_18',.3)
Pn(lambda: creak(.45),'c_pal',.5,-.1); P(clunk,E['c_pal']+.27,.85); P(lambda: pop(700),E['c_pal']+.35,.5); Pn(lambda: chime(1300,1.0),'c_pal',.4,.35)
Pn(stamp,'c_cher',.85); Pn(lambda: boom(.9,70,.6),'c_cher',.5); Pn(lambda: sparkle(1.0),'c_cher',.4)
Pn(lambda: whoosh(.7,True),'c_vol',.6,-.05)
k=0
while E['c_vol']+k*.285<E['c_arr']-.12: P(lambda: whoosh(.2,True),E['c_vol']+k*.285,.22); k+=1
counter(E['c_40']-.02,E['c_40']+.72,2/30,.3); P(lambda: ding(1568,.9),E['c_40']+.75,.5)
Pn(lambda: ding(1760,.8),'c_25',.5)
k=0
while E['c_25']+.15+k*.25<E['c_disp']-.45: P(tick,E['c_25']+.15+k*.25,.4); k+=1
Pn(batcrack,'c_disp',.95); Pn(impact,'c_disp',.9); Pn(lambda: shatter(),'c_disp',.35,.02); Pn(lambda: zap(.4),'c_disp',.4)
Pn(lambda: heart(),'c_pec',.8); Pn(lambda: pop(500),'c_pec',.5); Pn(stamp,'c_pec',.5,.02)
Pn(lambda: ping(1300,.6),'c_pata',.6); Pn(heart,'c_pata',.7); Pn(lambda: stamp(),'c_pata',.5)
Pn(lambda: pop(800),'c_arr',.7,-.12); Pn(lambda: clunk(),'c_arr',.5,-.1); Pn(lambda: chime(1568,1.4),'c_arr',.5); Pn(lambda: sparkle(1.2),'c_arr',.5); Pn(lambda: bell(784,2.5),'c_arr',.4)
# ---------------- S3 mensaje ----------------
Pn(lambda: paper(.8),'m_men',.8); Pn(lambda: whoosh(.5,True),'m_men',.35,-.05)
for j in range(8): P(tick,E['m_men']+.05+j*.07,.3)
Pn(stamp,'m_his',.75)
Pn(lambda: riser(.5,200,1500,.3),'m_res',.5,-.45); Pn(lambda: whoosh(.5,True),'m_res',.5); Pn(lambda: pop(900),'m_res',.7,.5); Pn(lambda: boom(.6,80,.5),'m_res',.4,.5)
counter(E['m_cien'],E['m_cien']+1.25,2/30,.3)
for j in range(10): P(lambda: pop(600+j*40),E['m_cien']+j*.13,.22)
P(lambda: ding(1318,1.0),E['m_cien']+1.28,.5)
Pn(lambda: hiss(1.2),'m_atr',.55); Pn(lambda: steam(1.0),'m_atr',.45); Pn(lambda: rumble(1.0),'m_atr',.4); Pn(lambda: boom(.9,60,.6),'m_atr',.5)
Pn(lambda: whoosh(.7,False),'m_fra',.45)
Pn(lambda: clang(),'m_hit',.95); Pn(impact,'m_hit',1.0); Pn(clunk,'m_hit',.5); Pn(lambda: sparkle(1.0),'m_hit',.4)
for j in range(6): P(lambda: pop(500+j*80),E['m_hit']+.05+j*.04,.3)
Pn(lambda: brassSting(50,2.0),'m_cruz',.75); Pn(lambda: fanfare(50,2.4),'m_cruz',.5); Pn(stamp,'m_cruz',.7); Pn(lambda: sparkle(1.6),'m_cruz',.55)
# ---------------- S4 Stubby ----------------
Pn(stamp,'p_mis',.65)
Pn(bark,'p_per',.75,-.1)
for j in range(10): P(lambda: step(),E['p_per']-.2+j*.075,.3)
Pn(stamp,'p_stu',.85); Pn(lambda: boom(.9,65,.55),'p_stu',.5); Pn(lambda: bark(),'p_stu',.4,.08)
for j in range(3): P(lambda: whoosh(.22,True),E['p_olia']+j*.2,.3); P(lambda: hiss(.2),E['p_olia']+j*.2,.2)
Pn(lambda: hiss(2.4),'p_gas',.5,-.05); Pn(lambda: stinger(45),'p_gas',.4); Pn(lambda: rumble(2.0),'p_gas',.35)
Pn(stamp,'p_nadie',.6); Pn(lambda: ping(1000,.6),'p_nadie',.4)
Pn(bark,'p_desp',.85); Pn(bark,'p_desp',.5,.24)
for i in range(4):
    tw=E['p_sold']+i*.2; P(lambda: pop(700+i*90),tw,.55); P(lambda: paper(.25),tw+.05,.5); P(click,tw+.55,.7); P(lambda: pop(1000),tw+.56,.35)
Pn(bark,'p_lad',1.0); Pn(lambda: bark(),'p_lad',.6,.2); Pn(impact,'p_lad',.5)
Pn(lambda: whoosh(.5,True),'p_atr',.5); 
for j in range(6): P(lambda: step(),E['p_atr']+.1+j*.1,.3)
Pn(lambda: scratch(.4),'p_esp',.85); Pn(lambda: growl(.6),'p_esp',.6); Pn(lambda: pop(500),'p_esp',.6); Pn(stamp,'p_esp',.5,.02)
Pn(lambda: ping(1100,.6),'p_ran',.4)
Pn(stamp,'p_sar',1.0); Pn(lambda: fanfare(50,2.4),'p_sar',.5); Pn(lambda: clang(),'p_sar',.6); Pn(lambda: sparkle(1.2),'p_sar',.45)
# ---------------- S5 Wojtek ----------------
Pn(stamp,'w_oso',.7); Pn(lambda: growl(1.0),'w_oso',.45); Pn(lambda: boom(.9,60,.5),'w_oso',.5)
Pn(impact,'w_voi',.85); Pn(lambda: sub(1.4,45),'w_voi',.5)
Pn(lambda: pop(700),'w_sol',.6); Pn(lambda: pop(850),'w_sol',.6,.12)
Pn(stamp,'w_pol',.7)
Pn(heart,'w_ado',.6); Pn(lambda: chime(1046,1.0),'w_ado',.35)
Pn(lambda: whoosh(.4),'w_iran',.4,-.1); Pn(lambda: pop(900),'w_iran',.7); P(lambda: ping(1200,.6),E['w_iran']+.35,.6); P(stamp,E['w_iran']+.35,.6); P(stamp,E['w_iran']+.45,.55)
Pn(lambda: steam(.6),'w_cach',.5); Pn(lambda: boing(300,.5),'w_cach',.5,.05); Pn(lambda: sparkle(1.4),'w_cach',.5,.1); Pn(lambda: chime(1400,1.4),'w_cach',.5,.1); Pn(lambda: purr(1.4),'w_cach',.45,.2); Pn(lambda: bell(660,2.5),'w_cach',.35,.15)
# ---------------- S6 Montecassino ----------------
P(lambda: rumble(3.0),T[6]+.2,.4)
Pn(lambda: boom(1.5,45,.9),'mc_mon',.7); P(lambda: thunder(3.0),E['mc_mon'],.45); Pn(stamp,'mc_mon',.7)
k=0
while T[6]+.1+k*.4<E['mc_emb']:
    ts=T[6]+.1+k*.4
    if not (E['mc_fire']+.2<ts<E['mc_fire']+1.2): P(lambda: boom(.8,60+(k%4)*12,.8),ts,.28 if ts<E['mc_carg'] else .16)
    k+=1
Pn(stamp,'mc_44',.6)
Pn(clunk,'mc_carg',.8); Pn(lambda: whoosh(.3),'mc_carg',.3)
k=0
while E['mc_carg']+.4+k*.3<E['mc_mun']: P(lambda: boom(.3,75,.9),E['mc_carg']+.4+k*.3,.35); P(step,E['mc_carg']+.4+k*.3,.3); k+=1
Pn(clunk,'mc_mun',1.0); Pn(lambda: boom(.5,90,.6),'mc_mun',.45); Pn(lambda: pop(700),'mc_mun',.4,.2); Pn(lambda: click(),'mc_mun',.7,.35)
Pn(lambda: boom(1.4,42,1.0),'mc_fire',1.0); Pn(impact,'mc_fire',.9); Pn(lambda: clang(),'mc_fire',.4); Pn(lambda: whistle(.5),'mc_fire',.2,.05)
P(lambda: boom(1.4,50,.9),E['mc_fire']+.4,.8); P(lambda: rumble(1.6),E['mc_fire']+.4,.45)
Pn(clunk,'mc_mas',.7)
k=0
while E['mc_mas']+.3+k*.3<E['mc_comp']: P(lambda: boom(.3,75,.9),E['mc_mas']+.3+k*.3,.3); P(step,E['mc_mas']+.3+k*.3,.3); k+=1
Pn(lambda: cheer(1.6),'mc_comp',.3,.4)
Pe(lambda: riser(.42,200,1800,.4),'mc_emb',.42,.6)
Pn(lambda: brassSting(50,2.2),'mc_emb',.9); Pn(lambda: fanfare(50,2.4),'mc_emb',.6); Pn(stamp,'mc_emb',1.0); Pn(impact,'mc_emb',.8); Pn(lambda: sparkle(1.6),'mc_emb',.5)
# ---------------- S7 CTA ----------------
Pn(lambda: whoosh(.5),'q_quien',.4,-.05); Pn(lambda: pop(800),'q_quien',.5)
Pn(lambda: pop(1000),'q_val',.6); Pn(lambda: ping(1400,.5),'q_val',.4)
Pn(lambda: pop(700),'q_ele',.8); Pn(lambda: boom(.6,70,.6),'q_ele',.5); Pn(lambda: ding(988,1.0),'q_ele',.5)
Pn(lambda: pop(1100),'q_pal',.8); Pn(lambda: chime(1568,1.0),'q_pal',.5); Pn(lambda: ding(1175,1.0),'q_pal',.5)
Pn(lambda: pop(800),'q_per',.8); Pn(lambda: bark(),'q_per',.5); Pn(lambda: ding(1318,1.0),'q_per',.5)
Pn(lambda: pop(600),'q_oso',.8); Pn(lambda: growl(.8),'q_oso',.5); Pn(lambda: ding(1568,1.2),'q_oso',.55)
Pn(lambda: tada(),'q_com',.6); Pn(notif,'q_com',.7); Pn(lambda: pop(900),'q_com',.7)
Pn(lambda: chime(1568,1.2),'q_sig',.5); Pn(lambda: ping(1800,.5),'q_sig',.45); Pn(lambda: whoosh(.4),'q_sig',.3,-.05)
# ---------------- música ----------------
t1,t2,t3,t4,t5,t6,t7=T[1:8]
layer_pad(0,t1,.28,lpf=1400); layer_drone(0,t1,.35); layer_bass(0,t1,.3); layer_drums(.3,t1,.4,'march'); swell(E['h_uni']-.3,E['h_uni']+.2,.25,(50,57,62,65))
layer_drone(t1,t2,.35); layer_pad(t1,t2,.25,lpf=1100); layer_drums(t1,E['a_poc'],.35,'tribal'); layer_bass(t1+1,E['a_poc'],.28); bells(E['a_alp'],E['a_poc'],.2,seed=3)
layer_pad(E['a_poc'],t2,.3,lpf=900); layer_drone(E['a_poc'],t2,.3); bells(E['a_poc'],t2,.18,seed=8)
duck(E['a_solo']+.3,E['a_uno']-.02,.18,.45)
layer_pad(t2,t3,.28,lpf=1500); layer_drums(t2,E['c_disp']-.05,.4,'march'); layer_arp(t2,E['c_disp']-.05,.3,step=.5); layer_bass(t2,t3,.3)
duck(E['c_disp']-.05,E['c_disp']+.6,.35,.5)
layer_pad(t3,t4,.3,lpf=1100); layer_drone(t3,t4,.3); bells(t3,t4,.22,seed=5); swell(E['m_fra']-.1,E['m_cruz'],.28,(50,57,62,66))
layer_drums(E['m_cruz'],t4,.3,'march')
layer_drone(t4,t5,.35); layer_pad(t4,t5,.25,lpf=1000); layer_drums(t4,t5,.25,'hats'); layer_bass(t4+.5,t5,.3); layer_arp(E['p_gas'],t5,.25,step=1)
layer_pad(t5,t6,.34,lpf=1300); bells(t5,t6,.24,seed=12); layer_arp(E['w_cach'],t6,.25,step=1,oct=24)
layer_pad(t6,t7,.3,lpf=1500); layer_drums(t6,E['mc_emb'],.45,'march'); layer_bass(t6,E['mc_emb'],.35); layer_ost(t6+1,E['mc_emb'],.22); layer_drone(t6,t7,.3)
swell(E['mc_emb']-.6,E['mc_emb'],.3,(50,57,62,66))
layer_drums(t7,DUR,.4,'march'); layer_pad(t7,DUR,.32,lpf=1800); layer_arp(t7,DUR,.32,step=.5); bells(t7,DUR,.25,seed=15); layer_bass(t7,DUR,.3)
duck(E['mc_emb']-.02,E['mc_emb']+.25,.45,.35)
save()
