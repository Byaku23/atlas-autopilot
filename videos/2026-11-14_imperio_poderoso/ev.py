import sys; sys.path.insert(0,'../eng')
from words import *
DUR=72.4
T=[0,4.47,13.19,21.46,28.89,34.32,37.06,47.25,52.6,60.59,66.73,DUR]
RAW={
# S0
'nec':(wt('necesita'),.5),'aun':(wt('aun'),0),'int':(wt('internet'),.3),'pert':(wt('pertenece'),1.0),
# S1
'diez':(wt('diez'),.5),'agri':(wt('agricultores'),.3),'guar':(wt('guardaron'),0),'grano':(wt('grano'),.4),'rat':(wt('ratones'),.5),'det':(wt('detrás'),0),'gatos':(wt('gatos'),.0),'mont':(wt('monteses'),.6),
# S2
'nadie':(wt('Nadie'),1.0),'dom':(wt('domesticó'),.4),'solos':(wt('solos'),.5),'acer':(wt('acercaban'),0),'caz':(wt('cazar'),.6),'qued':(wt('quedaban'),0),'com2':(wt('comida',after=18),0),'fac':(wt('fácil'),.3),'nos2':(wt('nosotros'),0),'dej':(wt('dejamos'),.5),
# S3
'chip':(wt('Chipre'),.5),'enc':(wt('encontraron'),0),'tumba':(wt('tumba'),.6),'ent':(wt('enterrados'),0),'quin':(wt('quinientos'),.5),'pers':(wt('persona'),0),'gato3':(wt('gato',after=27),0),'junt':(wt('juntos'),.6),
# S4
'egi':(wt('Egipto'),.4),'gatos4':(wt('gatos',after=30),0),'sag':(wt('sagrados'),.5),'dios':(wt('diosa'),.6),'bast':(wt('Bastet'),1.0),
# S5
'pero':(wt('Pero'),0),'truco':(wt('truco'),.3),'cer':(wt('cerebro'),.7),
# S6
'red':(wt('redonda'),.3),'gra':(wt('grandes'),.3),'amp':(wt('amplia'),.3),'beb':(wt('bebé',after=41),.5),'lee':(wt('lee'),0),'tern':(wt('ternura'),0),'full':(wt('y',after=45.2),.7),'cui':(wt('cuidarlos'),.3),
# S7
'mau':(wt('maullido'),.3),'casi':(wt('casi',after=47),0),'ell':(wt('ellos',after=49),0),'des':(wt('desarrollaron'),.3),'hab':(wt('hablar'),0),'nosot':(wt('nosotros',after=51),.6),
# S8
'ron':(wt('ronroneo'),0),'truco8':(wt('truco',after=53),.3),'com8':(wt('comida',after=54),0),'mez':(wt('mezclan'),0),'llan':(wt('llanto'),.5),'beb8':(wt('bebé',after=58),0),'puede':(wt('puede'),0),'ign':(wt('ignorarlo'),.6),
# S9
'nodom':(wt('domesticamos'),.5),'nos9':(wt('Nos',after=61),0),'conq':(wt('conquistaron'),1.0),'sab':(wt('sabemos'),0),'quer':(wt('queremos'),.6),
# S10
'eres':(wt('Eres'),0),'perros':(wt('perros'),0),'gatos10':(wt('gatos',after=67),0),'coment':(wt('Comenta'),.4),'deb':(wt('debate'),0),
}
TRS=[None,
 {'type':'morph','a':[65,186,230,268,18],'col':'#3b1456','dur':.55},
 {'type':'push','dir':'left','dur':.45},
 {'type':'dive','x':180,'y':483,'z':9,'dur':.55},
 {'type':'push','dir':'up','dur':.45},
 {'type':'dive','x':168,'y':230,'z':10,'dur':.55},
 {'type':'zoom','dur':.4},
 {'type':'morph','a':[50,456,260,30,15],'col':'#ff4fa3','dur':.5},
 {'type':'push','dir':'left','dur':.3},
 {'type':'ink','x':180,'y':380,'col':'#ff4fa3','dur':.45},
 {'type':'morph','a':[70,208,220,179,60],'col':'#ff4fa3','dur':.5}]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR)
    for k in sorted(E,key=lambda k:E[k]): print('%-8s %.3f'%(k,E[k]),end=' | ')
