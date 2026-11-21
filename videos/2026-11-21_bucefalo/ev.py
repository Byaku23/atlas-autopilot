import sys; sys.path.insert(0,'../eng')
from words import *
DUR=81.7
T=[0,4.31,11.65,18.47,25.27,32.21,37.71,46.87,52.49,59.37,67.89,74.47,DUR]
RAW={
# S0
'cab':(wt('caballo'),.4),'montar':(wt('montar'),.2),'nino':(wt('niño'),.3),'logro':(wt('logró'),1.0),
# S1
'bucef':(wt('Bucéfalo'),.9),'trat':(wt('tratante'),.3),'ofre':(wt('ofreció'),.3),'trece':(wt('trece'),.5),'tal':(wt('talentos'),.5),'fort':(wt('fortuna'),.6),
# S2
'encab':(wt('encabritaba'),.8),'nadie':(wt('nadie',after=14),.3),'corte':(wt('corte'),.2),'rech':(wt('rechazó'),1.0),
# S3
'yo':(wt('Yo'),.3),'domo':(wt('domo'),.3),'ellos':(wt('ellos'),.2),'apost':(wt('apostó'),.7),'pag':(wt('pagaría'),.2),'entero':(wt('entero'),.3),'frac':(wt('fracasaba'),.2),
# S4
'ento':(wt('Entonces'),.2),'vio':(wt('vio'),.5),'todos':(wt('todos'),.2),'alto':(wt('alto'),.3),'bucef4':(wt('Bucéfalo',after=28.5),.4),'miedo':(wt('miedo'),.5),'sombra':(wt('sombra'),1.0),
# S5
'giro':(wt('giró'),.5),'sol':(wt('sol'),.6),'hablo':(wt('habló'),.2),'calma':(wt('calma'),.3),'salto':(wt('saltó'),.6),'lomo':(wt('lomo'),.9),
# S6
'orgul':(wt('orgulloso'),.3),'plut':(wt('Plutarco'),.3),'reino':(wt('reino'),.4),'digno':(wt('digno'),.3),'maced':(wt('Macedonia',after=43),.3),'peq':(wt('pequeña'),.6),
# S7
'llevo':(wt('llevó'),.3),'guerra':(wt('guerra'),.5),'anos7':(wt('años',after=48),.3),'grecia':(wt('Grecia'),.4),'asia':(wt('Asia'),.6),
# S8
'murio':(wt('Murió'),.8),'rio':(wt('río'),.2),'hidas':(wt('Hidaspes'),.4),'ano8':(wt('año',after=54),.2),'n326':(wt('326'),.5),'trein':(wt('treinta'),.4),
# S9
'fuentes':(wt('fuentes'),.3),'acuerdo':(wt('acuerdo'),.4),'arriano':(wt('Arriano'),.4),'canse':(wt('cansancio'),.3),'vejez':(wt('vejez'),.3),'otros':(wt('otros'),.4),'heridas':(wt('heridas'),.5),'batalla':(wt('batalla'),.4),
# S10
'lloro':(wt('lloró'),.3),'fundo':(wt('fundó'),.5),'ciudad10':(wt('ciudad',after=70),.2),'bucefala':(wt('Bucéfala'),1.0),'pak':(wt('Pakistán'),.5),
# S11
'merece':(wt('merece'),.4),'ciudad11':(wt('ciudad',after=75),.3),'nombre':(wt('nombre',after=76),.3),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'whip','dur':.4},
 {'type':'morph','a':[90,452,180,36,12],'col':'#ffd27a','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'zoom','dur':.4},
 {'type':'dive','x':240,'y':282,'z':9,'dur':.55},
 {'type':'morph','a':[80,462,200,36,12],'col':'#ffd27a','dur':.5},
 {'type':'iris','x':180,'y':300,'col':'#e0414a','dur':.5},
 {'type':'push','dir':'up','dur':.45},
 {'type':'flash','dur':.4},
 {'type':'ink','x':180,'y':300,'col':'#37c8d4','dur':.45},
 {'type':'blinds','dur':.45}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
