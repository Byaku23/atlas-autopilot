import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=80.0333
T=[0,5.9,17.9,37.04,47.54,54.9,64.16,72.3,DUR]
RAW={
'a_ocho':(wt('ochenta'),.3),'a_elef':(wt('elefantes'),0),'a_perd':(wt('perdió'),.9),'a_como':(wt('posible'),0),
'b_200':(wt('doscientos'),.5),'b_cris':(wt('Cristo'),0),'b_ani':(wt('Aníbal',after=8.5),.3),'b_terr':(wt('aterrorizado'),.4),'b_esc':(wt('Escipión',after=12),.3),'b_afr':(wt('África'),.4),'b_volv':(wt('volver'),.3),'b_cart':(wt('Cartago'),.4),
'z_zama':(wt('Zama'),.7),'z_lanz':(wt('lanzó'),0),'z_elef':(wt('elefantes',after=20),.4),'z_esp':(wt('esperaba'),0),'z_pas':(wt('pasillos'),.4),'z_trom':(wt('trompetas'),0),'z_asus':(wt('asustaron'),.5),'z_huec':(wt('huecos'),0),'z_nadie':(wt('nadie'),0),'z_otras':(wt('Otras'),0),'z_arro':(wt('arrollaron'),.7),
'm_mas':(wt('Masinisa'),.4),'m_num':(wt('numidia'),.3),'m_ahu':(wt('ahuyentó'),.5),'m_leg':(wt('legiones'),0),'m_romp':(wt('rompieron'),.8),'m_lin':(wt('líneas'),0),
'v_guar':(wt('guardaba'),0),'v_vet':(wt('veteranos'),.3),'v_terc':(wt('tercera'),0),'v_cab':(wt('caballería',after=51),0),'v_volv':(wt('volvió'),0),'v_esp':(wt('espalda'),.9),
'r_20':(wt('veinte'),.3),'r_mur':(wt('murieron'),.8),'r_cart':(wt('Cartago',after=57),0),'r_flota':(wt('flota'),.6),'r_50':(wt('cincuenta'),.4),'r_poder':(wt('poder'),0),'r_roma':(wt('Roma',after=63),.7),
'e_esc':(wt('Escipión',after=64),0),'e_nom':(wt('nombre'),0),'e_afri':(wt('Africano'),.9),'e_gen':(wt('genio'),0),'e_perd':(wt('perdió',after=68.5),.4),'e_est':(wt('estudiado'),0),'e_truc':(wt('trucos'),.3),
'c_gen':(wt('general'),0),'c_ani':(wt('Aníbal',after=74),0),'c_esc':(wt('Escipión',after=75),0),'c_com':(wt('Comenta'),.4),
}
TRS=[None,{'type':'morph','a':[60,200,240,180,20],'col':'#e2cf9c','dur':.6},{'type':'dive','x':180,'y':330,'z':9,'dur':.5},{'type':'whip'},
     {'type':'push','dir':'left'},{'type':'morph','a':[70,230,220,120,16],'col':'#d6402f','dur':.55},{'type':'ink','x':180,'y':300,'col':'#f2b84b','dur':.45},{'type':'iris','x':180,'y':320,'col':'#1b1410'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
