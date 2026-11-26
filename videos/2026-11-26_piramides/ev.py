import sys; sys.path.insert(0,'../eng')
from words import *
DUR=81.0333
T=[0,5.40,19.33,31.80,40.43,48.80,59.98,66.37,72.72,DUR]
RAW={
# S0 gancho
'pir':(wt('pirámides'),.4),'escl':(wt('esclavos'),.9),'verdad':(wt('verdad'),.3),'falso':(wt('falso'),1.0),
# S1 Heródoto
'griego':(wt('griego'),.3),'herodoto':(wt('Heródoto'),.5),'cien':(wt('cien'),.8),'veinte':(wt('veinte',after=10),.4),'gran':(wt('Gran'),.3),'visito':(wt('visitó'),.4),'dosmil':(wt('dos',after=15),.7),'repetia':(wt('Repetía'),.4),
# S2 ciudad
'hoy':(wt('Hoy'),.5),'ciudad':(wt('ciudad'),.6),'panad':(wt('panaderías'),.4),'cocinas':(wt('cocinas'),.3),'barrac':(wt('barracones'),.5),'calcula':(wt('calcula'),.3),'veinte2':(wt('veinte',after=29),.5),'treinta':(wt('treinta'),.6),
# S3 comida y huesos
'comian':(wt('Comían'),.4),'pan':(wt('pan'),.4),'cerveza':(wt('cerveza'),.4),'carne':(wt('carne'),.4),'cement':(wt('cementerio'),.5),'huesos':(wt('huesos'),.6),'sanaron':(wt('sanaron'),.5),'alguien':(wt('Alguien'),.3),'curaba':(wt('curaba'),.4),
# S4 firmas
'dentro':(wt('Dentro'),.4),'firmas':(wt('firmas'),.6),'amigos':(wt('Amigos'),.7),'khufu':(wt('Khufu'),.5),'esclavo2':(wt('esclavo',after=46),.5),'asi':(wt('así'),.4),
# S5 papiro Merer
'papiro':(wt('papiro'),.5),'trece':(wt('trece'),.7),'merer':(wt('Merer'),.5),'barcos':(wt('barcos'),.4),'caliza':(wt('caliza'),.5),'espec':(wt('especialistas'),.8),
# S6 reclutados
'ojo':(wt('ojo'),.7),'contrato':(wt('contrato'),.7),'campesinos':(wt('campesinos'),.4),'reclutados':(wt('reclutados'),.5),'turnos':(wt('turnos'),.5),
# S7 expertos
'unos':(wt('Unos'),.3),'obligaban':(wt('obligaban'),.7),'otros':(wt('Otros'),.3),'orgullosos':(wt('orgullosos',after=70),.6),'voluntarios':(wt('voluntarios'),.5),
# S8 debate
'entonces':(wt('Entonces'),.4),'obligados':(wt('obligados'),.5),'orgullosos2':(wt('orgullosos',after=74.5),.5),'coment':(wt('Cuéntame'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'ink','x':180,'y':330,'col':'#1f3f8a','dur':.45},
 {'type':'morph','a':[70,452,220,36,12],'col':'#d1322e','dur':.55},
 {'type':'dive','x':250,'y':418,'z':9,'dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'glitch','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#ffcf4a','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#1a1006','dur':.5},
 {'type':'whip','dur':.34}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-10s %.3f'%(k,E[k]),end=' | ')
