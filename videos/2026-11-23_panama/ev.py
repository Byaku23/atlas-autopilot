import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=78.97
T=[0,8.94,19.25,27.70,35.86,42.93,57.08,66.10,DUR]
RAW={
'h_pais':(wt('país'),.4),'h_1903':(wt('tres'),.7),'h_barco':(wt('barco'),.8),'h_porque':(wt('Por'),.5),'h_pan':(wt('Panamá'),.7),'h_col':(wt('Colombia'),.9),
'a_bogota':(wt('Bogotá'),.5),'a_selva':(wt('selva'),.6),'a_fr':(wt('Francia'),.5),'a_canal':(wt('canal'),.5),'a_20':(wt('veinte'),.6),'a_muertos':(wt('muertos'),.9),'a_eeuu':(wt('Estados',after=17),.6),'a_quiso':(wt('terminarlo'),.7),
'b_trat':(wt('tratado'),.6),'b_sen':(wt('Senado'),.5),'b_rech':(wt('rechazó'),1.0),'b_ago':(wt('agosto'),.7),'b_din':(wt('dinero'),.5),'b_poco':(wt('poco'),.6),'b_ced':(wt('cedía'),.5),'b_ctrl':(wt('control'),.8),
'c_ent':(wt('Entonces'),.3),'c_roos':(wt('Roosevelt'),.6),'c_apoyo':(wt('apoyó'),.6),'c_reb':(wt('rebeldes'),.5),'c_tres':(wt('tres',after=32),.6),'c_indep':(wt('independencia'),1.0),
'd_fc':(wt('ferrocarril'),.5),'d_var':(wt('varadas'),.6),'d_colon':(wt('Colón'),.4),'d_trop':(wt('tropas'),.5),'d_nash':(wt('Nashville'),.9),'d_costa':(wt('costa',after=42),.4),
'e_tres':(wt('Tres',after=42),.5),'e_rec':(wt('reconoció'),.9),'e_15':(wt('Quince'),.6),'e_firmo':(wt('firmó',after=48),.8),'e_diez':(wt('diez'),.6),'e_dol':(wt('dólares'),.9),'e_neg':(wt('negociaba'),.4),'e_ing':(wt('ingeniero'),.5),'e_fr':(wt('francés'),.8),
'f_canal':(wt('canal',after=57),.5),'f_1914':(wt('catorce'),.9),'f_pan':(wt('Panamá',after=60),.5),'f_rec':(wt('recibió'),.5),'f_31':(wt('treinta'),.8),'f_dic':(wt('diciembre'),.6),'f_1999':(wt('nueve',after=65),1.0),
'g_unos':(wt('unos',after=66),.5),'g_pueblo':(wt('pueblo'),.5),'g_otros':(wt('otros'),.5),'g_jugada':(wt('jugada'),.6),'g_piensas':(wt('piensas'),.6),'g_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':180,'y':320,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#ff4d8d','dur':.6},
     {'type':'whip','dur':.34},{'type':'iris','x':180,'y':320,'col':'#4da3ff','dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ffd166','dur':.6},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
