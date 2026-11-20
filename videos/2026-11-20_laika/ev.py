import sys; sys.path.insert(0,'../eng')
from words import *
DUR=88.0667
T=[0,10.88,18.21,28.61,34.76,46.95,52.82,62.72,71.54,79.49,DUR]
RAW={
# S0
'perra':(wt('perra'),.3),'kilos':(wt('kilos'),.4),'esp':(wt('espacio'),.5),'bill':(wt('billete'),.4),'vuel':(wt('vuelta'),.8),'laika0':(wt('Laika'),1.0),
# S1
'sem':(wt('semanas'),.4),'sat':(wt('satélite'),.5),'aniv':(wt('aniversario'),.3),'rev':(wt('revolución'),.7),
# S2
'hubo':(wt('tiempo',after=18),0),'reg':(wt('regreso'),1.0),'elig':(wt('Eligieron'),.3),'perras':(wt('perras',after=22),.3),'peq':(wt('pequeños'),.4),'resc':(wt('rescataron'),.3),'calle':(wt('calle'),.6),
# S3
'ent':(wt('entrenó'),.3),'cab':(wt('cabinas'),.3),'peq3':(wt('pequeñas'),.5),'gel':(wt('gelatina'),.5),
# S4
'tres':(wt('tres',after=34),.4),'nov':(wt('noviembre'),0),'desp':(wt('despegó'),1.0),'sput':(wt('Sputnik'),.6),'prim':(wt('primer',after=40),.4),'orb':(wt('orbitar'),.4),'her':(wt('heroína'),.8),
# S5
'ofi':(wt('oficial'),.3),'sem5':(wt('semana',after=49),.3),'dolor':(wt('dolor'),.3),'ment':(wt('mentira'),1.0),
# S6
'dos2':(wt('dos',after=53.4),.5),'ver':(wt('verdad'),.4),'sob':(wt('sobrecalentó'),.6),'muri':(wt('murió'),.8),'horas':(wt('horas'),.3),'asus':(wt('asustada'),.7),
# S7
'cinco':(wt('cinco'),.3),'quem':(wt('quemó'),1.0),'abril':(wt('abril'),.4),'ocho':(wt('ocho',after=70),.4),
# S8
'tres8':(wt('tres',after=72),.5),'anos':(wt('años'),0),'vol':(wt('volvieron'),.3),'dm':(wt('ocho',after=76.5),.5),'mon':(wt('monumento'),.6),
# S9
'ent9':(wt('Entonces'),.3),'her9':(wt('heroína',after=81),.3),'vic':(wt('víctima'),.3),'coment':(wt('Comenta'),.4),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'morph','a':[40,262,280,70,18],'col':'#ff3b4a','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'dive','x':180,'y':300,'z':9,'dur':.55},
 {'type':'whip','dur':.4},
 {'type':'ink','x':180,'y':300,'col':'#ff3b4a','dur':.45},
 {'type':'morph','a':[85,306,190,68,12],'col':'#ff3b4a','dur':.5},
 {'type':'zoom','dur':.4},
 {'type':'push','dir':'up','dur':.45},
 {'type':'iris','x':180,'y':300,'col':'#ffb84a','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
