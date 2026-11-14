import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=71.5
T=[0,5.15,10.89,23.44,27.12,36.38,46.55,60.10,DUR]
RAW={
'h_cuarta':(wt('cuarta'),.4),'h_plan':(wt('planeta'),0),
'g_gran':(wt('grande',after=5),.3),'g_mismo':(wt('mismo'),.6),'g_pod':(wt('poderoso',after=6.5),.4),'g_cual':(wt('cuál'),0),'g_pod2':(wt('poderoso',after=9.5),.3),
'b_brit':(wt('británico'),.4),'b_20':(wt('veinte',after=13),.5),'b_tre':(wt('treinta'),.3),'b_col':(wt('Colonias'),.4),'b_uni':(wt('unidas'),0),'b_bar':(wt('barcos'),.4),
'i_27':(wt('veintisiete'),.5),'i_india':(wt('India'),0),'i_ind':(wt('independizó'),.9),
'm_mon':(wt('mongol'),.4),'m_20':(wt('veinte',after=29),.3),'m_seg':(wt('seguida'),0),'m_cont':(wt('continuo'),.5),
'd_mur':(wt('murió'),.6),'d_mong':(wt('Mongke'),0),'d_1259':(wt('nueve',after=39.5),.5),'d_gue':(wt('guerra',after=41),1.0),'d_60':(wt('sesenta'),.5),'d_4':(wt('cuatro'),.8),
'r_roma':(wt('Roma',after=46),.5),'r_5':(wt('cinco',after=48),.3),'r_117':(wt('diecisiete'),.6),'r_casi':(wt('Casi',after=53),0),'r_vec':(wt('veces'),.4),'r_mant':(wt('mantuvo'),0),'r_occ':(wt('Occidente'),0),'r_500':(wt('quinientos'),.7),
'c_dep':(wt('depende'),0),'c_ocu':(wt('ocupó'),.4),'c_blo':(wt('bloque'),.4),'c_duro':(wt('duró'),.4),'c_com':(wt('Comenta'),.4),
}
TRS=[None,
 {'type':'push','dir':'left','dur':.45},
 {'type':'morph','a':[70,455,220,90,20],'col':'#ff6b4a','dur':.55},
 {'type':'iris','x':271,'y':310,'col':'#ff6b4a','dur':.5},
 {'type':'dive','x':180,'y':320,'z':9,'dur':.55},
 {'type':'glitch','dur':.3},
 {'type':'morph','a':[80,465,200,70,16],'col':'#b57bff','dur':.55},
 {'type':'ink','x':180,'y':380,'col':'#b57bff','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
