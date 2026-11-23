import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=78.9
T=[0,5.43,13.45,21.15,26.72,38.40,48.64,60.90,70.0,DUR]
T=[0,5.43,13.45,21.15,26.72,38.40,48.64,60.90,70.0,DUR]
RAW={
'h_col':(wt('Colombia'),.3),'h_sac':(wt('sacrificar'),.5),'h_hip':(wt('hipopótamos'),.9),'h_cuatro':(wt('cuatro'),1.0),
'a_1981':(wt('uno',after=6),.6),'a_esc':(wt('Escobar'),.4),'a_macho':(wt('macho'),.4),'a_tres':(wt('tres',after=9),.4),'a_zoo':(wt('zoológico'),.4),'a_nap':(wt('Nápoles'),.6),
'b_murio':(wt('murió'),.8),'b_1993':(wt('tres',after=16),.8),'b_quedaron':(wt('quedaron'),.4),'b_dificil':(wt('difícil'),.7),
'c_sin':(wt('depredadores'),.4),'c_seca':(wt('seca'),.5),'c_escap':(wt('escaparon'),.7),'c_mag':(wt('Magdalena'),.4),'c_mult':(wt('multiplicaron'),.9),
'd_2009':(wt('nueve'),.7),'d_28':(wt('veintiocho'),.7),'d_pepe':(wt('Pepe'),.8),'d_prot':(wt('protestas'),.5),'d_juez':(wt('juez'),.5),'d_prohi':(wt('prohibió'),.9),
'e_hoy':(wt('Hoy'),.4),'e_250':(wt('cincuenta'),.9),'e_km':(wt('kilómetros'),.4),'e_sin':(wt('control',after=44),.4),'e_mil':(wt('mil',after=46),.7),'e_2035':(wt('cinco',after=47),.9),
'f_2022':(wt('veintidós'),.6),'f_inv':(wt('invasora'),.9),'f_agua':(wt('agua'),.4),'f_mana':(wt('manatí'),.5),'f_her':(wt('heridas'),.6),'f_23':(wt('veintitrés'),.7),'f_esc':(wt('escuela'),.4),
'g_siete':(wt('siete'),.6),'g_nin':(wt('ninguno'),.9),'g_nov':(wt('noviembre'),.5),'g_sac':(wt('sacrificará'),.6),'g_diez':(wt('diez'),1.0),
'i_hay':(wt('Hay',after=69.9),.3),'i_sac':(wt('sacrificarlos'),.5),'i_salv':(wt('salvarlos'),.6),'i_com':(wt('Comenta'),.4),'i_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'whip','dur':.4},{'type':'morph','a':[70,452,220,36,12],'col':'#2a8f6e','dur':.55},{'type':'push','dir':'left','dur':.45},
 {'type':'ink','x':180,'y':320,'col':'#0a3b3a','dur':.45},{'type':'dive','x':180,'y':320,'z':9,'dur':.55},{'type':'flash','dur':.4},
 {'type':'iris','x':180,'y':320,'col':'#0a1c28','dur':.5},{'type':'push','dir':'up','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
