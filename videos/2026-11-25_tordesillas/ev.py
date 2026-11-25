import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=83.1333
T=[0,8.37,16.75,27.32,39.04,47.95,55.27,68.85,DUR]
RAW={
'h_dos':(wt('dos'),.4),'h_raya':(wt('raya'),.8),'h_oceano':(wt('océano'),.5),'h_rep':(wt('repartieron'),.7),'h_mundo':(wt('mundo'),.9),'h_quien':(wt('Quién'),.5),'h_derecho':(wt('derecho'),1.0),
'a_colon':(wt('Colón'),.5),'a_am':(wt('América'),.6),'a_band':(wt('bandera'),.5),'a_esp':(wt('España'),.6),'a_port':(wt('Portugal',after=8),.6),'a_afr':(wt('África'),.5),'a_fuera':(wt('fuera'),.9),
'b_papa':(wt('papa'),.5),'b_alej':(wt('Alejandro'),.6),'b_espn':(wt('español'),.5),'b_trazo':(wt('trazó'),.6),'b_1493':(wt('tres',after=21),.6),'b_linea':(wt('línea'),.7),'b_cien':(wt('cien'),.5),'b_leguas':(wt('leguas'),.5),'b_cabo':(wt('Cabo'),.6),
'c_prot':(wt('protestó'),.9),'c_siete':(wt('siete'),.5),'c_1494':(wt('cuatro',after=31),.7),'c_tord':(wt('Tordesillas'),.8),'c_raya':(wt('raya',after=33),.5),'c_movio':(wt('movió'),.9),'c_370':(wt('trescientas'),.6),'c_leguas':(wt('leguas',after=36),.5),'c_verde':(wt('Verde',after=38),.4),
'd_lado':(wt('lado',after=39),.4),'d_port':(wt('Portugal',after=40),.7),'d_otro':(wt('otro'),.4),'d_esp':(wt('España',after=42),.7),'d_nadie':(wt('nadie'),.5),'d_medir':(wt('medir'),.5),'d_long':(wt('longitud'),.7),'d_aprox':(wt('aproximada'),.8),
'e_justo':(wt('justo'),.4),'e_pedazo':(wt('pedazo'),.5),'e_sud':(wt('Sudamérica'),.7),'e_quedo':(wt('quedó'),.5),'e_port':(wt('portugués'),.8),'e_eso':(wt('eso',after=52),.4),'e_brasil':(wt('Brasil'),.8),'e_habla':(wt('habla'),.4),'e_port2':(wt('portugués',after=54),.8),
'f_lado':(wt('mundo',after=55),.5),'f_prob':(wt('problema'),.6),'f_volvio':(wt('volvió'),.7),'f_1529':(wt('veintinueve'),.8),'f_zar':(wt('Zaragoza'),.8),'f_linea':(wt('línea',after=62),.7),'f_pago':(wt('pagó'),.6),'f_350':(wt('cincuenta'),.7),'f_ducados':(wt('ducados'),.9),'f_islas':(wt('islas',after=67),.5),'f_esp':(wt('Especias'),.8),
'g_reinos':(wt('reinos'),.5),'g_pueblos':(wt('pueblos'),.6),'g_existian':(wt('existían'),.7),'g_practico':(wt('práctico'),.6),'g_guerras':(wt('guerras'),.5),'g_absurdo':(wt('absurdo'),.8),'g_piensas':(wt('piensas'),.6),'g_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':180,'y':320,'z':9,'dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ffd166','dur':.6},{'type':'push','dir':'left','dur':.45},
     {'type':'iris','x':180,'y':320,'col':'#2ec27e','dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ff5a4e','dur':.6},{'type':'whip','dur':.34},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
