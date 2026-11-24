import sys; sys.path.insert(0,'../eng')
from words import *
DUR=64.1333
T=[0,6.06,14.07,19.34,23.38,26.2,33.51,40.09,43.96,50.88,55.89,DUR]
RAW={
# S0
'nero0':(wt('Nerón'),.3),'violin':(wt('violín'),.5),'mientras':(wt('mientras'),.2),'ardia':(wt('ardía'),.8),'pero':(wt('Pero'),.2),'existia':(wt('existía'),.9),
# S1
'julio':(wt('julio'),.2),'n64':(wt('cuatro',after=6),.8),'incendio':(wt('incendio'),.5),'circo':(wt('Circo'),.4),'madera':(wt('madera'),.6),'ardio':(wt('Ardió'),.7),'dias':(wt('días'),.3),
# S2
'catorce':(wt('catorce'),.4),'tres':(wt('tres'),.8),'desaparecieron':(wt('desaparecieron'),.5),'cuatro2':(wt('cuatro',after=14),.7),'salvaron':(wt('salvaron'),.3),
# S3
'estaba':(wt('Estaba'),.1),'nero3':(wt('Nerón',after=19),.6),'antium':(wt('Antium'),.4),'lejos':(wt('lejos'),.3),
# S4
'volvio':(wt('Volvió'),.3),'llamas':(wt('llamas'),.5),'palacio':(wt('palacio'),.8),
# S5
'abrio':(wt('Abrió'),.4),'campo':(wt('Campo'),.4),'jardines':(wt('jardines'),.3),'casa':(wt('casa'),.3),'levanto':(wt('levantó'),.3),'refugios':(wt('refugios'),.5),'bajo':(wt('bajó'),.3),'precio':(wt('precio'),.3),'trigo':(wt('trigo'),.8),
# S6
'tacito':(wt('Tácito'),.6),'rumor':(wt('rumor',after=34),.5),'cantaba':(wt('cantaba'),.3),'troya':(wt('Troya'),.7),'ardia2':(wt('ardía',after=38),.6),
# S7
'toco':(wt('tocó'),.3),'lira':(wt('lira'),.7),'nunca':(wt('nunca'),.5),'violin2':(wt('violín',after=43),.8),
# S8
'rumor8':(wt('rumor',after=44),.3),'detuvo':(wt('detuvo'),.4),'construyo':(wt('construyó'),.3),'dorada':(wt('Dorada'),.9),'arrasadas':(wt('arrasadas'),.5),
# S9
'culpo':(wt('culpó'),.4),'cristianos':(wt('cristianos'),.7),'torturados':(wt('torturados'),.5),'ejecutados':(wt('ejecutados'),.6),
# S10
'nero10':(wt('Nerón',after=55),.2),'culpable':(wt('culpable'),.5),'chivo':(wt('chivo'),.6),'roma':(wt('Roma',after=58),.3),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#c0272d','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'ink','x':180,'y':300,'col':'#2a1238','dur':.45},
 {'type':'dive','x':180,'y':330,'z':9,'dur':.55},
 {'type':'morph','a':[70,452,220,36,12],'col':'#f2b134','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#1a1410','dur':.5},
 {'type':'push','dir':'up','dur':.45},
 {'type':'flash','dur':.4}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
