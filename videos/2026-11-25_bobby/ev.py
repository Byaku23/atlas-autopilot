import sys; sys.path.insert(0,'../eng')
from words import *
DUR=81.5667
T=[0,7.32,11.95,20.25,24.57,33.67,41.97,56.37,64.6,69.48,73.22,DUR]
RAW={
# S0
'kilos':(wt('kilos'),.9),'fuego':(wt('fuego'),.6),'soldado':(wt('soldado'),.4),'polaco':(wt('polaco'),.5),
# S1
'empezo':(wt('empezó'),.2),'n1942':(wt('dos',after=10),.7),'iran':(wt('Irán'),.4),
# S2
'polacos':(wt('polacos'),.3),'palestina':(wt('Palestina'),.3),'adoptaron':(wt('adoptaron'),.5),'huerfano':(wt('huérfano'),.4),'leche':(wt('leche'),.3),'vodka':(wt('vodka'),.8),
# S3
'llamaron':(wt('llamaron'),.2),'voytek':(wt('Voytek',after=20),.7),'guerrero':(wt('guerrero'),.3),'alegre':(wt('alegre'),.4),
# S4
'enorme':(wt('enorme'),.9),'comia':(wt('Comía'),.2),'soldados4':(wt('soldados',after=26),.2),'dormia':(wt('dormía'),.2),'cerveza':(wt('cerveza'),.5),'cigarrillos':(wt('cigarrillos'),.5),'secomia':(wt('comía',after=31),.8),'fumarlos':(wt('fumarlos'),.3),
# S5
'n1944':(wt('cuatro',after=35),.6),'italia':(wt('Italia'),.4),'permiso':(wt('permiso'),.3),'especial':(wt('especial'),.3),'consiguio':(wt('consiguió'),.9),
# S6
'mayo':(wt('mayo'),.3),'montecasino':(wt('Montecasino'),.8),'llevo':(wt('llevó'),.3),'cajas6':(wt('cajas',after=45),.3),'camiones':(wt('camiones'),.3),'canones':(wt('cañones'),.5),'fuego6':(wt('fuego',after=49),.9),'insignia':(wt('insignia'),.4),'leyenda':(wt('leyenda'),.3),'cabo':(wt('cabo'),.9),
# S7
'terminar':(wt('terminar'),.2),'guerra7':(wt('guerra',after=57),.3),'escocia':(wt('Escocia'),.4),'n1947':(wt('siete'),.7),'zoo':(wt('zoológico'),.4),'edimburgo':(wt('Edimburgo'),.3),
# S8
'vivio':(wt('Vivió'),.2),'dieciseis':(wt('dieciséis'),.8),'n1963':(wt('tres',after=68),.7),
# S9
'dicen':(wt('Dicen'),.1),'oia':(wt('oía'),.2),'polaco9':(wt('polaco',after=71),.4),'alegraba':(wt('alegraba'),.5),
# S10
'voytek10':(wt('Voytek',after=73),.2),'verdad':(wt('verdad'),.4),'mascota':(wt('mascota'),.5),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#e63946','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'ink','x':180,'y':300,'col':'#3d4a2a','dur':.45},
 {'type':'dive','x':180,'y':330,'z':9,'dur':.55},
 {'type':'morph','a':[70,452,220,36,12],'col':'#e63946','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#141c22','dur':.5},
 {'type':'push','dir':'up','dur':.45},
 {'type':'flash','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
