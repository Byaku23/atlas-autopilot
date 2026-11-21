import sys; sys.path.insert(0,'../eng')
from words import *
DUR=73.73
T=[0,3.76,11.48,15.12,22.98,28.73,37.52,43.08,47.40,57.33,66.03,DUR]
RAW={
# S0
'napo':(wt('Napoleón'),.3),'bajito':(wt('bajito'),.5),'mentira':(wt('mentira'),1.0),
# S1
'pies':(wt('pies'),.3),'dos':(wt('dos'),.3),'franc':(wt('francesas'),.4),'larga':(wt('larga'),.5),'ingl':(wt('inglesa'),.3),
# S2
'conv':(wt('Convertida'),.2),'metro':(wt('metro'),.3),'ocho':(wt('ocho',after=14),1.0),
# S3
'medio':(wt('medio'),.3),'cin58':(wt('cincuenta'),.3),'sese':(wt('sesenta',after=19),.3),'normal':(wt('normal'),.6),'alto':(wt('alto',after=22),.8),
# S4
'quien':(wt('quién'),.3),'peq':(wt('pequeño'),.4),'carica':(wt('caricaturista'),.3),'gill':(wt('Gillray'),1.0),
# S5
'hacia':(wt('Hacia'),.2),'tres':(wt('tres',after=29),.6),'little':(wt('Little'),.8),'dimi':(wt('diminuto'),.5),'furi':(wt('furioso'),.7),'prensa':(wt('prensa'),.4),'copio':(wt('copió'),.4),'anos':(wt('años',after=36),.3),
# S6
'apodo':(wt('apodo'),.3),'cabo':(wt('cabo'),.5),'burla':(wt('burla'),.7),'soldados':(wt('soldados'),.2),'carino':(wt('cariño'),.4),
# S7
'algo':(wt('algo'),.2),'enorme':(wt('enorme'),.8),'oscuro':(wt('oscuro'),.9),'altura':(wt('altura'),.5),
# S8
'cuatro':(wt('cuatro'),.7),'firmo':(wt('firmó'),.3),'igual':(wt('igualdad'),.4),'feud':(wt('feudalismo'),.8),'todav':(wt('Todavía'),.2),'europa':(wt('Europa'),.4),'latina':(wt('Latina'),.6),
# S9
'dos2':(wt('dos',after=58),.4),'esclav':(wt('esclavitud'),1.0),'colon':(wt('colonias'),.3),'exigia':(wt('exigía'),.5),'esposa':(wt('esposa'),.8),
# S10
'genio':(wt('genio'),.5),'tirano':(wt('tirano'),.8),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[80,452,200,36,12],'col':'#d12f3a','dur':.5},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'dive','x':180,'y':300,'z':9,'dur':.55},
 {'type':'iris','x':180,'y':300,'col':'#e8c15a','dur':.5},
 {'type':'push','dir':'up','dur':.45},
 {'type':'morph','a':[80,452,200,36,12],'col':'#0f1f4a','dur':.5},
 {'type':'glitch','dur':.4},
 {'type':'blinds','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
