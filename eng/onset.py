# onset.py DIR ev1 ev2 ... : comprueba que el efecto suena justo en el cuadro del evento (antes ~silencio, después pico)
import sys,json,numpy as np
from scipy.io import wavfile
d=sys.argv[1];E=json.load(open(d+'/ev.json'))['E'];sr,x=wavfile.read(d+'/sfx.wav');x=x.astype(float)/32768
for k in sys.argv[2:]:
    i=int(round(E[k]*sr));pre=np.max(np.abs(x[max(0,i-441):i]));post=np.max(np.abs(x[i:i+2205]))
    print('%-10s t=%.3f pre=%.3f post=%.3f %s'%(k,E[k],pre,post,'OK' if post>max(.05,pre*1.5) else 'REVISAR'))
