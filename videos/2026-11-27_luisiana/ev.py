import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=92.2667
T=[0,8.33,23.25,37.33,52.2,68.45,77.97,84.18,DUR]
RAW={
# S0 gancho
'h_nap':(wt('Napoleón'),.4),'h_vend':(wt('vendió'),.6),'h_terr':(wt('territorio'),.5),'h_fr':(wt('Francia'),.5),'h_es':(wt('España'),.5),'h_al':(wt('Alemania'),.5),'h_jun':(wt('juntas'),.8),'h_15':(wt('quince'),.7),'h_mill':(wt('millones'),.5),'h_dol':(wt('dólares'),.9),'h_porq':(wt('Por',after=6),.5),'h_rega':(wt('regaló'),.6),'h_imp':(wt('imperio'),1.0),
# S1 plan
'a_mil':(wt('Mil'),.4),'a_dos':(wt('dos',after=9),.8),'a_nap':(wt('Napoleón',after=10),.5),'a_sue':(wt('sueña'),.5),'a_rev':(wt('revivir'),.5),'a_imp':(wt('imperio',after=11),.5),'a_am':(wt('América'),.7),'a_plan':(wt('plan'),.5),'a_rec':(wt('recuperar'),.5),'a_col':(wt('colonia'),.5),'a_azu':(wt('azucarera'),.5),'a_sto':(wt('Santo'),.6),'a_hai':(wt('Haití'),.8),'a_usar':(wt('usar'),.4),'a_lui':(wt('Luisiana',after=19),.9),'a_oeste':(wt('oeste'),.4),'a_mis':(wt('Misisipi'),.6),'a_gran':(wt('granero'),.8),
# S2 isla
'b_manda':(wt('Manda'),.4),'b_ejer':(wt('ejército'),.6),'b_isla':(wt('isla'),.5),'b_pero':(wt('Pero'),.4),'b_dos':(wt('dos',after=26),.5),'b_ene':(wt('enemigos'),.8),'b_reb':(wt('rebeldes'),.7),'b_fie':(wt('fiebre'),.6),'b_ama':(wt('amarilla'),.9),'b_mue':(wt('Mueren'),.5),'b_cien':(wt('cien'),.8),'b_dia':(wt('día'),.7),'b_gen':(wt('general'),.4),'b_lec':(wt('Leclerc'),.8),'b_cun':(wt('cuñado'),.5),'b_muere':(wt('muere'),.9),'b_fie2':(wt('fiebre',after=36),.6),
# S3 EEUU
'c_mien':(wt('Mientras'),.4),'c_eeuu':(wt('Unidos'),.5),'c_pan':(wt('pánico'),.9),'c_jef':(wt('Jefferson'),.6),'c_sabe':(wt('sabe'),.4),'c_ctrl':(wt('controla'),.5),'c_no':(wt('Orleans'),.5),'c_salida':(wt('salida'),.6),'c_rio':(wt('río'),.7),'c_manda':(wt('Manda',after=46),.5),'c_mon':(wt('Monroe'),.6),'c_par':(wt('París'),.6),'c_diez':(wt('diez'),.6),'c_dol':(wt('dólares',after=49),.7),'c_solo':(wt('solo'),.4),'c_comp':(wt('comprar'),.5),'c_no2':(wt('Orleans',after=51),.9),
# S4 oferta
'd_y':(wt('Y',after=52),.3),'d_dez':(wt('diezmado'),.8),'d_ing':(wt('Inglaterra'),.9),'d_amen':(wt('amenazando'),.6),'d_ines':(wt('inesperado'),1.0),'d_ofr':(wt('ofrece'),.6),'d_toda':(wt('toda'),.6),'d_lui':(wt('Luisiana',after=60),1.0),'d_15':(wt('Quince',after=60),.9),'d_dol':(wt('dólares',after=62),.7),'d_30':(wt('Treinta'),.7),'d_abr':(wt('abril'),.5),'d_1803':(wt('tres',after=65),.9),'d_unos':(wt('Unos'),.4),'d_4':(wt('cuatro'),.6),'d_cent':(wt('centavos'),.7),'d_acre':(wt('acre'),.9),
# S5 duplicó
'e_eeuu':(wt('Estados',after=68),.5),'e_dup':(wt('duplicó'),1.0),'e_tam':(wt('tamaño'),.5),'e_firma':(wt('firma'),.8),'e_jef':(wt('Jefferson',after=72),.5),'e_dudo':(wt('dudó'),.8),'e_cons':(wt('Constitución'),.6),'e_nodec':(wt('decía'),.5),'e_comp':(wt('comprar',after=75),.5),'e_terr':(wt('territorios'),.7),'e_hizo':(wt('hizo'),.5),'e_igual':(wt('igual'),1.0),
# S6 indígenas
'f_pero':(wt('Pero',after=78),.4),'f_dueños':(wt('dueños'),.9),'f_dec':(wt('decenas'),.5),'f_pue':(wt('pueblos'),.6),'f_ind':(wt('indígenas'),.7),'f_nadie':(wt('nadie'),.5),'f_preg':(wt('preguntó'),1.0),
# S7 debate
'g_fue':(wt('Fue'),.3),'g_mejor':(wt('mejor'),.5),'g_ganga':(wt('ganga'),.8),'g_o':(wt('o',after=86),.3),'g_mayor':(wt('mayor'),.5),'g_error':(wt('error'),.8),'g_nap':(wt('Napoleón',after=87),.6),'g_com':(wt('Comenta'),.5),'g_resp':(wt('respuesta'),.7),'g_sig':(wt('Sígueme'),.5),
}
TRS=[None,{'type':'dive','x':180,'y':320,'z':9,'dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#5b8cff','dur':.6},{'type':'whip','dur':.34},
     {'type':'iris','x':180,'y':320,'col':'#ff9f1c','dur':.5},{'type':'morph','a':[70,96,220,30,8],'col':'#ff9f1c','dur':.6},{'type':'push','dir':'left','dur':.45},{'type':'dip','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
