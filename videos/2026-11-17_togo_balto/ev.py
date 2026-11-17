import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=79.7333
T=[0,5.51,11.85,23.29,27.63,34.33,43.13,55.45,65.96,69.43,DUR]
RAW={
'h_caballo':(wt('caballo'),.2),'h_consul':(wt('cónsul'),.5),'h_cal':(wt('Calígula',after=2.6),.3),'h_nada':(wt('nada'),0),'h_cierto':(wt('cierto'),.7),
's1_cal':(wt('Calígula',after=5.5),.3),'s1_emp':(wt('emperador'),0),'s1_37':(wt('treinta'),.2),'s1_41':(wt('cuarenta'),.3),'s1_mur':(wt('Murió'),.4),'s1_ase':(wt('asesinado'),.8),'s1_28':(wt('veintiocho'),.6),
's2_cab':(wt('caballo',after=11.8),0),'s2_inc':(wt('Incitato'),.4),'s2_sue':(wt('Suetonio',after=15),0),'s2_est':(wt('establo'),0),'s2_mar':(wt('mármol'),.3),'s2_pes':(wt('pesebre'),0),'s2_mfl':(wt('marfil'),.3),'s2_col':(wt('collar'),0),'s2_pie':(wt('piedras'),.2),'s2_cas':(wt('casa'),.3),'s2_sir':(wt('sirvientes'),.2),
's3_dion':(wt('Dión',after=23.3),0),'s3_av':(wt('avena'),0),'s3_hoj':(wt('hojuelas'),.2),'s3_oro':(wt('oro',after=26.8),.5),
's4_fam':(wt('famoso'),.3),'s4_cal':(wt('Calígula',after=28.9),0),'s4_plan':(wt('planeaba',after=29.8),.2),'s4_nom':(wt('nombrarlo'),0),'s4_cons':(wt('cónsul',after=30.9),.9),'s4_carg':(wt('cargos'),0),'s4_roma':(wt('Roma',after=33.7),0),
's5_ojo':(wt('ojo'),.3),'s5_sue':(wt('Suetonio',after=35.4),0),'s5_dion':(wt('Dión',after=36.5),0),'s5_hic':(wt('hiciera'),.3),'s5_dicen':(wt('Dicen',after=38.7),0),'s5_plan':(wt('planeaba',after=39.5),.3),'s5_dion2':(wt('Dión',after=40.4),0),'s5_nunca':(wt('nunca'),.9),'s5_ocu':(wt('ocurrió'),0),
's6_amb':(wt('ambos'),0),'s6_esc':(wt('escribieron'),0),'s6_mucho':(wt('mucho',after=44.8),.2),'s6_mue':(wt('muerte'),.2),'s6_todos':(wt('todos'),0),'s6_odi':(wt('odiaban'),.5),'s6_rec':(wt('recuerdo'),0),'s6_enc':(wt('Enciclopedia'),0),'s6_adm':(wt('admite'),.2),'s6_sep':(wt('separar'),0),'s6_ver':(wt('verdad',after=53),0),'s6_imp':(wt('imposible'),.6),
's7_ent':(wt('Entonces'),0),'s7_pas':(wt('pasó'),.3),'s7_alg':(wt('Algunos'),0),'s7_hist':(wt('historiadores'),0),'s7_brom':(wt('broma'),.5),'s7_cruel':(wt('cruel',after=60.3),.4),'s7_sen':(wt('Senado'),.4),'s7_cab':(wt('caballo',after=63),0),'s7_gob':(wt('gobernar'),.3),'s7_val':(wt('valen'),.2),'s7_ust':(wt('ustedes'),.8),
's8_otros':(wt('Otros'),0),'s8_rumor':(wt('rumor'),.4),'s8_inv':(wt('inventado'),0),'s8_ene':(wt('enemigos'),.6),
'c_asi':(wt('Así'),0),'c_preg':(wt('pregunta'),0),'c_cal':(wt('Calígula',after=71.5),.3),'c_loco':(wt('loco'),.5),'c_brom':(wt('bromista'),.5),'c_cruel':(wt('cruel',after=74.5),0),'c_com':(wt('Comenta'),0),'c_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'whip'},{'type':'dive','x':180,'y':300,'z':9,'dur':.5},
     {'type':'morph','a':[110,330,140,100,16],'col':'#f1e6c6','dur':.55},{'type':'flash'},{'type':'ink','x':180,'y':300,'col':'#ffd27a','dur':.45},
     {'type':'push','dir':'up'},{'type':'morph','a':[120,200,120,110,14],'col':'#2a1240','dur':.55},{'type':'iris','x':180,'y':330,'col':'#7a2a8a'},{'type':'zoom'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
