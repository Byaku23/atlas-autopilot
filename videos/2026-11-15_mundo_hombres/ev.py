import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=107.2
T=[0,7.57,21.03,36.56,54.4,67.27,81.85,94.64,DUR]
RAW={
# S0
'man':(wt('mañana'),.2),'hom':(wt('hombres'),.3),'contra':(wt('contrario'),.6),'hom2':(wt('hombres',after=5),.7),'num':(wt('numeros'),.4),
# S1
'nueve':(wt('Nueve'),.4),'homic':(wt('homicidio'),0),'hom3':(wt('hombres',after=12),.5),'ocho':(wt('ocho'),.4),'vict':(wt('victimas'),.3),'nadie':(wt('Nadie'),.2),'datos':(wt('datos'),.3),'tranq':(wt('tranquilizan'),.5),
# S2
'casa':(wt('casa'),.3),'set':(wt('setenta'),.5),'cuid':(wt('cuidados'),.3),'cobrar':(wt('cobrar'),.4),'toc':(wt('Tocaria'),.2),'bebes':(wt('bebes'),.5),'tamp':(wt('tampoco'),.3),'gener':(wt('generaciones'),.6),
# S3
'exp':(wt('experimento'),.3),'athos':(wt('Athos'),.6),'mil46':(wt('cuarenta',after=41),.5),'entran':(wt('entran'),.5),'monjes':(wt('monjes'),.3),'veinte':(wt('veinte'),.3),'hembra':(wt('hembra'),.5),'gatos':(wt('gatos'),.7),'fuera':(wt('fuera'),.4),
# S4
'fuerza':(wt('fuerza'),.5),'atl':(wt('atletismo'),.3),'corren':(wt('corren'),.3),'diez2':(wt('diez',after=64),.4),'rapido':(wt('rapido'),.6),
# S5
'ademas':(wt('Ademas'),0),'nueve2':(wt('nueve',after=68),.5),'obras':(wt('obras'),.3),'minas':(wt('minas'),.3),'tej':(wt('tejados'),.3),'ellos':(wt('ellos',after=78),.5),'mud':(wt('mudanzas'),.4),'exito':(wt('exito'),.8),
# S6
'reun':(wt('reuniones'),.5),'science':(wt('Science'),.5),'mejores':(wt('mejores'),.3),'ellas':(wt('ellas'),.5),'vez':(wt('vez'),.8),
# S7
'sobre':(wt('sobreviviria'),.4),'desastre':(wt('desastre',after=98),.6),'musc':(wt('musculos'),.5),'coment':(wt('Comenta'),.4),'cual':(wt('cual'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'dive','x':180,'y':262,'z':9,'dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'morph','a':[40,230,280,140,16],'col':'#0d1b33','dur':.55},
 {'type':'ink','x':180,'y':300,'col':'#4aa3ff','dur':.45},
 {'type':'whip','dur':.35},
 {'type':'iris','x':180,'y':330,'col':'#0f2347','dur':.5},
 {'type':'push','dir':'up','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
