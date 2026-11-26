import sys; sys.path.insert(0,'../eng')
from words import *
DUR=90.0667
T=[0,6.0,24.75,34.89,47.11,54.23,61.61,70.05,76.79,DUR]
RAW={
# S0 gancho
'sarg':(wt('sargento'),.9),'eeuu':(wt('Unidos'),.4),'heroe':(wt('Héroe'),.6),'leyenda':(wt('leyenda',after=4),.7),
# S1 Yale
'n1917':(wt('1917'),.7),'campo':(wt('campo'),.3),'yale':(wt('Yale'),.5),'cachorro':(wt('cachorro'),.4),'corta':(wt('corta'),.6),'soldados':(wt('soldados'),.2),'conroy':(wt('Conroy'),.3),'stubby1':(wt('Stubby'),.8),
'prohib':(wt('prohibidos'),.6),'corneta':(wt('corneta'),.5),'pata':(wt('pata'),.5),
# S2 barco
'zarpo':(wt('zarpó'),.4),'escondio':(wt('escondió'),.3),'carbon':(wt('carbón'),.4),'tierra':(wt('tierra'),.3),'oficial':(wt('oficial'),.3),'stubby2':(wt('Stubby',after=30),.5),'saludo':(wt('saludo'),.5),'quedarse':(wt('quedarse'),.5),
# S3 gas
'trincheras':(wt('trincheras'),.4),'gas':(wt('gas'),.7),'intox':(wt('intoxicó'),.5),'olia':(wt('olía'),.3),'rastro':(wt('rastro'),.4),'madrugada':(wt('madrugada'),.3),'dormidos':(wt('dormidos'),.3),'corrio':(wt('corrió'),.3),'ladrando':(wt('ladrando'),.5),'alarma':(wt('alarma'),.9),
# S4 heridos y metralla
'heridos':(wt('heridos'),.4),'nadie':(wt('nadie'),.5),'n1918':(wt('1918'),.7),'metralla':(wt('metralla'),.9),'hirio':(wt('hirió'),.5),'pecho':(wt('pecho'),.4),'pata2':(wt('pata',after=53),.6),
# S5 espía
'cuenta':(wt('cuenta'),.2),'mordio':(wt('mordió'),.8),'espia':(wt('espía'),.5),'aleman':(wt('alemán'),.3),'dibujaba':(wt('dibujaba'),.2),'poreso':(wt('eso'),.3),'ascend':(wt('ascendieron'),.4),'sargento2':(wt('sargento',after=60),.9),
# S6 batallas, manta, Pershing
'diecisiete':(wt('diecisiete'),.7),'mujeres':(wt('mujeres'),.3),'chateau':(wt('Château-Thierry'),.4),'manta':(wt('manta'),.5),'medallas':(wt('medallas'),.5),'pershing':(wt('Pershing'),.4),'otra':(wt('otra'),.5),
# S7 presidentes, muerte, museo
'tres':(wt('tres'),.3),'presid':(wt('presidentes'),.4),'murio':(wt('Murió'),.6),'n1926':(wt('1926'),.8),'smith':(wt('Smithsonian'),.7),
# S8 duda y debate
'ojo':(wt('ojo'),.6),'detalles':(wt('detalles'),.3),'companeros':(wt('compañeros'),.3),'obit':(wt('obituario'),.5),'heroe2':(wt('héroe',after=80),.5),'leyenda2':(wt('leyenda',after=80),.6),'coment':(wt('Comenta'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'ink','x':180,'y':330,'col':'#2b2a1c','dur':.45},
 {'type':'morph','a':[70,452,220,36,12],'col':'#d1322e','dur':.55},
 {'type':'dive','x':185,'y':385,'z':9,'dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'glitch','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#f0c040','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#14100a','dur':.5},
 {'type':'whip','dur':.34}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
