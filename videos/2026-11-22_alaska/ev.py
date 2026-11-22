import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=81.43
T=[0,5.38,16.7,26.7,35.1,44.7,60.3,69.7,DUR]
RAW={
'h_1848':(wt('1848'),.7),'h_mex':(wt('México'),.4),'h_perdio':(wt('perdió'),.9),'h_mitad':(wt('mitad'),.9),'h_pas':(wt('pasó'),.5),
'a_1845':(wt('1845'),.7),'a_tx':(wt('Texas'),.9),'a_front':(wt('frontera'),.5),'a_nueces':(wt('Nueces'),.6),'a_bravo':(wt('Bravo'),.6),
'b_1846':(wt('1846'),.7),'b_polk':(wt('Polk'),.4),'b_tropas':(wt('tropas'),.6),'b_zona':(wt('disputada'),.5),'b_choque':(wt('choque'),.9),'b_cong':(wt('Congreso'),.4),'b_guerra':(wt('guerra',after=26),.9),
'c_ejer':(wt('ejército'),.4),'c_norte':(wt('norte'),.5),'c_mar':(wt('mar',after=29),.5),'c_sep':(wt('septiembre'),.6),'c_toma':(wt('toma'),.9),'c_cdmx':(wt('México',after=34),.5),
'd_trist':(wt('Trist'),.4),'d_paz':(wt('paz'),.5),'d_trat':(wt('tratado',after=38.9),.5),'d_2':(wt('2',after=40),.6),'d_gh':(wt('Guadalupe',after=43),.6),
'e_cede':(wt('cede'),.7),'e_mil':(wt('quinientas'),.5),'e_km':(wt('kilómetros'),.5),'e_hoy':(wt('Hoy',after=52),.3),'e_cal':(wt('California'),.5),'e_nev':(wt('Nevada'),.5),'e_utah':(wt('Utah'),.5),'e_ariz':(wt('Arizona'),.5),'e_nm':(wt('Nuevo'),.5),'e_55':(wt('55'),1.0),
'f_pago':(wt('pagó'),.4),'f_15':(wt('quince'),.9),'f_1853':(wt('1853'),.7),'f_mesilla':(wt('Mesilla'),.6),'f_diez':(wt('diez'),.9),
'g_unos':(wt('unos'),.5),'g_conq':(wt('conquista'),.8),'g_otros':(wt('otros'),.5),'g_trat':(wt('tratado',after=73),.5),'g_perder':(wt('perder'),.6),'g_piensas':(wt('piensas'),.6),'g_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':200,'y':330,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#2ecc71','dur':.6},
     {'type':'whip','dur':.34},{'type':'zoom','dur':.4},{'type':'morph','a':[70,96,220,30,8],'col':'#ff9f1c','dur':.6},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
