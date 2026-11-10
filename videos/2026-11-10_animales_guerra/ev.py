import sys; sys.path.insert(0,'../eng')
from words import *
DUR=76.5667
T=[0,wt('En',after=7)-.05,wt('En',after=19)-.05,wt('Llevaba')-.05,wt('Ese')-.05,wt('Y',after=51)-.05,wt('En',after=57.5)-.05,wt('Quién')-.05,DUR]
RAW={
# S0 gancho
'h_ini':(0.0,.5),'h_oso':(wt('oso'),0),'h_mun':(wt('munición'),.5),'h_mund':(wt('Mundial'),.4),'h_uni':(wt('único'),.4),'h_camb':(wt('cambió'),.6),
# S1 Aníbal
'a_doc':(wt('doscientos'),.3),'a_ani':(wt('Aníbal'),.5),'a_cruz':(wt('cruzó'),0),'a_alp':(wt('Alpes'),.6),'a_30':(wt('treinta'),0),'a_ele':(wt('elefantes'),0),
'a_roma':(wt('Roma'),.6),'a_poc':(wt('Pocos'),.3),'a_solo':(wt('solo',after=17.5),0),'a_uno':(wt('uno',after=18),.7),
# S2 Cher Ami
'c_18':(wt('dieciocho',after=20),.3),'c_pal':(wt('paloma',after=21),.3),'c_cher':(wt('Cher'),.5),'c_vol':(wt('voló'),.3),'c_40':(wt('cuarenta'),0),'c_25':(wt('veinticinco'),0),
'c_disp':(wt('disparo'),1.2),'c_pec':(wt('pecho'),.4),'c_pata':(wt('pata'),.4),'c_arr':(wt('arrancada'),.6),
# S3 mensaje
'm_men':(wt('mensaje'),.3),'m_his':(wt('historia'),0),'m_res':(wt('rescatar'),.3),'m_cien':(wt('ciento'),0),'m_atr':(wt('atrapados'),.4),'m_fra':(wt('Francia'),0),'m_hit':(wt('le',after=38.5),1.0),'m_cruz':(wt('Cruz'),.6),
# S4 Stubby
'p_mis':(wt('mismo'),.3),'p_per':(wt('perro',after=41),.3),'p_stu':(wt('Stubby'),.5),'p_olia':(wt('olía'),0),'p_gas':(wt('gas'),.4),'p_nadie':(wt('nadie'),0),
'p_desp':(wt('despertaba'),0),'p_sold':(wt('soldados',after=46),0),'p_lad':(wt('ladridos'),.5),'p_atr':(wt('atrapó'),0),'p_esp':(wt('espía'),.7),'p_ran':(wt('rango'),0),'p_sar':(wt('sargento'),1.0),
# S5 Wojtek
'w_oso':(wt('oso',after=51.6),.6),'w_voi':(wt('Voitek'),.8),'w_sol':(wt('Soldados',after=53),0),'w_pol':(wt('polacos'),.3),'w_ado':(wt('adoptaron'),0),'w_iran':(wt('Irán'),.4),'w_cach':(wt('cachorro'),.3),
# S6 Montecassino
'mc_bat':(wt('batalla'),0),'mc_mon':(wt('Montecassino'),.8),'mc_44':(wt('cuatro',after=61),.3),'mc_carg':(wt('cargaba'),0),'mc_caj':(wt('cajas'),0),'mc_mun':(wt('munición',after=62.5),.4),
'mc_fire':(wt('como'),1.0),'mc_mas':(wt('más',after=64),0),'mc_comp':(wt('compañía'),.3),'mc_puso':(wt('puso'),0),'mc_emb':(wt('compañía'),1.0),
# S7 CTA
'q_quien':(wt('Quién'),.4),'q_val':(wt('valiente'),.3),'q_ele':(wt('elefante',after=68),.3),'q_pal':(wt('paloma',after=69),.3),'q_per':(wt('perro',after=70),.3),'q_oso':(wt('oso',after=71.5),.3),
'q_com':(wt('Comenta'),0),'q_sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'morph','a':[186,100,162,200,10],'col':'#e3a33a','dur':.55},
 {'type':'whip','dur':.34},
 {'type':'morph','a':[196,350,22,54,8],'col':'#b8793a','dur':.55},
 {'type':'ink','x':180,'y':300,'col':'#d6402f','dur':.45},
 {'type':'dive','x':180,'y':262,'z':9,'dur':.55},
 {'type':'push','dir':'up','dur':.45},
 {'type':'morph','a':[95,215,170,170,85],'col':'#d6402f','dur':.55}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
