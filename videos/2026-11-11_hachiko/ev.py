import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=78.5333
T=[0,5.0,14.83,21.54,30.59,41.76,55.99,63.68,71.47,DUR]
RAW={
'h_casi':(wt('casi'),0),'h_diez':(wt('diez'),.6),'h_hombre':(wt('hombre'),0),'h_nunca':(wt('nunca'),.2),'h_volver':(wt('volver'),.3),
's1_nom':(wt('Hachikō',after=5),.4),'s1_akita':(wt('akita'),.3),'s1_nac':(wt('nacido'),0),'s1_1923':(wt('veintitrés'),.5),'s1_prof':(wt('profesor',after=11),0),'s1_ueno':(wt('Ueno'),.3),'s1_tokio':(wt('Tokio'),.3),
's2_man':(wt('mañana'),0),'s2_acomp':(wt('acompañaba'),0),'s2_shib':(wt('Shibuya',after=17),.3),'s2_tarde':(wt('tarde',after=19),0),'s2_esp':(wt('esperarlo'),.3),
's3_mayo':(wt('mayo'),.3),'s3_25':(wt('veinticinco'),.5),'s3_mur':(wt('murió',after=24),.9),'s3_esa':(wt('Esa'),0),'s3_tren':(wt('tren'),.4),'s3_el':(wt('él',after=29),0),'s3_bajo':(wt('bajó'),.9),
's4_sig':(wt('siguió'),0),'s4_poc':(wt('Pocos'),0),'s4_dia':(wt('día',after=35),0),'s4_sig2':(wt('siguiente',after=36.3),0),'s4_casi':(wt('Casi',after=37),0),'s4_nueve':(wt('nueve'),.5),'s4_meses':(wt('meses'),.5),
's5_dos':(wt('dos',after=43.3),0),'s5_per':(wt('periódico'),0),'s5_jap':(wt('Japón',after=46),.4),'s5_amor':(wt('enamoró'),0),'s5_cuatro':(wt('cuatro',after=50),.4),'s5_est':(wt('estatua',after=51.5),.5),'s5_estuvo':(wt('estuvo'),0),'s5_inau':(wt('inauguración'),.5),
's6_mur':(wt('Murió',after=55),.5),'s6_ocho':(wt('ocho',after=56),0),'s6_marzo':(wt('marzo'),0),'s6_cinco':(wt('cinco',after=59),.5),'s6_calle':(wt('calle'),0),'s6_once':(wt('once'),.6),
's7_est':(wt('estatua',after=63.5),0),'s7_fund':(wt('fundió'),.8),'s7_gue':(wt('guerra'),.5),'s7_48':(wt('ocho',after=68),.5),'s7_pus':(wt('pusieron'),.4),'s7_hoy':(wt('hoy'),0),
'c_era':(wt('Era',after=71),0),'c_leal':(wt('lealtad'),.3),'c_dejar':(wt('dejar'),0),'c_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':180,'y':284,'z':9,'dur':.5},{'type':'push','dir':'left'},{'type':'ink','x':180,'y':330,'col':'#ff7a50','dur':.45},
     {'type':'fog'},{'type':'morph','a':[90,200,180,150,18],'col':'#f4ead2','dur':.55},{'type':'dip','col':'#05081a'},
     {'type':'morph','a':[110,250,140,100,16],'col':'#ffd27a','dur':.55},{'type':'iris','x':180,'y':330,'col':'#ffd27a'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
