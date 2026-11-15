import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=103.967
T=[0,6.55,19.38,33.12,42.3,49.57,65.85,85.07,93.06,DUR]
RAW={
# S0
'hom':(wt('hombres'),.2),'desap':(wt('desaparecieran'),.5),'muj':(wt('mujeres',after=3),.7),'tard':(wt('tarde'),.3),'contra':(wt('contrario'),.4),
# S1
'beb':(wt('bebes'),.5),'gen':(wt('generaciones'),.4),'hip':(wt('hipotesis'),.3),'esp':(wt('esperma'),.4),'agu':(wt('aguantarian'),0),'pap':(wt('papel'),.3),'bano':(wt('bano'),.4),
# S2
'seg':(wt('segun'),0),'nueve':(wt('nueve'),.4),'homic':(wt('homicidio'),0),'hom2':(wt('hombres',after=25),.5),'nov':(wt('noventa'),.5),'presos':(wt('presos'),.3),'carc':(wt('carceles'),.4),'vac':(wt('vacias'),.7),
# S3
'ojo':(wt('ojo'),.6),'delit':(wt('delitos'),.3),'mitad':(wt('mitad'),.5),'ases':(wt('asesinadas'),.4),'pareja':(wt('pareja'),.3),
# S4
'casa':(wt('casa'),.3),'nada':(wt('nada'),.3),'set':(wt('setenta'),.5),'cuid':(wt('cuidados'),.3),'cobrar':(wt('cobrar'),.4),
# S5
'estu':(wt('estudiarian'),.3),'trece':(wt('trece'),.5),'cien':(wt('cien'),.3),'science':(wt('Science'),.5),'rel':(wt('relaciono'),.2),'escu':(wt('escuchaban'),.3),'turnos':(wt('turnos'),.4),
# S6
'vent':(wt('ventaja'),.4),'cuar':(wt('cuarenta'),.5),'mus':(wt('musculo'),.5),'nueve2':(wt('nueve',after=73),.4),'obras':(wt('obras'),.3),'minas':(wt('minas'),.3),'tej':(wt('tejados'),.3),'piano':(wt('piano'),.5),'quinto':(wt('quinto'),.4),
# S7
'kenia':(wt('Kenia'),.3),'umoja':(wt('Umoja'),.5),'solo7':(wt('solo',after=89),0),'mil':(wt('mil',after=90),.3),'nov90':(wt('noventa',after=92),.5),
# S8
'seguro':(wt('seguro'),.3),'func':(wt('funcionaria'),.4),'coment':(wt('Comenta'),.4),'tard2':(wt('tarde',after=98),.3),'hom3':(wt('hombres',after=100),.6),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'dive','x':180,'y':262,'z':9,'dur':.55},
 {'type':'whip','dur':.35},
 {'type':'push','dir':'left','dur':.45},
 {'type':'ink','x':180,'y':320,'col':'#ff5fb0','dur':.45},
 {'type':'iris','x':180,'y':300,'col':'#1d0f38','dur':.5},
 {'type':'morph','a':[30,215,300,170,18],'col':'#10081f','dur':.55},
 {'type':'push','dir':'up','dur':.45},
 {'type':'iris','x':180,'y':330,'col':'#ff9a3c','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
