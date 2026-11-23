import sys; sys.path.insert(0,'../eng')
from words import *
DUR=81.27
T=[0,5.05,13.45,20.12,24.57,30.12,34.45,46.28,55.36,68.80,73.36,DUR]
RAW={
# S0
'winnie':(wt('Winnie'),.3),'verdad':(wt('verdad'),1.0),'osa':(wt('osa'),.5),'guerra':(wt('guerra'),.6),
# S1
'agosto':(wt('agosto'),.2),'n1914':(wt('catorce',after=5),.5),'harry':(wt('Harry'),.3),'vet':(wt('veterinario'),.3),'tren':(wt('tren'),.3),
# S2
'estacion':(wt('estación'),.3),'white':(wt('White'),.4),'osezna':(wt('osezna'),.6),'cazador':(wt('cazador'),.4),'pago':(wt('pagó'),.3),'veinte':(wt('veinte'),.9),
# S3
'llamo':(wt('llamó'),.2),'winnipeg':(wt('Winnipeg'),.6),'ciudad':(wt('ciudad'),.2),'winnie2':(wt('Winnie',after=22.5),.5),'abrev':(wt('abreviar'),.3),
# S4
'mansa':(wt('mansa'),.4),'dormia':(wt('dormía'),.2),'soldados':(wt('soldados'),.3),'adoraron':(wt('adoraron'),.5),
# S5
'mascota':(wt('mascota'),.5),'cruzo':(wt('cruzó'),.3),'atlantico':(wt('Atlántico'),.4),
# S6
'ejercito':(wt('ejército',after=34),.3),'francia':(wt('Francia'),.6),'osa6':(wt('osa',after=36),.3),'frente':(wt('frente'),.5),'dic':(wt('diciembre'),.3),'n14b':(wt('catorce',after=40),.6),'dejo':(wt('dejó'),.4),'zoo':(wt('zoológico',after=42),.4),'recoger':(wt('recogerla'),.3),
# S7
'famosa':(wt('famosa'),.8),'ninos':(wt('niños'),.3),'comer':(wt('comer'),.4),'n1919':(wt('diecinueve'),.7),'siempre':(wt('siempre'),.7),
# S8
'chris':(wt('Christopher'),.3),'milne':(wt('Milne'),.5),'quiso':(wt('quiso'),.3),'osito':(wt('osito'),.4),'n1926':(wt('veintiséis'),.7),'publico':(wt('publicó'),.3),'pu2':(wt('Pu',after=67.9),.9),
# S9
'real':(wt('real'),.4),'londres9':(wt('Londres',after=70),.2),'n1934':(wt('cuatro',after=72),1.0),
# S10
'harry10':(wt('Harry',after=73),.2),'bien':(wt('bien'),.3),'casa':(wt('casa'),.5),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#c0392b','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'ink','x':180,'y':300,'col':'#2f5d3a','dur':.45},
 {'type':'dive','x':180,'y':300,'z':9,'dur':.55},
 {'type':'morph','a':[70,452,220,36,12],'col':'#f2b134','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#1d2a1f','dur':.5},
 {'type':'push','dir':'up','dur':.45},
 {'type':'flash','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
