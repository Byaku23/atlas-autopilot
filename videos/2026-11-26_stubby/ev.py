import sys; sys.path.insert(0,'../eng')
from words import *
DUR=70.5667
T=[0,6.1,18.3,30.5,40.15,47.1,57.9,62.18,DUR]
RAW={
# S0
'catorce':(wt('catorce'),.9),'tumba0':(wt('tumba'),.5),'solo':(wt('solo'),.4),'perro5':(wt('perro',after=5),.5),
# S1
'edimburgo':(wt('Edimburgo'),.3),'n1858':(wt('mil',after=6),.7),'muere':(wt('Muere'),.5),'entierran':(wt('entierran'),.4),'greyfriars':(wt('Greyfriars'),.4),'bobby1':(wt('Bobby',after=15),.3),'nosevaa':(wt('va',after=17),.8),
# S2
'guarda':(wt('guarda'),.2),'veces':(wt('veces'),.5),'refugio':(wt('refugio'),.4),'leyenda2':(wt('leyenda',after=20),.3),'canon':(wt('cañón'),.9),'comer':(wt('comer'),.2),'volvia':(wt('volvía'),.3),
# S3
'n1867':(wt('siete',after=30),.7),'ley':(wt('ley'),.3),'licencia':(wt('licencia'),.4),'alcalde':(wt('alcalde'),.3),'pago':(wt('pagó'),.3),'collar':(wt('collar'),.7),
# S4
'murio':(wt('murió',after=40),.6),'n1872':(wt('dos',after=42),.7),'baronesa':(wt('baronesa'),.3),'fuente':(wt('fuente'),.3),'estatua':(wt('estatua'),.5),'calle':(wt('calle'),.5),
# S5
'giro':(wt('giro'),.8),'bondeson':(wt('Bondeson'),.4),'dos2':(wt('dos',after=50),.5),'bobbys':(wt('Bobbys'),.6),'murio5':(wt('murió',after=52),.5),'n1867b':(wt('siete',after=54),.5),'otro':(wt('otro'),.3),'lugar':(wt('lugar'),.4),
# S6
'historia':(wt('historia'),.2),'visitantes':(wt('visitantes'),.4),'alguien':(wt('alguien'),.3),'ganando':(wt('ganando'),.8),
# S7
'lealtad':(wt('lealtad'),.4),'truco':(wt('truco'),.6),'coment':(wt('Cuéntamelo'),.3),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'ink','x':180,'y':330,'col':'#0f1724','dur':.45},
 {'type':'morph','a':[70,452,220,36,12],'col':'#e63946','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'dive','x':180,'y':330,'z':9,'dur':.55},
 {'type':'glitch','dur':.4},
 {'type':'morph','a':[70,452,220,36,12],'col':'#ffc857','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#0f1724','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
