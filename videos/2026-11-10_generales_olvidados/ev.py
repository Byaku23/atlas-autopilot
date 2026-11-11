import sys; sys.path.insert(0,'../eng')
from words import *
DUR=72.2667
T=[0,wt('El')-.05,wt('Álvaro')-.05,wt('Blas')-.05,wt('San')-.05,wt('y',after=51.3)-.05,wt('Cinco',after=60)-.05,DUR]
RAW={
# S0
'nap':(wt('Napoleón'),.6),'ale':(wt('Alejandro'),.4),'esp':(wt('España'),.3),'ame':(wt('América'),.3),'gen':(wt('generales'),.4),'nad':(wt('nadie'),0),'ust':(wt('Ustedes'),0),'com':(wt('comentarios'),.3),'cin':(wt('cinco'),.8),
# S1
'gran':(wt('Gran'),.5),'cer':(wt('Ceriñola'),.5),'tres':(wt('tres'),0),'fue':(wt('fuego'),.4),'arc':(wt('arcabuces'),.9),'cab':(wt('caballería'),.5),
# S2
'baz':(wt('Bazán'),.5),'lep':(wt('Lepanto'),.6),'azo':(wt('Azores'),.6),'cerv':(wt('Cervantes'),0),'jam':(wt('jamás'),.9),
# S3
'lez':(wt('Lezo'),.5),'pie':(wt('pierna'),.4),'ojo':(wt('ojo'),.4),'bra':(wt('brazo'),.4),'car':(wt('Cartagena'),.4),'dos':(wt('doscientos'),.7),'bri':(wt('británicos'),0),'gan':(wt('ganó',after=43),1.0),
# S4
'mar':(wt('Martín'),.5),'and':(wt('Andes'),.5),'cin2':(wt('cinco',after=48),.4),'chi':(wt('Chile'),.8),
# S5
'bol':(wt('Bolívar'),.6),'seis':(wt('seis'),.5),'ven':(wt('Venezuela'),.4),'col':(wt('Colombia'),.4),'ecu':(wt('Ecuador'),.4),'per':(wt('Perú'),.4),'bov':(wt('Bolivia'),.4),'pan':(wt('Panamá'),.6),
# S6
'cing':(wt('generales',after=60),.4),'ni':(wt('Ni'),0),'nap2':(wt('Napoleón',after=62),.6),'lib':(wt('libros'),.3),'cual':(wt('Cuál'),0),'mej':(wt('mejor'),.4),'coment':(wt('Comenta'),.5),'sig':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'morph','a':[130,222,100,116,18],'col':'#f2b84b','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'ink','x':180,'y':330,'col':'#e0523c','dur':.5},
 {'type':'dive','x':96,'y':236,'z':9,'dur':.55},
 {'type':'whip','dur':.4},
 {'type':'morph','a':[90,478,180,36,18],'col':'#f2b84b','dur':.55}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    print([round(x,2) for x in T])
    for k in sorted(E,key=lambda k:E[k]): print('%-6s %.3f'%(k,E[k]),end=' | ')
