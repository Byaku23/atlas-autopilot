import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=62.9
T=[0,6.51,15.05,21.17,27.07,32.98,37.81,44.03,48.06,53.08,DUR]
RAW={
's_dos':(wt('dos',after=1.9),.8),'s_gf':(wt('Guerra'),.9),'s_mapa':(wt('mapa'),.3),
'a_doce':(wt('Doce'),.7),'a_eeuu':(wt('Unidos'),.3),'a_prom':(wt('promete'),.3),'a_res':(wt('resistan'),.4),'a_com':(wt('comunismo'),.7),
'b_jun':(wt('Junio'),.6),'b_urss':(wt('Soviética'),.3),'b_blo':(wt('bloquea'),.8),'b_occ':(wt('Occidental'),.3),
'n_4':(wt('Cuatro'),.7),'n_nace':(wt('nace'),.5),'n_otan':(wt('OTAN'),.6),'n_oes':(wt('oeste'),.3),
'w_14':(wt('Catorce'),.7),'w_este':(wt('este',after=30),.3),'w_resp':(wt('responde'),.4),'w_pacto':(wt('Pacto'),.8),'w_var':(wt('Varsovia'),.5),
'm_13':(wt('Trece'),.7),'m_ber':(wt('Berlín',after=35),.3),'m_parte':(wt('parte'),.4),'m_muro':(wt('muro',after=37),.9),
'c_oct':(wt('Octubre'),.6),'c_mis':(wt('misiles'),.7),'c_cuba':(wt('Cuba'),.4),'c_mundo':(wt('mundo',after=42),.3),'c_ali':(wt('aliento'),.5),
'f_9':(wt('Nueve',after=43),.6),'f_muro':(wt('muro',after=47),.3),'f_cae':(wt('cae'),1.0),
'u_dic':(wt('diciembre'),.5),'u_urss':(wt('Soviética',after=51),.3),'u_des':(wt('desaparece'),.9),'u_mapa':(wt('mapa',after=52),.4),
'z_dos':(wt('Dos',after=53),.5),'z_blo':(wt('bloques'),.3),'z_muro':(wt('muro',after=54),.3),'z_miedo':(wt('miedo'),.5),
'z_quien':(wt('quién'),.3),'z_gano':(wt('ganó'),.4),'z_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':155,'y':292,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[70,96,220,30,8],'col':'#2f7bff','dur':.6},
     {'type':'morph','a':[70,96,220,30,8],'col':'#ff3d3d','dur':.6},{'type':'zoom','dur':.4},{'type':'whip','dur':.34},{'type':'glitch','dur':.34},
     {'type':'flash','dur':.34},{'type':'iris','x':180,'y':300,'col':'#10182b','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
