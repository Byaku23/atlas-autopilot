import sys; sys.path.insert(0,'../../eng')
from words import *
DUR=73.77
T=[0,5.88,14.16,23.92,27.42,37.60,48.36,55.26,65.06,DUR]
RAW={
# S0
'eng':(wt('engaña'),.3),'llanto':(wt('llanto'),.5),'ron':(wt('ronroneo'),.9),
# S1
'sig':(wt('significa'),0),'feliz':(wt('feliz'),.3),'pero':(wt('Pero'),0),'miedo':(wt('miedo'),.6),'duele':(wt('duele'),.8),
# S2
'grav':(wt('gravísimo'),.4),'veinte':(wt('veinticinco'),.5),'prod':(wt('produce'),0),'lar':(wt('laringe'),.4),'gar':(wt('garganta'),0),'vel':(wt('velocidad'),.3),
# S3
'gatitos':(wt('gatitos'),0),'maman':(wt('maman'),.3),'madre':(wt('madre'),0),
# S4
'dos9':(wt('nueve'),.3),'karen':(wt('Karen'),0),'suss':(wt('Sussex'),.5),'diez':(wt('diez'),.4),'formas':(wt('formas'),0),'rela':(wt('relajados'),.3),'pid':(wt('pidiendo'),.4),
# S5
'cinc':(wt('cincuenta'),.5),'urg':(wt('urgente',after=40),.6),'agr':(wt('agradable'),.4),'nunca':(wt('nunca'),.3),'gato5':(wt('gato',after=47),.5),
# S6
'sec':(wt('secreto'),.8),'grave':(wt('grave'),0),'agudo':(wt('agudo'),.4),'llan2':(wt('llanto',after=50),.7),'bebe':(wt('bebé'),0),
# S7
'quit':(wt('quitaron'),.5),'menos':(wt('menos',after=59),0),'urg2':(wt('urgente',after=59),.6),'exag':(wt('exagerarlo'),.5),'func':(wt('funciona'),.8),
# S8
'asi':(wt('Así'),0),'quiere':(wt('quiere',after=67),.3),'comida':(wt('comida',after=69),.4),'coment':(wt('Comenta'),.4),'sig2':(wt('Sígueme'),0),
}
TRS=[None,
 {'type':'dive','x':207,'y':284,'z':9,'dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'morph','a':[40,285,280,190,20],'col':'#2b1a0a','dur':.55},
 {'type':'whip','dur':.35},
 {'type':'morph','a':[24,150,312,190,18],'col':'#0c2236','dur':.55},
 {'type':'ink','x':180,'y':300,'col':'#ffa23e','dur':.45},
 {'type':'push','dir':'up','dur':.45},
 {'type':'iris','x':190,'y':462,'col':'#102a3d','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
