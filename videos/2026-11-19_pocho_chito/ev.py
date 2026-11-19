import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=85.53
T=[0,7.19,20.05,30.3,42.0,52.37,66.31,76.95,DUR]
RAW={
'h_disp':(wt('dispararon'),.3),'h_ojo':(wt('ojo'),.7),'h_morir':(wt('morir'),.3),'h_22':(wt('Veintidós'),.3),'h_pueblo':(wt('pueblo'),.2),'h_lloro':(wt('lloró'),.4),
's1_89':(wt('1989'),.3),'s1_pesc':(wt('pescador'),0),'s1_cr':(wt('Costa'),.2),'s1_croc':(wt('cocodrilo'),.3),'s1_mor':(wt('moribundo'),.3),'s1_rio':(wt('río'),0),'s1_gan':(wt('ganadero'),.2),'s1_disp':(wt('disparado'),.8),'s1_prob':(wt('probablemente'),0),'s1_vacas':(wt('vacas'),.2),
's2_casi':(wt('Casi',after=20),0),'s2_nadie':(wt('nadie'),.3),'s2_acerc':(wt('acercaría'),0),'s2_gil':(wt('Gilberto'),.2),'s2_chito':(wt('Chito',after=24),.5),'s2_si':(wt('sí',after=25),.4),'s2_ayuda':(wt('ayuda'),0),'s2_amigos':(wt('amigos'),.2),'s2_lancha':(wt('lancha'),.4),'s2_casa':(wt('casa',after=29),.3),
's3_pes':(wt('pesaba'),0),'s3_70':(wt('setenta'),.3),'s3_apenas':(wt('apenas'),0),'s3_comer':(wt('comer'),.3),'s3_chito':(wt('Chito',after=35),0),'s3_pesc':(wt('pescado',after=35),.2),'s3_pollo':(wt('pollo'),.2),'s3_sem':(wt('semana'),0),'s3_her':(wt('herida'),.3),'s3_dormia':(wt('dormía'),.2),'s3_lado':(wt('lado'),0),'s3_pocho':(wt('Pocho',after=40.5),.9),
's4_pocho':(wt('Pocho',after=42),0),'s4_curo':(wt('curó'),.2),'s4_nunca':(wt('nunca',after=43),.3),'s4_fue':(wt('fue',after=43.5),.6),'s4_anos':(wt('años',after=44),0),'s4_nadar':(wt('nadar'),.2),'s4_imp':(wt('imposible'),.8),'s4_meter':(wt('meter'),.3),'s4_boca':(wt('boca'),.6),
's5_ano':(wt('año',after=52),0),'s5_2000':(wt('2000'),.4),'s5_tv':(wt('televisión'),.3),'s5_grabo':(wt('grabó'),.4),'s5_fam':(wt('famosos'),.8),'s5_cada':(wt('Cada',after=56),0),'s5_dom':(wt('domingo'),.3),'s5_gente':(wt('gente'),.2),'s5_partes':(wt('partes'),0),'s5_pocho':(wt('Pocho',after=60),.3),'s5_media':(wt('media'),.3),'s5_ton':(wt('tonelada'),.6),'s5_20':(wt('veinte'),.3),'s5_nunca':(wt('nunca',after=64),.3),'s5_dano':(wt('daño'),.8),
's6_12':(wt('12'),.3),'s6_oct':(wt('octubre'),0),'s6_2011':(wt('2011'),.5),'s6_murio':(wt('murió'),1.0),'s6_nat':(wt('natural'),.3),'s6_todo':(wt('Todo',after=71),0),'s6_fun':(wt('funeral'),.4),'s6_chito':(wt('Chito',after=73),0),'s6_dijo':(wt('dijo'),.2),'s6_pocho':(wt('Pocho',after=74.5),.3),'s6_unico':(wt('único'),.8),
'c_fue':(wt('Fue'),0),'c_amistad':(wt('amistad'),.4),'c_verdad':(wt('verdad'),0),'c_solo':(wt('solo',after=78),0),'c_croc':(wt('cocodrilo',after=79),0),'c_acost':(wt('acostumbró'),.4),'c_comida':(wt('comida'),.4),'c_com':(wt('Comenta'),0),'c_resp':(wt('respuesta'),0),'c_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'whip'},{'type':'push','dir':'left'},
     {'type':'morph','a':[150,300,60,60,30],'col':'#14543a','dur':.55},{'type':'flash'},{'type':'dive','x':180,'y':335,'z':9,'dur':.5},
     {'type':'ink','x':180,'y':330,'col':'#041a12','dur':.45},{'type':'morph','a':[110,380,140,90,14],'col':'#0b2b3a','dur':.55}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
