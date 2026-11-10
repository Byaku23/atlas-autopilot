import sys; sys.path.insert(0,'../eng')
from words import *
DUR=89.3
T=[0,6.45,15.62,29.0,35.88,47.4,51.42,59.45,70.45,79.45,84.52,DUR]
RAW={
'h_anos':(wt('años'),.5),'h_err':(wt('error'),.3),'h_int':(wt('inteligente'),0),'h_dar':(wt('darle'),0),'h_lobo':(wt('lobo'),1.0),
's1_perro':(wt('perro'),.3),'s1_prim':(wt('primer'),0),'s1_dom':(wt('domesticamos'),.8),'s1_agr':(wt('agricultura'),.5),'s1_ciu':(wt('ciudades'),.5),'s1_esc':(wt('escritura'),.6),
's2_adn':(wt('ADN'),.5),'s2_ing':(wt('Inglaterra'),.4),'s2_tur':(wt('Turquía'),.4),'s2_hum':(wt('humanos'),0),'s2_14':(wt('catorce'),.5),'s2_16':(wt('dieciséis'),.6),'s2_edad':(wt('Edad'),0),'s2_hielo':(wt('Hielo'),.8),
's3_q':(wt('pasó'),.6),'s3_nadie':(wt('Nadie'),0),'s3_cert':(wt('certeza'),0),'s3_teo':(wt('teoría'),.3),'s3_no':(wt('no',after=34),0),'s3_nues':(wt('nuestra'),.8),
's4_tranq':(wt('tranquilos'),0),'s4_camp':(wt('campamentos'),0),'s4_rest':(wt('restos',after=39),.3),'s4_mied':(wt('miedosos'),0),'s4_huian':(wt('huían'),.4),'s4_mans':(wt('mansos'),0),'s4_mejor':(wt('mejor'),0),'s4_cach':(wt('cachorros'),.4),
's5_gen':(wt('Generación'),0),'s5_gen2':(wt('generación',after=48),0),'s5_lobo':(wt('lobo',after=49),0),'s5_perro':(wt('perro',after=50),.8),
's6_gan':(wt('ganamos'),.4),'s6_pel':(wt('peligro'),.6),'s6_caz':(wt('cazar'),.5),'s6_cal':(wt('calor'),.3),'s6_hel':(wt('heladas'),0),
's7_yac':(wt('yacimiento'),0),'s7_tur':(wt('Turquía',after=60),.3),'s7_ent':(wt('enterrados'),.4),'s7_pes':(wt('pescado'),.3),'s7_pers':(wt('personas'),.4),'s7_herr':(wt('herramientas'),.6),'s7_fam':(wt('familia'),.6),
's8_hoy':(wt('Hoy'),0),'s8_sen':(wt('señalas'),0),'s8_dedo':(wt('dedo'),.3),'s8_chimp':(wt('chimpancés'),.3),'s8_bien':(wt('bien'),0),'s8_emo':(wt('emociones'),0),'s8_mir':(wt('mirarnos'),.4),
's9_mil':(wt('miles'),0),'s9_comp':(wt('compañero'),.4),'s9_el':(wt('él',after=82),0),'s9_nos':(wt('nosotros',after=83),1.0),
'c_cual':(wt('Cuál'),0),'c_perro':(wt('perro',after=85),.3),'c_com':(wt('Cuéntamelo'),.4),
}
TRS=[None,{'type':'dive','x':180,'y':320,'z':9,'dur':.5},{'type':'morph','a':[100,201,97,101,17],'col':'#141c30','dur':.55},{'type':'ink','x':180,'y':330,'col':'#dfeefc','dur':.4},
     {'type':'dive','x':180,'y':300,'z':9},{'type':'push','dir':'left'},{'type':'morph','a':[110,265,140,130,22],'col':'#ffb547','dur':.5},{'type':'push','dir':'up'},
     {'type':'iris','x':180,'y':300,'col':'#ff6b5a'},{'type':'dive','x':180,'y':280,'z':10},{'type':'morph','a':[139,312,30,30,15],'col':'#ffd27a'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
