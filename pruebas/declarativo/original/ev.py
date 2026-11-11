# Referencia: la escena 0 ORIGINAL con el flujo actual (ev.py + words.build), alargada a 7,5 s para ver la reacción del lobo
import sys; sys.path.insert(0,'../../../eng')
from words import *
DUR=7.5
T=[0,DUR]
RAW={'h_anos':(wt('años'),.5),'h_err':(wt('error'),.3),'h_int':(wt('inteligente'),0),'h_dar':(wt('darle'),0),'h_lobo':(wt('lobo'),1.0)}
TRS=[None]
if __name__=='__main__':
    E,T2=build(T,RAW,TRS,DUR); print(E)
