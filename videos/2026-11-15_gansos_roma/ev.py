import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=89.7667
T=[0,6.85,13.6,25.95,37.25,41.9,54.89,60.1,72.29,79.13,DUR]
RAW={
'h_roma':(wt('Roma'),.3),'h_390':(wt('390'),.6),'h_gansos':(wt('gansos',after=5),.7),
's1_galos':(wt('galos',after=6.9),0),'s1_breno':(wt('Breno',after=7),.3),'s1_sac':(wt('saqueado'),.3),'s1_rom':(wt('romanos',after=9.9),0),'s1_enc':(wt('encerraron'),.3),'s1_cap':(wt('Capitolio'),.5),
's2_siete':(wt('siete'),.4),'s2_meses':(wt('meses'),0),'s2_ased':(wt('asedio'),.3),'s2_ham':(wt('hambre'),.4),'s2_boc':(wt('bocado'),0),'s2_cont':(wt('contaba'),0),
's2_gan':(wt('gansos',after=20.5),.3),'s2_sag':(wt('sagrados'),.3),'s2_juno':(wt('Juno'),.4),'s2_nadie':(wt('nadie'),0),'s2_toc':(wt('tocarlos'),.4),
's3_noche':(wt('noche'),0),'s3_luna':(wt('luna'),.2),'s3_roca':(wt('roca',after=28),0),'s3_carm':(wt('Carmentis'),.3),'s3_sub':(wt('Subieron'),0),'s3_sil':(wt('silencio'),0),
's3_cent':(wt('centinelas'),.2),'s3_nada':(wt('nada',after=34),0),'s3_perros':(wt('perros'),.2),'s3_tamp':(wt('tampoco'),.3),
's4_pero':(wt('pero',after=37),0),'s4_gan':(wt('gansos',after=37.5),.4),'s4_si':(wt('sí',after=38),.9),'s4_graz':(wt('graznar'),.9),'s4_bat':(wt('batir'),.3),'s4_alas':(wt('alas'),.4),
's5_marco':(wt('Marco'),.2),'s5_manlio':(wt('Manlio',after=42),0),'s5_cons':(wt('cónsul'),.2),'s5_desp':(wt('despertó'),.6),'s5_corr':(wt('corrió'),.3),'s5_roca':(wt('roca',after=46.5),0),
's5_derr':(wt('derribó'),.3),'s5_galo':(wt('galo',after=48),0),'s5_escudo':(wt('escudo'),1.0),'s5_dem':(wt('demás'),.2),'s5_acud':(wt('acudieron'),0),'s5_dardos':(wt('dardos'),.6),'s5_pied':(wt('piedras'),.7),
's6_amanecer':(wt('amanecer'),.3),'s6_cent':(wt('centinela',after=55.5),0),'s6_durm':(wt('durmió'),.3),'s6_arr':(wt('arrojado'),.8),'s6_roca':(wt('roca',after=58.9),.4),
's7_aun':(wt('Aun',after=60),0),'s7_roma':(wt('Roma',after=60.5),0),'s7_mil':(wt('mil'),.4),'s7_libras':(wt('libras'),0),'s7_oro':(wt('oro'),.5),'s7_fue':(wt('fueran'),0),
's7_pesas':(wt('pesas'),.3),'s7_truc':(wt('trucadas'),.3),'s7_breno':(wt('Breno',after=67.5),0),'s7_tiro':(wt('tiró'),.3),'s7_esp':(wt('espada'),0),'s7_bal':(wt('balanza'),1.0),'s7_ay':(wt('Ay'),.4),'s7_venc':(wt('vencidos'),.6),
's8_asi':(wt('Así',after=72),0),'s8_livio':(wt('Livio'),.3),'s8_sig':(wt('siglos'),0),'s8_parte':(wt('Parte'),0),'s8_dud':(wt('dudosa'),.7),'s8_gan':(wt('gansos',after=77),.3),'s8_real':(wt('real'),.5),
'c_ent':(wt('Entonces'),0),'c_quien':(wt('quién'),.2),'c_gan':(wt('gansos',after=82),.3),'c_man':(wt('Manlio',after=83),.3),'c_com':(wt('Cuéntamelo'),.4),'c_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'whip'},{'type':'dive','x':180,'y':260,'z':9,'dur':.5},{'type':'dip','col':'#05081a'},{'type':'zoom'},
     {'type':'morph','a':[100,300,160,150,18],'col':'#f7f7f2','dur':.55},{'type':'iris','x':180,'y':300,'col':'#ffb070'},
     {'type':'ink','x':180,'y':330,'col':'#ffd27a','dur':.45},{'type':'morph','a':[130,270,100,120,14],'col':'#e9d8a8','dur':.55},{'type':'push','dir':'up'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
