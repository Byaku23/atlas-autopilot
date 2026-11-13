import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=86.5
T=[0,6.86,18.12,29.02,44.96,58.72,74.2,DUR]
RAW={
's_raya':(wt('raya'),0),'s_trazo':(wt('trazó'),.3),'s_firm':(wt('firmado'),0),'s_esp':(wt('España',after=4),.9),'s_pos':(wt('posible'),.3),
'f_front':(wt('frontera'),.3),'f_cal':(wt('California'),0),'f_ore':(wt('Oregón',after=8.5),0),'f_par':(wt('paralelo'),.3),'f_nac':(wt('Nació'),0),'f_22':(wt('veintidós'),.6),'f_dic':(wt('diecinueve'),.3),'f_was':(wt('Washington'),.5),
'p_tro':(wt('tropas'),.5),'p_neg':(wt('negociar'),.3),'p_ada':(wt('Adams'),.4),'p_oni':(wt('Onís'),.4),'p_ced':(wt('cedió'),.5),'p_flo':(wt('Florida',after=28),.8),
'l_dib':(wt('dibujó'),.3),'l_sab':(wt('Sabine'),.3),'l_roj':(wt('Rojo'),.3),'l_ark':(wt('Arkansas'),.3),'l_par':(wt('paralelo',after=36),.5),'l_rec':(wt('recta',after=38),0),'l_pac':(wt('Pacífico'),.5),'l_ren':(wt('renunció'),.6),'l_ore':(wt('Oregón',after=44),.4),
'm_1821':(wt('veintiuno'),.7),'m_mex':(wt('México'),.3),'m_ind':(wt('independizó'),.6),'m_raya':(wt('raya',after=51),.3),'m_ant':(wt('antiguo'),.4),'m_est':(wt('estado'),.4),
'g_giro':(wt('giro'),.6),'g_ocho':(wt('ocho',after=61),.5),'g_top':(wt('topógrafo'),0),'g_sext':(wt('sextante'),.4),'g_nieve':(wt('nieve'),0),'g_mal':(wt('maleza'),.3),'g_hoy':(wt('Hoy',after=66),.5),'g_tec':(wt('tecnología'),0),'g_serp':(wt('serpentea'),.4),'g_norte':(wt('norte',after=71),0),'g_sur':(wt('sur',after=72),0),'g_verd':(wt('verdadero'),.5),
'c_esp':(wt('España',after=74),0),'c_ced':(wt('cedió',after=75),0),'c_ren':(wt('renunció',after=76),0),'c_pluma':(wt('pluma'),.6),'c_neg':(wt('negocio'),.3),'c_rend':(wt('rendición'),.3),'c_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'dive','x':40,'y':262,'z':9,'dur':.5},{'type':'iris','x':236,'y':309,'col':'#0b1626','dur':.5},{'type':'morph','a':[142,199,76,52,8],'col':'#f4ead2','dur':.6},
     {'type':'push','dir':'left','dur':.5},{'type':'morph','a':[60,240,240,120,16],'col':'#ffd23f','dur':.55},{'type':'flash','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
