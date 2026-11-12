import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=73.9333
T=[0,8.6,22.75,33.05,43.3,48.45,54.15,65.55,DUR]
RAW={
'a_1932':(wt('treinta'),.5),'a_ejer':(wt('ejército'),.3),'a_20':(wt('veinte'),.5),'a_emus':(wt('emús'),.4),'a_gano':(wt('ganó'),.7),
'b_oeste':(wt('oeste'),.2),'b_vet':(wt('veteranos'),.3),'b_crisis':(wt('crisis'),.3),'b_ruina':(wt('ruina'),.5),'b_llegaron':(wt('llegaron'),.2),'b_agua':(wt('agua'),0),'b_arras':(wt('arrasaron'),.6),
'c_pid':(wt('pidieron'),0),'c_gob':(wt('gobierno',after=25),.3),'c_dos':(wt('dos',after=27),.3),'c_lewis':(wt('Lewis'),.3),'c_diez':(wt('diez'),.3),'c_cart':(wt('cartuchos'),.4),'c_mayor':(wt('mayor'),0),'c_mere':(wt('Meredith'),.5),
'd_blanco':(wt('blanco'),.3),'d_grupos':(wt('grupos'),0),'d_dir':(wt('direcciones'),.3),'d_sold':(wt('soldados',after=39),0),'d_disp':(wt('disparaban'),.5),'d_esc':(wt('escapaban'),.3),
'e_incl':(wt('Incluso'),0),'e_cam':(wt('camión'),.3),'e_tamp':(wt('tampoco'),.2),'e_func':(wt('funcionó'),.8),
'f_mes':(wt('mes'),.3),'f_ret':(wt('retiraron'),.3),'f_sig':(wt('siguieron'),0),'f_trigo':(wt('trigo',after=52),.3),
'g_cambio':(wt('cambio'),0),'g_rec':(wt('recompensas'),.3),'g_caz':(wt('cazadores'),0),'g_res':(wt('resultado'),.4),'g_seis':(wt('seis'),.3),'g_1934':(wt('cuatro'),0),'g_57':(wt('cincuenta'),.4),'g_mil':(wt('mil',after=64.5),.5),
'h_dime':(wt('dime'),0),'h_ejer':(wt('ejército',after=67),0),'h_emus':(wt('emús',after=69),0),'h_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'morph','a':[110,230,140,110,16],'col':'#1c2a3a','dur':.6},{'type':'push','dir':'left'},{'type':'whip'},
     {'type':'dive','x':200,'y':420,'z':9,'dur':.5},{'type':'morph','a':[80,240,200,110,16],'col':'#ff7b3a','dur':.55},{'type':'ink','x':180,'y':330,'col':'#ffcf5a','dur':.45},{'type':'iris','x':180,'y':320,'col':'#141018'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    print(' | '.join('%s %.2f'%(k,E[k]) for k in sorted(E,key=lambda k:E[k])))
