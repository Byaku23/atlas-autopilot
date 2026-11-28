import sys; sys.path.insert(0,'../eng')
from words import *
DUR=89.4
T=[0,4.93,20.23,28.68,35.95,53.71,60.73,70.10,77.50,DUR]
RAW={
# S0 gancho
'yegua':(wt('yegua'),.3),'sargento0':(wt('sargento'),.9),'marines0':(wt('Marines',after=2),.4),'chiste':(wt('chiste'),.6),
# S1 Corea 1952
'corea':(wt('Corea'),.4),'n1952':(wt('dos',after=7),.3),'joven':(wt('joven'),.3),'pierna':(wt('pierna'),.3),'hermana':(wt('hermana'),.3),'mina':(wt('mina'),.9),'vendio':(wt('Vendió'),.3),'doscientos':(wt('doscientos'),.8),'teniente':(wt('teniente'),.3),
# S2 nombre
'reck':(wt('Reckless',after=20),.5),'temeraria':(wt('temeraria',after=21),.4),'fusiles':(wt('fusiles'),.3),'retroceso':(wt('retroceso'),.8),'temerarios':(wt('temerarios',after=27),.5),
# S3 campamento
'cascos':(wt('cascos'),.5),'asustarse':(wt('asustarse'),.2),'explosiones':(wt('explosiones'),.8),'colinas':(wt('colinas'),.3),'municion':(wt('munición',after=34),.5),
# S4 Outpost Vegas
'marzo':(wt('Marzo'),.3),'outpost':(wt('Outpost'),.5),'chinos':(wt('chinos'),.3),'atacan':(wt('atacan'),.6),'sube':(wt('sube'),.2),'cincuenta':(wt('Cincuenta',after=44),.5),'dia':(wt('día',after=45),.3),'arrozales':(wt('arrozales'),.3),'ladera':(wt('ladera'),.3),'fuego':(wt('fuego',after=48),.8),'kilos':(wt('kilos'),.8),'bajar':(wt('bajar'),.3),'heridos':(wt('heridos',after=52),.5),
# S5 heridas y chalecos
'heridas':(wt('heridas',after=54),.7),'metralla':(wt('metralla'),.3),'siguio':(wt('Siguió'),.9),'chalecos':(wt('chalecos'),.4),'protegerla':(wt('protegerla'),.3),
# S6 ascensos y muerte
'asc':(wt('ascendieron'),.3),'sarg1':(wt('sargento',after=61.4),.8),'primero':(wt('primero'),.8),'ocho':(wt('ocho',after=66),.4),'murio':(wt('murió'),.3),'honores':(wt('honores'),.3),
# S7 Dickin
'dieciseis':(wt('dieciséis'),.8),'medalla':(wt('Medalla'),.4),'dickin':(wt('Dickin'),.9),'premio':(wt('premio'),.3),
# S8 debate
'incomoda':(wt('incómoda'),.3),'heroina':(wt('heroína'),.4),'animal':(wt('animal',after=81),.4),'nadie':(wt('nadie'),.3),'coment':(wt('Cuéntame'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'ink','x':180,'y':330,'col':'#2a1a10','dur':.45},
 {'type':'morph','a':[70,452,220,36,12],'col':'#e0524a','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'dive','x':185,'y':385,'z':9,'dur':.55},
 {'type':'glitch','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#ffcf5a','dur':.5},
 {'type':'whip','dur':.34},
 {'type':'iris','x':180,'y':300,'col':'#14100a','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
