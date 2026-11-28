import sys; sys.path.insert(0,'../eng')
from words import *
DUR=86.5333
T=[0,9.25,23.09,35.93,41.49,57.44,69.08,77.82,DUR]
RAW={
# S0 gancho
'berlin':(wt('Berlín'),.5),'n1904':(wt('cuatro'),.8),'caballo':(wt('caballo'),.3),'sumar':(wt('sumar'),.3),'restar':(wt('restar'),.3),'fecha':(wt('fecha'),.3),'listo':(wt('Listo'),.9),
# S1 von Osten
'wilhelm':(wt('Wilhelm'),.3),'profesor':(wt('profesor'),.3),'ocho':(wt('ocho'),.3),'martes':(wt('martes'),.4),'viernes':(wt('viernes'),.4),'golpeaba':(wt('golpeaba'),.2),'once':(wt('once'),.8),'correcto':(wt('Correcto'),.9),
# S2 comision
'nyt':(wt('New'),.3),'comision':(wt('comisión'),.3),'trece':(wt('trece'),.8),'vet':(wt('veterinario'),.3),'circo':(wt('circo'),.3),'caballeria':(wt('caballería'),.3),'zoo':(wt('zoológico'),.3),
# S3 sin trucos
'concl':(wt('conclusión'),.3),'sept':(wt('septiembre'),.3),'no':(wt('no',after=39.9),.4),'trucos':(wt('trucos'),.9),
# S4 Pfungst
'joven':(wt('joven'),.3),'oskar':(wt('Oskar'),.4),'creyo':(wt('creyó'),.3),'prueba':(wt('prueba'),.3),'anteo':(wt('anteojeras'),.6),'siveia':(wt('veía'),.2),'ochenta':(wt('ochenta'),.5),'sino':(wt('Si',after=54.7),.2),'seis':(wt('seis'),.8),
# S5 lee
'nosabia':(wt('matemáticas',after=58),.5),'leia':(wt('Leía'),.4),'llegar':(wt('llegar'),.2),'gesto':(wt('gesto'),.6),'detenia':(wt('detenía'),.9),
# S6 efecto
'nadie':(wt('Nadie'),.2),'nunca':(wt('nunca'),.5),'efecto':(wt('efecto'),.6),'clever':(wt('Clever'),.9),
# S7 debate
'entonces':(wt('Entonces'),.2),'listo2':(wt('listo',after=79),.4),'lector':(wt('lector'),.4),'coment':(wt('Comenta'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'ink','x':180,'y':330,'col':'#17283a','dur':.45},
 {'type':'morph','a':[70,452,220,36,12],'col':'#e0524a','dur':.55},
 {'type':'dive','x':185,'y':385,'z':9,'dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'glitch','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#ffcf5a','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#0e1824','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
