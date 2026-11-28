import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=75.0
T=[0,3.85,13.14,27.75,40.54,53.48,60.9,67.33,DUR]
RAW={
# S0 gancho
'h_hai':(wt('Haití'),.4),'h_gano':(wt('ganó'),.5),'h_lib':(wt('libertad'),.9),'h_fra':(wt('Francia'),.5),'h_fact':(wt('factura'),1.0),
# S1 1804
'a_mil':(wt('mil',after=3.5),.4),'a_cuatro':(wt('cuatro',after=4.5),.9),'a_esc':(wt('esclavizados'),.5),'a_fund':(wt('fundan'),.5),'a_prim':(wt('primer'),.6),'a_reb':(wt('rebelión'),.8),'a_esc2':(wt('esclavos',after=10),.6),'a_pero':(wt('Pero',after=10.5),.4),'a_casi':(wt('casi'),.4),'a_nadie':(wt('nadie'),.7),'a_rec':(wt('reconoce'),.9),
# S2 1825
'b_21':(wt('Veintiún'),.4),'b_1825':(wt('veinticinco',after=15.5),.9),'b_llega':(wt('llega'),.5),'b_flota':(wt('flota'),.6),'b_500':(wt('quinientos',after=18),.5),'b_can':(wt('cañones'),1.0),'b_rey':(wt('rey'),.4),'b_car':(wt('Carlos'),.6),'b_trato':(wt('trato'),.6),'b_rec':(wt('reconocer'),.4),'b_ind':(wt('independencia',after=23),.5),'b_150':(wt('ciento',after=25),.6),'b_mill':(wt('millones',after=26),.5),'b_fr':(wt('francos'),1.0),
# S3 quién cobra
'c_para':(wt('Para',after=27.5),.4),'c_quien':(wt('quién'),.6),'c_due':(wt('dueños'),.6),'c_plan':(wt('plantaciones'),.5),'c_perd':(wt('perdieron'),.8),'c_hai':(wt('Haití',after=33),.5),'c_din':(wt('dinero'),.7),'c_prest':(wt('préstamo'),.6),'c_ban':(wt('bancos'),.6),'c_deuda':(wt('deuda',after=38),.5),'c_otra':(wt('otra'),.5),'c_deuda2':(wt('deuda',after=39.5),1.0),
# S4 1838
'd_ocho':(wt('ocho',after=42),.5),'d_reb':(wt('rebajó'),.6),'d_90':(wt('noventa'),.8),'d_pero':(wt('pero',after=44.8),.4),'d_dec':(wt('décadas'),.6),'d_112':(wt('ciento',after=47.5),.6),'d_fr':(wt('francos',after=49),.5),'d_560':(wt('quinientos',after=50.5),.6),'d_dol':(wt('dólares'),.8),'d_hoy':(wt('hoy'),.6),
# S5 1947
'e_deuda':(wt('deuda',after=53.4),.5),'e_cerro':(wt('cerró'),.5),'e_1947':(wt('siete',after=56),1.0),'e_mas':(wt('más',after=57),.4),'e_140':(wt('cuarenta',after=58),.8),'e_ind':(wt('independencia',after=59.5),.6),
# S6 2025
'f_2025':(wt('veinticinco',after=61.4),.8),'f_mac':(wt('Macron'),.6),'f_inj':(wt('injusta'),.8),'f_hist':(wt('historia'),.5),'f_com':(wt('comisión'),.6),'f_hist2':(wt('historiadores'),.8),
# S7 debate
'g_ent':(wt('Entonces'),.3),'g_ext':(wt('extorsión'),.8),'g_o':(wt('o',after=69.4),.3),'g_paz':(wt('paz'),.8),'g_com':(wt('Comenta'),.5),'g_resp':(wt('respuesta'),.7),'g_sig':(wt('Sígueme'),.5),
}
TRS=[None,{'type':'flash','dur':.3},{'type':'dive','x':180,'y':320,'z':9,'dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ffc83d','dur':.6},
     {'type':'iris','x':180,'y':320,'col':'#5b8cff','dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ff4d6d','dur':.6},{'type':'push','dir':'left','dur':.45},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
