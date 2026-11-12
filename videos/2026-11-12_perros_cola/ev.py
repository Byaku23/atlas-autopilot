import sys; sys.path.insert(0,'../eng')
from words import *
DUR=71.5333
T=[0,7.32,13.82,19.58,24.06,31.57,42.65,53.91,63.57,DUR]
RAW={
'h_feliz':(wt('feliz'),.4),'h_cien':(wt('ciencia'),0),'h_mir':(wt('mirando'),0),'h_lado':(wt('lado'),.5),
's1_siete':(wt('siete'),.5),'s1_ita':(wt('Italia'),.3),'s1_grabo':(wt('grabó'),.7),'s1_dist':(wt('distintas'),.2),
's2_cuando':(wt('Cuando'),0),'s2_dueno':(wt('dueño'),.3),'s2_acerc':(wt('acercarse'),0),'s2_mov':(wt('movían'),0),'s2_der':(wt('derecha'),.8),
's3_grande':(wt('grande'),.5),'s3_desc':(wt('desconocido'),.3),'s3_izq':(wt('izquierda'),.8),
's4_min':(wt('mínima'),.3),'s4_imp':(wt('imposible'),.4),'s4_simple':(wt('simple'),0),'s4_solo':(wt('Solo'),0),'s4_anal':(wt('analizar'),.3),'s4_vid':(wt('videos'),.4),
's5_lobos':(wt('lobos'),.2),'s5_zor':(wt('zorros',after=34),0),'s5_no':(wt('no',after=35.5),0),'s5_per':(wt('perros',after=37),.3),'s5_si':(wt('sí'),.7),'s5_cre':(wt('creen'),0),'s5_dom':(wt('domesticación'),.8),
's6_pista':(wt('pista'),.3),'s6_exp':(wt('experimento'),0),'s6_plat':(wt('plateados'),.4),'s6_crian':(wt('criados'),0),'s6_gen':(wt('generaciones'),.5),'s6_dom':(wt('domesticados'),.5),'s6_mov':(wt('movían',after=51),.6),'s6_salv':(wt('salvajes',after=52),0),
's7_pas':(wt('pasó'),.7),'s7_nadie':(wt('Nadie'),0),'s7_cert':(wt('certeza'),.3),'s7_teo':(wt('teoría'),.3),'s7_hum':(wt('humanos'),0),'s7_elig':(wt('eligiendo'),.2),'s7_perr':(wt('perros',after=61.5),0),'s7_mov':(wt('movían',after=62.5),.8),
'c_asi':(wt('Así'),0),'c_ti':(wt('ti'),.3),'c_plato':(wt('plato'),.4),'c_com':(wt('Comenta'),.5),'c_sig':(wt('Sígueme'),.3),
}
TRS=[None,{'type':'ink','x':180,'y':330,'col':'#5ce1c6','dur':.45},{'type':'push','dir':'left'},{'type':'whip'},
     {'type':'morph','a':[40,92,280,52,26],'col':'#ff7a59','dur':.55},{'type':'dive','x':180,'y':300,'z':9,'dur':.5},
     {'type':'flash'},{'type':'morph','a':[205,452,130,34,17],'col':'#5ce1c6','dur':.55},{'type':'iris','x':180,'y':300,'col':'#ffd166'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
