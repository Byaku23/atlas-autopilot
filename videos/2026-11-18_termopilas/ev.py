import sys; sys.path.insert(0,'../eng')
from words import *
DUR=88.33
T=[0,5.84,13.49,23.38,35.13,41.65,48.1,55.1,67.02,77.07,DUR]
RAW={
's0_300':(wt('trescientos'),.6),'s0_imp':(wt('imperio'),.3),'s0_no':(wt('no',after=4),.8),'s0_paso':(wt('pasó'),1.0),
's1_480':(wt('cuatrocientos'),.6),'s1_jer':(wt('Jerjes'),.3),'s1_gig':(wt('gigante'),.8),
's2_her':(wt('Heródoto'),0),'s2_dos':(wt('dos',after=14),.8),'s2_hoy':(wt('Hoy'),.5),'s2_menos':(wt('menos'),0),'s2_80':(wt('ochenta',after=20),.4),'s2_300':(wt('trescientos',after=22),.5),
's3_paso':(wt('paso',after=23),.3),'s3_mar':(wt('mar'),0),'s3_leo':(wt('Leónidas',after=27),.3),'s3_no':(wt('no',after=28.4),.4),'s3_300':(wt('trescientos',after=29),0),'s3_7':(wt('siete'),.8),'s3_gua':(wt('guardia'),.4),
's4_ent':(wt('Entre',after=35),0),'s4_700':(wt('setecientos',after=35),.6),'s4_tes':(wt('Tespias'),.3),'s4_nadie':(wt('nadie',after=40),.4),
's5_tres':(wt('tres',after=42),.5),'s5_dias':(wt('días'),0),'s5_ven':(wt('ventaja'),.3),'s5_per':(wt('persas',after=45),0),'s5_cai':(wt('caían'),.6),
's6_pas':(wt('pastor'),0),'s6_efi':(wt('Efialtes'),.4),'s6_sen':(wt('sendero'),0),'s6_rod':(wt('rodearlos'),.8),
's7_ord':(wt('ordenó'),0),'s7_ret':(wt('retirarse'),.3),'s7_todos':(wt('todos',after=57),0),'s7_esp':(wt('espartanos',after=59),0),'s7_tes':(wt('tespios',after=61),0),'s7_mur':(wt('Murieron'),.8),'s7_cla':(wt('clavar'),.5),'s7_pos':(wt('poste'),1.0),
's8_pero':(wt('Pero',after=67),0),'s8_tiempo':(wt('tiempo',after=67),0),'s8_vano':(wt('vano'),.4),'s8_flota':(wt('flota'),.3),'s8_sal':(wt('Salamina'),.8),'s8_ano':(wt('año',after=72),0),'s8_plat':(wt('Platea'),.8),'s8_venc':(wt('vencieron'),.5),'s8_jer':(wt('Jerjes',after=76),.3),
'c_quien':(wt('quién'),0),'c_300':(wt('trescientos',after=79),0),'c_700':(wt('setecientos',after=81),0),'c_nadie':(wt('nadie',after=83),.3),'c_com':(wt('Comenta'),.4),'c_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'iris','x':180,'y':330,'col':'#d2432f','dur':.45},{'type':'morph','a':[120,400,120,70,14],'col':'#d2432f','dur':.55},{'type':'push','dir':'left'},
     {'type':'dive','x':180,'y':330,'z':9,'dur':.5},{'type':'ink','x':250,'y':450,'col':'#e8c98a','dur':.45},{'type':'morph','a':[240,370,70,60,30],'col':'#f2b84b','dur':.5},
     {'type':'push','dir':'up'},{'type':'dive','x':180,'y':340,'z':8,'dur':.5},{'type':'iris','x':180,'y':300,'col':'#f2b84b','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
