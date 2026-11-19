import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=69.73
T=[0,5.88,13.88,19.02,22.73,27.31,34.03,42.50,52.30,55.41,DUR]
RAW={
'h_cinco':(wt('cinco'),.5),'h_barcos':(wt('barcos'),.3),'h_uno':(wt('uno'),.9),'h_logro':(wt('logró'),.6),'h_mapa':(wt('mapa'),.3),
'a_20':(wt('Veinte'),.7),'a_flota':(wt('flota'),.3),'a_magal':(wt('Magallanes',after=9),.3),'a_zarpa':(wt('zarpa'),.6),'a_sanl':(wt('Sanlúcar',after=11),.3),'a_esp':(wt('España',after=13),.4),
'b_buscan':(wt('Buscan'),.4),'b_esp':(wt('especias'),.7),'b_oeste':(wt('oeste',after=17),.5),
'c_cruzan':(wt('Cruzan'),.4),'c_atl':(wt('Atlántico'),.4),'c_bajan':(wt('bajan'),.3),'c_sur':(wt('Sur'),.3),
'd_alli':(wt('Allí'),.3),'d_nau':(wt('naufraga'),.9),'d_media':(wt('media'),.5),'d_regresa':(wt('regresa'),.4),
'e_pasan':(wt('Pasan'),.4),'e_estr':(wt('estrecho'),.5),'e_mag':(wt('Magallanes',after=29),.3),'e_oce':(wt('océano'),.4),'e_pac':(wt('Pacífico'),.7),
'f_27':(wt('Veintisiete'),.7),'f_fil':(wt('Filipinas'),.4),'f_muere':(wt('muere'),1.0),'f_50':(wt('cincuenta'),.4),'f_mil':(wt('mil',after=41),.7),
'g_juan':(wt('Juan',after=42),.5),'g_elcano':(wt('Elcano',after=43),.3),'g_mando':(wt('mando'),.4),'g_vict':(wt('Victoria'),.5),'g_ind':(wt('Índico'),.3),'g_afr':(wt('África'),.3),'g_llega':(wt('llega'),.4),'g_sanl':(wt('Sanlúcar',after=48),.7),'g_6':(wt('seis'),.5),
'h2_200':(wt('doscientos'),.5),'h2_18':(wt('dieciocho'),1.0),'h2_vuel':(wt('vuelven'),.4),
'z_mag':(wt('Magallanes',after=55),.4),'z_abrio':(wt('abrió'),.4),'z_murio':(wt('murió'),.8),'z_term':(wt('terminarlo'),.3),'z_elc':(wt('Elcano',after=59),.5),'z_termino':(wt('terminó'),.9),
'z_quien':(wt('quién',after=61),.3),'z_merece':(wt('merece'),.3),'z_prim':(wt('primero'),.4),'z_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':200,'y':286,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#ff8a3d','dur':.6},
     {'type':'whip','dur':.34},{'type':'zoom','dur':.4},{'type':'ink','x':180,'y':320,'col':'#06121c','dur':.5},{'type':'flash','dur':.34},
     {'type':'morph','a':[70,96,220,30,8],'col':'#2ee6c9','dur':.6},{'type':'iris','x':180,'y':300,'col':'#0b1220','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
