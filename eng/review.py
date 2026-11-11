# review.py vXX : hojas de contacto de revisión (cuadro 0, mitad de cada escena, mitad de cada transición)
import sys,os,json,subprocess
d=os.path.abspath(sys.argv[1]);J=json.load(open(d+'/ev.json'));T=J['T'];TRS=J['TRS']
D={'morph':.7,'dive':.6,'ink':.6,'push':.45,'spin':.5,'dip':.5,'flash':.34,'whip':.34,'glitch':.34,'iris':.4,'slide':.4,'blinds':.4,'zoom':.4,'static':.34}
ts=[0.0]
for k in range(len(T)-1):
    a,b=T[k],T[k+1];ts+= [round(a+(b-a)*.3,2),round(a+(b-a)*.7,2)]
    if k+1<len(T)-1 and TRS[k+1]:
        w=TRS[k+1].get('dur',D.get(TRS[k+1]['type'],.4));ts.append(round(b-w*.5,2))
ts=sorted(set(t for t in ts if t<J['DUR']-.1))
out=[]
for i in range(0,len(ts),12):
    o=d+'/rev%d.png'%(i//12+1);subprocess.run(['python3',os.path.join(os.path.dirname(__file__),'sheet_t.py'),d+'/index.html',o]+[str(x) for x in ts[i:i+12]],check=True,capture_output=True);out.append(o)
print('\n'.join(out))
