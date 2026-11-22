import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=83.53
T=[0,5.05,14.25,23.0,35.0,41.95,54.4,61.1,71.45,DUR]
RAW={
'h_rusia':(wt('Rusia'),.4),'h_menos':(wt('menos'),.5),'h_centavos':(wt('centavos'),.9),'h_hizo':(wt('hizo'),.8),
'a_prim':(wt('Primero'),.5),'a_dificil':(wt('difícil'),.5),'a_400':(wt('cuatrocientos'),.8),'a_pieles':(wt('pieles'),.5),'a_hundio':(wt('hundió'),.9),
'b_crimea':(wt('Crimea'),.6),'b_gb':(wt('Bretaña'),.4),'b_fr':(wt('Francia'),.4),'b_tu':(wt('Turquía'),.4),'b_perdio':(wt('perdió'),.9),'b_1856':(wt('seis'),.7),
'c_enemiga':(wt('enemiga'),.5),'c_canada':(wt('Canadá'),.7),'c_lado':(wt('lado'),.4),'c_dinero':(wt('dinero'),.6),'c_vender':(wt('vender'),.5),'c_eeuu':(wt('Unidos'),.6),'c_brit':(wt('británicos'),.5),
'd_sec':(wt('secretario'),.4),'d_seward':(wt('Seward'),.6),'d_acepto':(wt('aceptó'),.5),'d_oferta':(wt('oferta'),.5),'d_stoeckl':(wt('Stoeckl'),.6),
'e_trat':(wt('tratado'),.5),'e_30':(wt('treinta'),.8),'e_1867':(wt('siete'),.7),'e_sen':(wt('Senado'),.5),'e_9':(wt('nueve'),.8),'e_18':(wt('dieciocho'),.8),'e_usa':(wt('estadounidense'),1.0),
'f_siete':(wt('Siete',after=54),.5),'f_dol':(wt('dólares'),.8),'f_km':(wt('kilómetros'),.6),
'g_locura':(wt('locura'),.6),'g_nevera':(wt('nevera'),.6),'g_1896':(wt('noventa'),.7),'g_klon':(wt('Klondike'),.9),'g_crit':(wt('críticos'),.5),
'h2_unos':(wt('unos',after=71),.5),'h2_ganga':(wt('ganga'),.7),'h2_otros':(wt('otros'),.5),'h2_vendio':(wt('vendió',after=77),.6),'h2_piensas':(wt('piensas'),.6),'h2_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':218,'y':262,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#ff4d5e','dur':.6},
     {'type':'whip','dur':.34},{'type':'iris','x':180,'y':320,'col':'#4da3ff','dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#4da3ff','dur':.6},{'type':'zoom','dur':.4},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
