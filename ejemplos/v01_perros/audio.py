import sys,json; sys.path.insert(0,'../eng')
from sfx import *
J=json.load(open('ev.json')); E=J['E']; T=J['T']; DUR=J['DUR']; TRS=J['TRS']
init(DUR,E)
AM=[('Am',45,[57,60,64,69]),('F',41,[53,57,60,65]),('C',48,[55,60,64,67]),('G',43,[55,59,62,67])]
CM=[('C',48,[60,64,67,72]),('G',43,[59,62,67,71]),('Am',45,[57,60,64,69]),('F',41,[57,60,65,69])]
setMusic(80,AM)
# ---------------- efectos ----------------
trSfx(TRS,E)
P(lambda: wind(6.4),0,.45); P(lambda: crackle(6.4,30),0,.25)
for k in range(3): P(heart,.15+k*.9,.5)
Pn(stamp,'h_anos',.5); Pn(lambda: sub(1.2,42),'h_anos',.6)
Pn(lambda: whoosh(.4),'h_err',.35); Pn(lambda: boom(1.0,60,.6),'h_int',.5); Pn(lambda: sparkle(.8),'h_int',.3)
Pn(swish,'h_dar',.7,.05); Pn(lambda: whoosh(.8,False),'h_dar',.3,.1)
Pn(impact,'h_lobo',.9); Pn(growl,'h_lobo',.55); Pn(lambda: stinger(45),'h_lobo',.35)
# línea de tiempo
Pn(lambda: chime(880,1.2),'s1_perro',.45); Pn(stamp,'s1_dom',.8); Pn(lambda: boom(1.0,55,.6),'s1_dom',.6); Pn(bark,'s1_dom',.5,.15)
for k in ['s1_agr','s1_ciu','s1_esc']: Pn(pop,k,.7); Pn(lambda: ping(1320,.6),k,.4); Pn(lambda: boom(.6,80,.4),k,.4)
P(lambda: riser(E['s1_agr']-E['s1_dom']-.4,300,900,.25),E['s1_dom']+.4,.3)
# ADN / mapa / años / hielo
Pn(lambda: hum(1.6,60),'s2_adn',.4,-.8); Pn(lambda: zap(.5),'s2_adn',.5); Pn(lambda: sparkle(1.2),'s2_adn',.5); Pn(lambda: modem(1.0),'s2_adn',.15,.2)
Pn(lambda: whoosh(.5,False),'s2_ing',.4,-.3); Pn(pop,'s2_ing',.7); Pn(lambda: ping(1046,.6),'s2_ing',.4); Pn(pop,'s2_tur',.7); Pn(lambda: ping(1318,.6),'s2_tur',.4)
Pn(lambda: chime(1200,1.0),'s2_hum',.4); Pn(stamp,'s2_14',.8); Pn(lambda: boom(1.0,60,.5),'s2_14',.5); Pn(stamp,'s2_16',.8); Pn(lambda: boom(1.2,50,.6),'s2_16',.6)
P(lambda: wind(2.6),E['s2_edad']-.55,.6); Pn(lambda: shatter(),'s2_edad',.45); Pn(lambda: downsweep(1.2),'s2_edad',.4); Pn(lambda: boom(1.4,45,.7),'s2_edad',.7)
# pregunta -> cabeza de lobo
Pn(lambda: boing(160,.6),'s3_q',.4); Pn(lambda: whoosh(.4),'s3_nadie',.25); Pn(pop,'s3_teo',.5)
P(lambda: riser(E['s3_nues']-E['s3_no']+.2,150,1200,.35),E['s3_no']-.2,.5); Pn(impact,'s3_nues',.8); Pn(lambda: howl(2.0,440),'s3_nues',.4,.1)
for k in range(4): P(heart,E['s3_nadie']+k*.85,.35)
# campamento
P(lambda: crackle(11.5,30),T[4],.25); P(lambda: wind(11.5),T[4],.25); Pn(lambda: howl(2.4,400),'s4_tranq',.3,-.9)
for k in range(10): P(step,E['s4_tranq']+k*.27,.3)
Pn(lambda: knock(),'s4_rest',.5); Pn(lambda: clunk(),'s4_rest',.4,.1); Pn(lambda: growl(.6),'s4_rest',.25,.2)
Pn(pop,'s4_mied',.4); Pn(lambda: whoosh(.7,True),'s4_huian',.6); Pn(lambda: boom(.6,90,.4),'s4_huian',.4)
for k in range(6): P(step,E['s4_huian']+k*.11,.35)
Pn(swish,'s4_mejor',.6); Pn(knock,'s4_mejor',.4,.6)
for k in range(3): P(lambda: pop(700+k*200),E['s4_cach']-.65+k*.16,.7); P(lambda: bark(),E['s4_cach']-.6+k*.16,.2)
Pn(lambda: sparkle(1.0),'s4_cach',.5)
# generaciones
P(lambda: riser(E['s5_perro']-E['tr5']+.1,200,1600,.4),E['tr5']-.1,.5)
for k in range(7): P(tick,E['tr5']+k*(E['s5_perro']-E['tr5'])/7,.5)
Pn(tada,'s5_perro',.6); Pn(bark,'s5_perro',.7,.1); Pn(bark,'s5_perro',.5,.4); Pn(lambda: boom(1.0,60,.5),'s5_perro',.5)
# beneficios: ladrido -> caza -> calor
Pn(lambda: boom(1.0,55,.5),'s6_gan',.5); Pn(stamp,'s6_gan',.4)
Pn(bark,'s6_pel',.9); Pn(bark,'s6_pel',.7,.25); Pn(bark,'s6_pel',.6,.5); Pn(lambda: growl(.8),'s6_pel',.3,-.4)
for k in range(3): Pn(lambda: whoosh(.35),'s6_pel',.25,k*.12)
Pn(lambda: whoosh(.6,True),'s6_caz',.6); Pn(lambda: swish(),'s6_caz',.6,.15)
for k in range(10): P(step,E['s6_caz']+k*.1,.4)
Pn(lambda: crackle(2.2,40),'s6_cal',.5); Pn(lambda: flameOn(),'s6_cal',.5); Pn(lambda: wind(1.6),'s6_hel',.5); Pn(lambda: chime(1600,1.0),'s6_hel',.3)
# excavación
Pn(pop,'s7_tur',.6); P(lambda: rumble(2.2),E['s7_yac'],.4)
for k in range(14): P(lambda: scratch(.12),E['s7_yac']+.3+k*.16,.3)
Pn(lambda: sparkle(1.2),'s7_ent',.4); Pn(lambda: boom(1.2,50,.5),'s7_ent',.5)
for k in range(8): P(lambda: scratch(.1),E['s7_ent']+k*.14,.35)
Pn(pop,'s7_pes',.6); Pn(lambda: chime(1400,1.0),'s7_pes',.35); Pn(pop,'s7_pers',.6); Pn(lambda: chime(1046,1.2),'s7_pers',.35)
Pn(lambda: clang(),'s7_herr',.5); Pn(stamp,'s7_herr',.8,.25); Pn(buzz,'s7_herr',.35,.25)
Pn(heart,'s7_fam',.8); Pn(lambda: bell(660,2.5),'s7_fam',.5); Pn(heart,'s7_fam',.6,.6); P(lambda: riser(.55,300,2000,.35),E['tr8']-.55,.4)
# hoy
Pn(pop,'s8_hoy',.7); Pn(swish,'s8_sen',.6,-.1); Pn(lambda: whoosh(.5),'s8_dedo',.35); Pn(boing,'s8_dedo',.4,.45); Pn(bark,'s8_dedo',.4,.6)
Pn(lambda: whoosh(.4),'s8_chimp',.4); Pn(lambda: boing(300,.5),'s8_chimp',.4,.3); Pn(buzz,'s8_bien',.5)
for k in range(3): P(pop,E['s8_emo']-.1+k*.1,.5)
Pn(lambda: riser(.8,200,1800,.35),'s8_mir',.5,-.3); Pn(lambda: sparkle(1.0),'s8_mir',.4)
# fogata final
P(lambda: crackle(5.0,30),T[9],.25); Pn(lambda: chime(880,1.2),'s9_comp',.4); Pn(lambda: whoosh(.4),'s9_el',.3)
Pn(lambda: sparkle(1.6),'s9_nos',.8); Pn(lambda: bell(784,3.0),'s9_nos',.6); Pn(lambda: boom(1.2,50,.5),'s9_nos',.5)
# CTA
Pn(lambda: chime(1200,1.0),'c_cual',.4)
for k in range(5): P(typew,E['c_perro']+k*.32,.6)
Pn(notif,'c_com',.8); Pn(pop,'c_com',.7)
# ---------------- música ----------------
t1,t2,t3,t4,t5,t6,t7,t8,t9,t10=T[1:11]
layer_drone(0,t1,.5); layer_pad(0,t1,.3,lpf=900)
setMusic(80,AM); layer_pad(t1,t2,.35,lpf=1400); layer_arp(E['s1_dom'],t2,.35); layer_drums(E['s1_agr'],t2,.35,'light')
layer_drone(t2,t3,.4); layer_ost(t2,E['s2_edad']-.3,.25); bells(t2,E['s2_edad']-.3,.22,seed=4)
layer_pad(t3,t4,.35,lpf=800); layer_drone(t3,t4,.45)
layer_drums(t4,t5,.45,'tribal'); layer_pad(t4,t5,.3,lpf=1100); layer_bass(t4,t5,.3)
layer_arp(t5,t6,.4,step=.5); layer_pad(t5,t6,.35,lpf=2000)
layer_drums(t6,t7,.5,'tribal'); layer_bass(t6,t7,.35); layer_pad(t6,t7,.3,lpf=1300)
layer_drone(t7,t8,.4); layer_pad(t7,t8,.3,lpf=900); bells(t7,t8,.18,seed=9)
setMusic(96,CM); layer_drums(t8,t9,.4,'pop'); layer_arp(t8,t9,.35,prog=CM); layer_bass(t8,t9,.35,prog=CM)
setMusic(80,AM); layer_pad(t9,t10,.4,lpf=1500); bells(t9,t10,.2,seed=12); swell(E['s9_comp'],E['s9_nos'],.3,(57,64,69,72))
setMusic(96,CM); layer_drums(t10,DUR,.35,'light'); layer_pad(t10,DUR,.35,prog=CM,lpf=1800); bells(t10,DUR,.25,prog=CM,seed=15)
duck(E['s2_edad'],E['s2_hielo']+.6,.4,.5); duck(E['s3_nues'],E['s3_nues']+.4,.5,.5)
save()
