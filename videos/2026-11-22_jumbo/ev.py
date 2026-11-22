import sys; sys.path.insert(0,'../eng')
from words import *
DUR=91.37
T=[0,5.30,13.31,22.95,32.51,44.80,49.69,53.15,63.05,68.73,79.58,83.80,DUR]
RAW={
# S0
'famoso':(wt('famoso'),.3),'dicc':(wt('diccionario'),.2),'jumbo':(wt('Jumbo',after=4),1.0),
# S1
'sudan':(wt('Sudán'),.3),'caz':(wt('Cazadores'),.4),'mataron':(wt('mataron'),.6),'madre':(wt('madre'),.4),'llev':(wt('llevaron'),.3),'cria':(wt('cría'),.8),
# S2
'zoo':(wt('zoológico',after=16),.3),'flaco':(wt('flaco'),.3),'seis':(wt('seis'),.6),'tonel':(wt('toneladas'),.5),'londres':(wt('Londres',after=16),.2),
# S3
'volvio':(wt('volvió'),.3),'desgast':(wt('Desgastaba'),.4),'miedo':(wt('miedo'),.5),'dano':(wt('daño'),1.0),
# S4
'vend':(wt('vendieron'),.6),'diez':(wt('diez'),.4),'dolares':(wt('dólares'),.3),'londres4':(wt('Londres',after=38),.2),'estallo':(wt('estalló'),1.0),'miles':(wt('Miles'),.3),'cartas':(wt('cartas'),.3),'protestas':(wt('protestas'),.5),'reina':(wt('reina'),.4),'quejo':(wt('quejó'),.6),
# S5
'recup':(wt('recuperó'),.3),'tres':(wt('tres'),.4),'sem':(wt('semanas'),.5),
# S6
'recorrio':(wt('recorrió'),.2),'tren6':(wt('tren',after=50),.2),
# S7
'quince':(wt('quince'),.2),'canada':(wt('Canadá'),.4),'carga':(wt('carga'),.3),'atro':(wt('atropelló'),1.0),'tenia':(wt('Tenía'),.3),'anos24':(wt('años',after=62),.5),
# S8
'conto':(wt('contó'),.2),'murio':(wt('murió'),.3),'salv':(wt('salvando'),.4),'versi':(wt('versión'),.3),'pudo':(wt('pudo'),.2),'inv':(wt('inventada'),.9),
# S9
'esq':(wt('esqueleto'),.4),'museo':(wt('museo'),.3),'quemo':(wt('quemó'),.7),'n75':(wt('cinco',after=78),.8),
# S10
'jumbo10':(wt('jumbo',after=80),.7),'gigante':(wt('gigante'),.4),'huevos':(wt('huevos'),.4),'jet':(wt('jet'),.4),
# S11
'explot':(wt('explotó'),.4),'inmortal':(wt('inmortal'),.6),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#d9363e','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'dive','x':180,'y':300,'z':9,'dur':.55},
 {'type':'morph','a':[80,462,200,36,12],'col':'#d9363e','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#0b1f24','dur':.5},
 {'type':'ink','x':180,'y':300,'col':'#1d4a40','dur':.45},
 {'type':'push','dir':'up','dur':.45},
 {'type':'flash','dur':.4},
 {'type':'blinds','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
