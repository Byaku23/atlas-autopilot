import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=65.333333
T=[0,6.13,11.62,20.35,26.87,37.47,47.31,54.74,DUR]
RAW={
's_inv':(wt('invasión'),.5),'s_dos':(wt('dos',after=3),.9),'s_mapa':(wt('mapa'),.3),
'a_mar':(wt('Marzo'),.3),'a_ocho':(wt('ocho',after=6),.7),'a_ale':(wt('Alemania',after=8),0),'a_aus':(wt('Austria'),.4),'a_que':(wt('queda'),.8),
'm_sep':(wt('Septiembre'),.3),'m_mun':(wt('Múnich',after=14),.4),'m_rei':(wt('Reino',after=15),.3),'m_fra':(wt('Francia',after=16),.3),'m_ent':(wt('entregan'),.7),'m_sud':(wt('Sudetes'),.5),'m_che':(wt('Checoslovaquia',after=19),.3),
'c_mar':(wt('Marzo',after=20),.3),'c_nue':(wt('nueve',after=21),.7),'c_res':(wt('resto'),.6),'c_che':(wt('Checoslovaquia',after=24),.3),'c_des':(wt('desaparece'),.8),'c_map':(wt('mapa',after=26),.3),
'p_23':(wt('Veintitrés'),.7),'p_ago':(wt('agosto'),0),'p_ale':(wt('Alemania',after=30),.3),'p_sov':(wt('Soviética'),.4),'p_pac':(wt('pacto'),.6),'p_pro':(wt('protocolo'),.3),'p_sec':(wt('secreto'),.4),'p_rep':(wt('reparte'),.6),'p_pol':(wt('Polonia',after=35),.3),'p_dos':(wt('dos',after=36),.3),
'i_1':(wt('Primero'),.8),'i_inv':(wt('invade'),.8),'i_dia':(wt('días'),.3),'i_rei':(wt('Reino',after=42),.3),'i_fra':(wt('Francia',after=43),.3),'i_gue':(wt('declaran'),.7),'i_mun':(wt('mundial',after=46),.9),
'r_17':(wt('diecisiete'),.7),'r_sov':(wt('soviéticos'),.4),'r_cru':(wt('cruzan'),.5),'r_est':(wt('este'),.3),'r_pol':(wt('Polonia',after=51),.3),'r_apl':(wt('aplastada'),.9),'r_eje':(wt('ejércitos'),.3),
'f_cad':(wt('Cada'),.3),'f_pas':(wt('paso'),.3),'f_gra':(wt('grande'),.4),'f_ant':(wt('anterior'),.6),'f_ent':(wt('Entonces'),.3),'f_mun':(wt('Múnich',after=58),.3),'f_tar':(wt('tarde'),.4),'f_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':90,'y':429,'z':9,'dur':.5},{'type':'push','dir':'left','dur':.45},{'type':'morph','a':[60,240,240,120,16],'col':'#9b6fd0','dur':.6},
     {'type':'iris','x':180,'y':300,'col':'#2f2319','dur':.45},{'type':'morph','a':[60,250,240,100,16],'col':'#f6ecd2','dur':.6},{'type':'flash','dur':.34},{'type':'whip','dur':.34}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
