import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=85.6
T=[0,6.28,16.76,28.9,34.84,46.1,55.5,62.8,73.16,DUR]
RAW={
'h_perro':(wt('perro'),0),'h_420':(wt('cuatrocientos'),.3),'h_ciudad':(wt('ciudad'),.2),'h_otro':(wt('otro',after=4),.2),'h_est':(wt('estatua',after=5),.9),
's1_ene':(wt('Enero'),0),'s1_1925':(wt('veinticinco'),.3),'s1_nome':(wt('Nome'),.3),'s1_dif':(wt('difteria'),.7),'s1_med':(wt('medicina'),0),'s1_lej':(wt('lejísimos'),.4),'s1_trin':(wt('trineo'),.5),
's2_20':(wt('Veinte',after=16.7),.3),'s2_150':(wt('cincuenta',after=18.5),.2),'s2_suero':(wt('suero'),0),'s2_mano':(wt('mano',after=21.5),.2),'s2_1085':(wt('Mil',after=22.5),.3),'s2_dias':(wt('días'),.2),'s2_52':(wt('cincuenta',after=26.5),.2),'s2_cero':(wt('cero'),.8),
's3_uno':(wt('Uno',after=28.8),0),'s3_togo':(wt('Togo',after=30.3),.4),'s3_doce':(wt('doce'),.3),'s3_lider':(wt('líder'),0),'s3_sepp':(wt('Seppala',after=34),.2),
's4_togo':(wt('Togo',after=34.8),.3),'s4_420':(wt('cuatrocientos',after=36.5),.3),'s4_nadie':(wt('nadie'),.5),'s4_cruz':(wt('Cruzaron'),0),'s4_helado':(wt('helado'),.2),'s4_nort':(wt('Norton'),0),'s4_horas':(wt('horas'),.2),'s4_hielo':(wt('hielo',after=44),.3),'s4_romp':(wt('rompió'),1.0),
's5_pero':(wt('Pero',after=46),0),'s5_otro':(wt('otro',after=48),.2),'s5_balto':(wt('Balto',after=49),.4),'s5_kaa':(wt('Kaasen'),0),'s5_85':(wt('Ochenta',after=52),.3),'s5_km':(wt('kilómetros',after=53),.2),'s5_nome':(wt('Nome',after=54.5),.6),
's6_balto':(wt('Balto',after=55.5),.3),'s6_fam':(wt('famoso'),.4),'s6_pais':(wt('país'),0),'s6_mismo':(wt('mismo'),0),'s6_est':(wt('estatua',after=60),.8),'s6_cp':(wt('Central'),0),'s6_ny':(wt('York'),.2),
's7_togo':(wt('Togo',after=62.8),.2),'s7_esp':(wt('esperar'),.4),'s7_est':(wt('estatua',after=64.8),.2),'s7_2001':(wt('uno',after=66.5),.8),'s7_2011':(wt('once'),.3),'s7_time':(wt('Time'),.2),'s7_her':(wt('heroico'),.6),'s7_hist':(wt('historia',after=72),.4),
'c_asi':(wt('Así',after=73),0),'c_preg':(wt('pregunta'),.3),'c_quien':(wt('quién'),0),'c_togo':(wt('Togo',after=77),.3),'c_mas':(wt('más',after=78.3),.2),'c_balto':(wt('Balto',after=79.3),.3),'c_meta':(wt('meta'),.4),'c_com':(wt('Comenta'),0),'c_sig':(wt('Sígueme'),0),
}
TRS=[None,{'type':'whip'},{'type':'push','dir':'left'},
     {'type':'morph','a':[150,285,60,70,16],'col':'#cfeaff','dur':.55},{'type':'flash'},{'type':'dive','x':180,'y':320,'z':9,'dur':.5},
     {'type':'ink','x':180,'y':330,'col':'#4aa8ff','dur':.45},{'type':'morph','a':[110,380,140,90,14],'col':'#0b2b45','dur':.55},{'type':'iris','x':180,'y':330,'col':'#ff9a3c'}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%s %.2f'%(k,E[k]),end=' | ')
