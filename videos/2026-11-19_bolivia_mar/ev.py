import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=75.87
T=[0,5.38,13.01,17.09,27.44,33.6,41.62,46.93,52.37,60.11,65.99,DUR]
RAW={
'h_bol':(wt('Bolivia'),.4),'h_mar':(wt('mar'),.9),'h_hoy':(wt('hoy'),.3),'h_costa':(wt('costa'),.8),'h_paso':(wt('pasó'),.5),'h_mapa':(wt('mapa'),.3),
'a_1825':(wt('veinticinco'),.7),'a_nace':(wt('nace'),.4),'a_400':(wt('cuatrocientos'),.8),'a_km':(wt('kilómetros'),.3),'a_pac':(wt('Pacífico'),.6),
'b_sal':(wt('salitre'),.8),'b_min':(wt('mineral'),.3),'b_oro':(wt('oro'),.9),
'c_1879':(wt('nueve',after=17),.6),'c_guerra':(wt('Guerra'),.6),'c_chile':(wt('Chile',after=21),.5),'c_bol':(wt('Bolivia',after=22),.4),'c_peru':(wt('Perú'),.4),'c_ocupa':(wt('ocupa'),.9),'c_nunca':(wt('nunca',after=26),.5),
'd_1884':(wt('cuatro',after=28),.6),'d_tregua':(wt('tregua'),.4),'d_sigue':(wt('sigue'),.4),'d_lit':(wt('litoral'),.8),
'e_1904':(wt('cuatro',after=34),.7),'e_trat':(wt('tratado',after=35.9),.5),'e_recon':(wt('reconoce'),.4),'e_chile':(wt('Chile',after=40),.9),'e_siempre':(wt('siempre'),1.0),
'f_cambio':(wt('cambio'),.4),'f_ferro':(wt('ferrocarril'),.5),'f_arica':(wt('Arica'),.5),'f_libre':(wt('libre'),.4),'f_puertos':(wt('puertos'),.4),
'g_pero':(wt('Pero',after=46),.4),'g_recl':(wt('reclamar'),.9),'g_2013':(wt('trece'),.6),'g_haya':(wt('Haya'),.7),
'h_2018':(wt('dieciocho'),.7),'h_corte':(wt('Corte'),.4),'h_no':(wt('no',after=56.5),.5),'h_oblig':(wt('obligación'),.9),'h_mar':(wt('mar',after=59),.6),
'i_chile':(wt('Chile',after=60),.4),'i_resp':(wt('respetarlo'),.6),'i_bol':(wt('Bolivia',after=63),.4),'i_der':(wt('derecho'),.8),
'j_ent':(wt('Entonces'),.3),'j_100':(wt('cien'),.5),'j_sie':(wt('siempre',after=70),.6),'j_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':155,'y':345,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#ffd166','dur':.6},
     {'type':'whip','dur':.34},{'type':'ink','x':180,'y':320,'col':'#06121c','dur':.5},{'type':'zoom','dur':.4},{'type':'flash','dur':.34},
     {'type':'morph','a':[70,96,220,30,8],'col':'#4da3ff','dur':.6},{'type':'iris','x':180,'y':300,'col':'#0b1220','dur':.4},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
