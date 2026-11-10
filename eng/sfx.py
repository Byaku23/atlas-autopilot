# sfx.py — librería de sonido sintetizado (sin copyright) para Atlas del saber v2
# Uso:   import sys; sys.path.insert(0,'../eng'); from sfx import *
#        init(DUR); setMusic(bpm, prog)  ... P(fn,t,g) / Pn(fn,'evento',g) ... capas de música ... save()
import numpy as np
from scipy import signal
from scipy.io import wavfile
sr=44100
B={'N':0,'SFX':None,'M':None,'E':{},'BPM':90,'PROG':None,'SPAN':4}
rng=np.random.default_rng(11)
mid=lambda m:440*2**((m-69)/12)
def init(dur,E=None):
    B['N']=int(round(dur*sr)); B['SFX']=np.zeros(B['N']); B['M']=np.zeros(B['N']); B['DUR']=dur
    if E is not None: B['E']=E
def fr(t): return round(t*30)/30
def put(buf,x,t0,g=1.0):
    i=int(round(t0*sr))
    if i>=len(buf) or i+len(x)<=0: return
    if i<0: x=x[-i:]; i=0
    j=min(len(buf),i+len(x)); buf[i:j]+=x[:j-i]*g
def lp(x,f,o=2): b,a=signal.butter(o,min(f,sr/2-100)/(sr/2),'low'); return signal.lfilter(b,a,x)
def hp(x,f,o=2): b,a=signal.butter(o,f/(sr/2),'high'); return signal.lfilter(b,a,x)
def bp(x,f1,f2,o=2): b,a=signal.butter(o,[f1/(sr/2),min(f2,sr/2-100)/(sr/2)],'band'); return signal.lfilter(b,a,x)
def tt(d): return np.arange(int(d*sr))/sr
def nz(d): return rng.standard_normal(int(d*sr))
def ex(d,k): return np.exp(-tt(d)*k)
def sine(f,d): return np.sin(2*np.pi*f*tt(d))
def saw(f,d,det=0.0): return 2*((f*(1+det)*tt(d))%1)-1
def sq(f,d): return np.sign(np.sin(2*np.pi*f*tt(d)))
def sweep(f0,f1,d):
    t=tt(d); f=f0*(f1/f0)**(t/max(d,1e-6)); return np.sin(2*np.pi*np.cumsum(f)/sr)
def glide(fs,d):  # recorre una lista de frecuencias (interpolación) -> seno
    t=tt(d); f=np.interp(t,np.linspace(0,d,len(fs)),fs); return np.sin(2*np.pi*np.cumsum(f)/sr),f
def fade(x,a=.01,r=.05):
    n=len(x); y=x.copy(); na=min(n,int(a*sr)); nr=min(n,int(r*sr))
    if na: y[:na]*=np.linspace(0,1,na)
    if nr: y[-nr:]*=np.linspace(1,0,nr)
    return y
def reverb(x,d=1.6,wet=.25,k=3.0):
    ir=nz(d)*np.exp(-tt(d)*k)*.25; ir=lp(ir,4500); y=signal.fftconvolve(x,ir)[:len(x)]
    return x*(1-wet)+y*wet*np.max(np.abs(x)+1e-9)/(np.max(np.abs(y))+1e-9)
def pad_to(x,d): y=np.zeros(int(d*sr)); n=min(len(x),len(y)); y[:n]=x[:n]; return y
# ======================= EFECTOS =======================
def boom(d=1.2,f=75,g=1.0): return (sweep(f*1.8,f*.4,d)*ex(d,4.5)+lp(nz(d),520)*ex(d,6)*.8+hp(nz(d),2500)*ex(d,40)*.4)*g
def stamp(): d=.4; return (sweep(150,45,d)*ex(d,14)*1.1+hp(nz(d),1500)*ex(d,110)*.5+lp(nz(d),400)*ex(d,25)*.4)
def impact(g=1.0): d=1.4; y=np.zeros(int(d*sr)); put(y,stamp(),0,.9); put(y,boom(1.3,50,.9),0,.8); return y*g
def whoosh(d=.6,up=True):
    x=nz(d); out=np.zeros_like(x); blk=512
    for k in range(0,len(x),blk):
        p=k/len(x); p=p if up else 1-p; f=300+4200*np.sin(np.pi*min(1,p))**1.5
        b,a=signal.butter(2,[max(150,f*.5)/(sr/2),min(f*1.6,20000)/(sr/2)],'band'); out[k:k+blk]=signal.lfilter(b,a,x[k:k+blk])
    e=np.sin(np.pi*np.minimum(1,tt(d)/d)); return out*e**1.4*3
def swish(): return whoosh(.22,True)*.8
def riser(d,f0=200,f1=1800,g=.4): return fade(sweep(f0,f1,d)*np.minimum(1,tt(d)/d)**2*g+hp(nz(d),2000)*np.minimum(1,tt(d)/d)**3*g*.4,.01,.05)
def suck(d=.8): # "reverse" que termina de golpe (para llegar a un corte)
    e=np.minimum(1,tt(d)/d)**3; return fade(bp(nz(d),400,9000)*e*.7+sweep(120,600,d)*e*.3,.01,.005)
def downsweep(d=1.6): return fade(sweep(900,60,d)*ex(d,1.4)*.9,.01,.3)
def ping(f=1600,d=.5): return (np.sin(2*np.pi*f*tt(d))+.4*np.sin(2*np.pi*f*2.01*tt(d)))*ex(d,9)*.5
def pop(f=900): d=.12; return fade(sweep(f*.6,f*1.5,d)*ex(d,35),.001,.02)*.6
def click(): d=.03; return fade(hp(nz(d),2000)*ex(d,250)*.9+np.sin(2*np.pi*1800*tt(d))*ex(d,200)*.3,.0003,.005)
def tick(): d=.05; return fade(hp(nz(d),1800)*ex(d,70)+np.sin(2*np.pi*1200*tt(d))*ex(d,90)*.4,.0005,.01)*.8
def cntTick(): d=.03; return fade(np.sin(2*np.pi*2400*tt(d))*ex(d,120),.0005,.005)*.4
def ding(f=1320,d=1.4): t=tt(d); return (np.sin(2*np.pi*f*t)+.35*np.sin(2*np.pi*f*2.76*t)*np.exp(-t*3)+.2*np.sin(2*np.pi*f*5.4*t)*np.exp(-t*6))*np.exp(-t*2.6)*.45
def notif(): y=np.zeros(int(.7*sr)); put(y,ding(1568,.5),0,.6); put(y,ding(2093,.6),.09,.6); return y
def chime(f=1200,d=1.2): return (np.sin(2*np.pi*f*tt(d))+.4*np.sin(2*np.pi*f*2.5*tt(d)))*ex(d,4)*.4
def bell(f=520,d=3.0):
    t=tt(d); return sum(a*np.sin(2*np.pi*f*r*t)*np.exp(-t*k) for a,r,k in [(1,1,1.2),(.6,2.76,1.8),(.4,5.4,2.6),(.25,8.9,3.6)])*.5
def gong(f=110,d=4.0): return reverb(bell(f,d)*1.2,2.4,.3,1.6)
def sparkle(d=1.2):
    x=np.zeros(int(d*sr))
    for k in range(18): put(x,np.sin(2*np.pi*rng.uniform(2500,5200)*tt(.25))*ex(.25,18)*.3,rng.uniform(0,max(.01,d-.25)),1)
    return x
def boing(f=180,d=.6): t=tt(d); fq=f*(1+.6*np.exp(-t*6)*np.sin(2*np.pi*14*t)); return fade(np.sin(2*np.pi*np.cumsum(fq)/sr)*np.exp(-t*4)*.7,.002,.05)
def shatter(): d=.9; return (hp(nz(d),3000)*ex(d,9)*.6+hp(nz(d),6000)*ex(d,16)*.4+boom(d,95,.5))
def scratch(d): x=bp(nz(d),2500,7000); a=np.abs(lp(nz(d),14))*6; return fade(x*np.minimum(1,a),.01,.1)*.35
def hiss(d): return fade(hp(nz(d),2500)*(.5+.5*np.sin(tt(d)*3)),.3,.5)*.35
def steam(d): return fade(bp(nz(d),2500,9000)*.45*np.minimum(1,tt(d)/.1),.05,.3)
def wind(d): return fade(bp(nz(d),200,1400)*(.5+.5*np.sin(tt(d)*1.3+1))*.6,.8,1.0)
def rain(d): return fade(hp(nz(d),3000)*.25+bp(nz(d),800,2500)*.1,.5,.6)
def waves(d): t=tt(d); return fade(lp(nz(d),700)*(.5+.5*np.sin(2*np.pi*.35*t))*.6,.6,.8)
def crackle(d,dens=40):
    x=np.zeros(int(d*sr))
    for i in range(int(d*dens)):
        t_=rng.uniform(0,max(.01,d-.05)); put(x,hp(nz(.02),3000)*ex(.02,150)*rng.uniform(.3,1),t_,1); put(x,lp(nz(.04),700)*ex(.04,80)*.3,t_,1)
    return x*.6+fade(lp(nz(d),500)*.25,.3,.3)
def heart(): d=.5; lub=sweep(90,45,d)*ex(d,16); dub=np.zeros_like(lub); sec=sweep(80,40,d)*ex(d,18)*.7; dub[int(.2*sr):]=sec[:len(dub)-int(.2*sr)]; return (lub+dub)*1.1
def thunder(d=3.5): return reverb(lp(nz(d),260)*ex(d,.9)*(1+.4*np.sin(tt(d)*9))+boom(d,45,.6),2.5,.3,1.6)
def coin(): d=.5; f=rng.uniform(2200,3800); return (np.sin(2*np.pi*f*tt(d))+.5*np.sin(2*np.pi*f*1.51*tt(d)))*ex(d,12)*.3
def cashreg():
    y=np.zeros(int(1.2*sr)); put(y,lp(nz(.15),1500)*ex(.15,30)*.6,0,1); put(y,clang(),.05,.6); put(y,ding(2637,1.0),.12,.7); put(y,ding(3136,1.0),.2,.5); return y
def clang(): d=.5; f=rng.uniform(1800,3200); return (hp(nz(d),2500)*ex(d,60)*.4+(np.sin(2*np.pi*f*tt(d))+.5*np.sin(2*np.pi*f*2.7*tt(d)))*ex(d,14)*.4)
def knock(): d=.18; return (bp(nz(d),300,1400)*ex(d,38)*1.0+sweep(220,110,d)*ex(d,30)*.6)
def clunk(): d=.3; return (lp(nz(d),900)*ex(d,30)*.9+sweep(160,70,d)*ex(d,20)*.8+hp(nz(d),3000)*ex(d,200)*.3)
def step(): d=.14; return lp(nz(d),900)*ex(d,40)*.8+hp(nz(d),2500)*ex(d,120)*.25
def paper(d=.5): return fade(bp(nz(d),1500,8000)*np.abs(lp(nz(d),30))*3*.4,.01,.08)
def shutter(): d=.25; y=np.zeros(int(d*sr)); put(y,click(),0,1); put(y,hp(nz(.08),2000)*ex(.08,40)*.6,.05,1); put(y,click(),.09,.7); return y
def typew(): d=.06; return fade(hp(nz(d),1500)*ex(d,80)*.9+np.sin(2*np.pi*900*tt(d))*ex(d,120)*.3,.0005,.01)
def drip(): d=.3; return fade(sweep(900,1800,d)*ex(d,22)*.6,.001,.05)
def bubble(): d=.18; return fade(sweep(300,1100,d)*ex(d,16)*.6,.002,.03)
def glitch(d=.4):
    x=np.zeros(int(d*sr)); k=0
    while k<len(x):
        n=int(rng.uniform(.01,.05)*sr); seg=(np.sign(np.sin(2*np.pi*rng.uniform(80,1200)*np.arange(n)/sr))*rng.uniform(.2,.6)) if rng.random()<.5 else hp(rng.standard_normal(n),1500)*.4
        x[k:k+n]=seg[:len(x)-k]*(rng.random()<.8); k+=n
    return fade(x,.002,.02)*.7
def zap(d=.5): t=tt(d); return fade(np.sign(np.sin(2*np.pi*(120+40*np.sin(t*60))*t))*ex(d,6)*.4+hp(nz(d),3000)*ex(d,12)*.3,.002,.05)
def arc(d=1.0): # arco eléctrico chisporroteante
    t=tt(d); gate=(lp(np.abs(nz(d)),40)*6>.9).astype(float); x=hp(nz(d),1800)*gate*.6+np.sign(np.sin(2*np.pi*120*t))*.12*gate+hp(nz(d),5000)*.08
    return fade(x,.005,.05)
def hum(d,f=50): t=tt(d); return fade((np.sin(2*np.pi*f*t)+.5*np.sin(2*np.pi*2*f*t)+.25*np.sin(2*np.pi*3*f*t))*.25,.3,.3)
def buzz(): d=.35; return fade(np.sign(np.sin(2*np.pi*110*tt(d)))*.5,.005,.05)*.6
def modem(d=1.2): # chirridos de datos (wifi / módem)
    x=np.zeros(int(d*sr)); t0=0
    while t0<d-.04:
        seg=min(rng.uniform(.03,.12),d-t0); put(x,np.sin(2*np.pi*rng.choice([1200,1800,2400,980,2100])*tt(seg))*.35,t0,1); t0+=seg
    return fade(x+hp(nz(d),3000)*.05,.01,.05)
def radioTune(d=1.0): t=tt(d); s,_=glide([600,2200,900,1600],d); return fade(s*.2+hp(nz(d),1500)*(.3+.2*np.sin(t*23)),.02,.1)*.6
def beep(f=700,ms=80): d=ms/1000; return fade(np.sin(2*np.pi*f*tt(d)),.004,.006)*.5
def howl(d=2.4,f0=420): # aullido de lobo
    s,f=glide([f0*.85,f0*1.45,f0*1.55,f0*1.3,f0*.9],d); t=tt(d); s=np.sin(2*np.pi*np.cumsum(f*(1+.012*np.sin(2*np.pi*5.5*t)))/sr)
    x=s+.35*np.sin(2*np.pi*np.cumsum(2*f)/sr)+.1*bp(nz(d),600,2500); e=np.minimum(1,t/.35)*np.minimum(1,(d-t)/.6); return reverb(fade(x*e*.45,.05,.2),2.4,.35,1.4)
def bark():
    d=.35; t=tt(d); f=420*np.exp(-t*3); ph=np.cumsum(f)/sr; return fade((np.sin(2*np.pi*ph)+.5*bp(nz(d),400,2000))*np.exp(-t*9)*.6,.005,.05)
def growl(d=1.0): t=tt(d); x=bp(nz(d),80,500)*(1+.6*np.sin(2*np.pi*28*t))*.7; return fade(x,.1,.2)
def meow(d=.7,f0=620):
    s,f=glide([f0*.9,f0*1.35,f0*1.25,f0*.8],d); t=tt(d); x=2*((np.cumsum(f)/sr)%1)-1; x=bp(x,500,1400)*1.0+bp(x,1800,3200)*.5
    e=np.minimum(1,t/.06)*np.minimum(1,(d-t)/.2); return reverb(fade(x*e*.5,.01,.05),1.0,.2,3)
def purr(d=1.5): t=tt(d); am=(.5+.5*np.sin(2*np.pi*24*t))**2*(.6+.4*np.sin(2*np.pi*.8*t)); return fade(lp(nz(d),300)*am*1.2+np.sin(2*np.pi*48*t)*am*.2,.2,.3)
def babycry(d=1.2): s,f=glide([420,520,470,500,380],d); t=tt(d); x=2*((np.cumsum(f*(1+.03*np.sin(2*np.pi*7*t)))/sr)%1)-1; x=bp(x,700,1600)+bp(x,2400,3800)*.4; e=np.minimum(1,t/.08)*np.minimum(1,(d-t)/.25); return fade(x*e*.45,.01,.05)
def whistle(d=.8): t=tt(d); f=2900*(1+.03*np.sign(np.sin(2*np.pi*28*t))); x=np.sin(2*np.pi*np.cumsum(f)/sr)+.2*hp(nz(d),3000); return fade(x*.35,.01,.06)
def crowd(d): x=bp(nz(d),250,1800)*(.6+.4*np.sin(tt(d)*5)); return fade(x,.3,.5)*.6
def cheer(d=2.0): t=tt(d); e=np.minimum(1,t/.25)*np.exp(-np.maximum(0,t-d*.5)*1.6); return fade((bp(nz(d),300,2500)*.8+bp(nz(d),1500,5000)*.3)*e*.7,.05,.3)
def kickball(): d=.25; return lp(nz(d),700)*ex(d,30)*.9+sweep(140,60,d)*ex(d,20)*.8
def batcrack(): d=.4; y=hp(nz(d),1200)*ex(d,60)*1.1+np.sin(2*np.pi*1900*tt(d))*ex(d,40)*.3+sweep(400,200,d)*ex(d,30)*.3; return reverb(y,.8,.25,4)
def glovepop(): d=.2; return lp(nz(d),1600)*ex(d,45)*1.1+sweep(260,90,d)*ex(d,35)*.6
def flameOn(): d=1.0; return fade(lp(nz(d),1200)*np.minimum(1,tt(d)/.15)*np.exp(-tt(d)*1.2)*.8,.01,.2)
def rumble(d):
    t=tt(d); x=lp(nz(d),140)*1.6+np.sin(2*np.pi*38*t)*.6; x*=(1+.25*np.sin(2*np.pi*7*t)); return fade(x,.4,.6)*.6
def creak(d): t=tt(d); x=bp(nz(d),130,450)*(.5+.5*np.sin(2*np.pi*(2+t)*t))*.8; return fade(x,.2,.5)*.8
def engine(d,f0=70,f1=70):
    t=tt(d); f=np.linspace(f0,f1,len(t)); ph=np.cumsum(f)/sr; x=(2*(ph%1)-1)+.5*np.sin(2*np.pi*ph*2); x=lp(x,700)*(1+.35*np.sin(2*np.pi*14*t)); return fade(x*.5,.2,.3)
def sub(d=1.5,f=40): t=tt(d); return fade(np.sin(2*np.pi*f*t)*np.exp(-t*1.5)*.9,.005,.2)
def tada(): d=1.4; return reverb(sum(np.sin(2*np.pi*mid(n)*tt(d))*np.exp(-tt(d)*2.5) for n in [72,76,79,84])/4,1.4,.3,2)
def fanfare(root=50,d=2.4):
    x=np.zeros(int(d*sr))
    for k,(n,dd) in enumerate([([0,7],.28),([0,7,12],.28),([4,7,12,16],1.8)]):
        st=[0,.3,.6][k]
        for m in n: put(x,lp(saw(mid(root+m),dd+.4,.004),2600,2)*np.minimum(1,tt(dd+.4)/.03)*np.exp(-np.maximum(0,tt(dd+.4)-dd*.5)*2.2),st,.5/len(n)*2)
    return reverb(x,1.8,.3,2)
def brassSting(root=50,d=2.0):
    n=[0,7,12,16,19]; x=sum(lp(saw(mid(root+k),d,det=.004),2400,2) for k in n)/len(n); e=np.minimum(1,tt(d)/.35)**1.5*np.exp(-np.maximum(0,tt(d)-.6)*1.3); return reverb(x*e*.9,1.8,.3,2)
def stinger(root=45): d=2.2; x=sum(lp(saw(mid(root+k),d,.006),3000,2) for k in [0,1,6,12])/4; e=np.minimum(1,tt(d)/.02)*np.exp(-tt(d)*1.6); return reverb(x*e,2.0,.35,1.6)
# ======================= COLOCACIÓN =======================
def P(f,t0,g=1.0): put(B['SFX'],f() if callable(f) else f,fr(t0),g)
def Pn(f,name,g=1.0,off=0.0): P(f,B['E'][name]+off,g)           # golpe EXACTO en el cuadro del evento
def Pe(f,name,dur,g=1.0): P(f,B['E'][name]-dur,g)               # el sonido TERMINA en el evento (risers, whoosh, suck)
def counter(t0,t1,step=2/30,g=.35):
    t=fr(t0)
    while t<t1: P(cntTick,t,g); t+=step
def trSfx(TRS,E,g=1.0):  # sonido automático para cada transición
    for i,tr_ in enumerate(TRS):
        if not tr_ or i==0: continue
        ty=tr_['type']; Ti=E['tr%d'%i]; W=tr_.get('dur',{'morph':.7,'dive':.6,'ink':.6,'push':.45,'spin':.5,'dip':.5,'flash':.34,'whip':.34,'glitch':.34,'iris':.4,'slide':.4,'blinds':.4,'zoom':.4,'static':.34}.get(ty,.4))
        if ty in('morph','dive','zoom','iris'): P(lambda: riser(W,180,1600,.35),Ti-W,.55*g); P(swish,Ti-W*.5,.5*g); P(lambda: boom(.8,60,.5),Ti,.35*g)
        elif ty in('push','whip','slide','spin'): P(lambda: whoosh(W,True),Ti-W,.65*g); P(lambda: boom(.6,80,.5),Ti,.3*g)
        elif ty=='ink': P(lambda: whoosh(W,False),Ti-W,.5*g); P(bubble,Ti-W*.6,.4*g)
        elif ty=='glitch': P(lambda: glitch(W),Ti-W,.6*g)
        elif ty=='static': P(lambda: radioTune(W),Ti-W,.6*g)
        elif ty=='flash': P(lambda: riser(W/2,300,2500,.4),Ti-W,.6*g); P(lambda: sparkle(1.0),Ti-W/2,.5*g)
        elif ty=='blinds':
            for k in range(8): P(tick,Ti-W+k*.035,.5*g)
        elif ty in('dip','fog'): P(lambda: whoosh(W,False),Ti-W,.35*g)
# ======================= MÚSICA =======================
def setMusic(bpm,prog,span_beats=4):  # prog: lista de (nombre, raíz_midi, [notas_midi])
    B['BPM']=bpm; B['PROG']=prog; B['SPAN']=span_beats
def BEAT(): return 60/B['BPM']
def chord_at(t,prog=None):
    prog=prog or B['PROG']; span=B['SPAN']*BEAT(); return prog[int(t/span+1e-6)%len(prog)]
def M(x,t,g): put(B['M'],x,t,g)
def layer_pad(t0,t1,g,prog=None,lpf=1700):
    span=B['SPAN']*BEAT(); t=t0
    while t<t1-.05:
        nxt=min(t1,(int(t/span+1e-6)+1)*span); name,root,notes=chord_at(t,prog); d=nxt-t+.6
        x=sum(lp(saw(mid(n),d,.003),lpf,2)+lp(saw(mid(n),d,-.004),lpf,2) for n in notes)/(2*len(notes))
        e=np.minimum(1,tt(d)/.6)*np.minimum(1,(d-tt(d))/.6); M(x*e,t,g); t=nxt
def layer_drone(t0,t1,g,prog=None):
    span=B['SPAN']*BEAT(); t=t0
    while t<t1-.05:
        nxt=min(t1,(int(t/span+1e-6)+1)*span); name,root,notes=chord_at(t,prog); d=nxt-t+.4
        x=lp(saw(mid(root),d),170,2)+.7*np.sin(2*np.pi*mid(root)*tt(d)); e=np.minimum(1,tt(d)/.3)*np.minimum(1,(d-tt(d))/.4); M(x*e,t,g); t=nxt
def pluck(f,d=1.4): t=tt(d); return sum(a*np.sin(2*np.pi*f*k*t)*np.exp(-t*(2.2+k*1.3)) for a,k in [(1,1),(.5,2),(.25,3),(.12,4)])
def layer_arp(t0,t1,g,step=1,prog=None,oct=12,pat=(0,1,2,3,2,1)):
    t=t0; k=0
    while t<t1-.05:
        name,root,notes=chord_at(t,prog); n=notes[pat[k%len(pat)]%len(notes)]+oct; M(reverb(pluck(mid(n)),1.4,.25,3),t,g*(1.0 if k%len(pat)==0 else .7)); t+=BEAT()/2*step; k+=1
def layer_ost(t0,t1,g,div=4,prog=None):
    t=t0; k=0; stp=BEAT()/div
    while t<t1-.02:
        name,root,notes=chord_at(t,prog); f=mid(root+12+(7 if k%4==2 else 0)); d=stp*.9
        M(lp(saw(f,d),1500,2)*np.exp(-tt(d)*7),t,g*(1.0 if k%4==0 else .65)); t+=stp; k+=1
def layer_bass(t0,t1,g,prog=None,pat=(1,0,0,1,0,0,1,0),div=2):
    t=t0; k=0; stp=BEAT()/div
    while t<t1-.02:
        name,root,notes=chord_at(t,prog)
        if pat[k%len(pat)]: d=stp*1.6; M(lp(saw(mid(root+12),d),420,2)*np.exp(-tt(d)*4)+np.sin(2*np.pi*mid(root)*tt(d))*np.exp(-tt(d)*4)*.6,t,g)
        t+=stp; k+=1
def bells(t0,t1,g,prog=None,seed=2,oct=24):
    r=np.random.default_rng(seed); t=t0
    while t<t1-.05:
        name,root,notes=chord_at(t,prog); n=int(r.choice(notes))+oct; d=.8
        M((np.sin(2*np.pi*mid(n)*tt(d))+.3*np.sin(2*np.pi*mid(n)*4*tt(d)))*np.exp(-tt(d)*5)*.5,t,g); t+=BEAT()/2*float(r.choice([1,1,2]))
def melody(t0,t1,g,scale,seed=1,inst='pluck',oct=0):
    r=np.random.default_rng(seed); t=t0; i=len(scale)//2
    while t<t1-.3:
        d=float(r.choice([.5,1,1,1.5,2]))*BEAT(); d=min(d,t1-t)
        if r.random()<.15: t+=d; continue
        i=int(np.clip(i+r.choice([-2,-1,-1,0,1,1,2]),0,len(scale)-1)); f=mid(scale[i]+oct)
        x=pluck(f,d+.6) if inst=='pluck' else (np.sin(2*np.pi*f*tt(d+.3))+.3*np.sin(4*np.pi*f*tt(d+.3)))*np.minimum(1,tt(d+.3)/.05)*np.exp(-tt(d+.3)*1.5)
        M(reverb(x,1.2,.25,3),t,g); t+=d
def kick(): d=.4; return sweep(130,42,d)*ex(d,9)*1.2+hp(nz(d),2000)*ex(d,120)*.2
def snare(): d=.35; return (bp(nz(d),1200,6000)*ex(d,22)+sweep(260,150,d)*ex(d,25)*.5)
def clap(): d=.3; y=np.zeros(int(d*sr)); [put(y,bp(nz(.2),900,5000)*ex(.2,30),k*.012,.6) for k in range(3)]; return y
def hat(o=False): d=.25 if o else .06; return fade(hp(nz(d),7000)*ex(d,12 if o else 70)*.5,.001,.01)
def tom(f=95): d=.7; return sweep(f*1.5,f*.7,d)*ex(d,6)+lp(nz(d),400)*ex(d,25)*.3
def layer_drums(t0,t1,g,kind='pop'):
    t=t0; k=0; b_=BEAT()
    while t<t1-.02:
        b=k%4
        if kind=='march':
            if b in(0,2): M(kick(),t,g)
            if b in(1,3): M(snare(),t,g*.8)
        elif kind=='pop':
            if b in(0,2): M(kick(),t,g)
            if b in(1,3): M(clap(),t,g*.7)
            M(hat(),t,g*.35); M(hat(),t+b_/2,g*.25)
        elif kind=='trap':
            if b==0 or (b==2 and k%8==2): M(kick(),t,g)
            if b==2: M(clap(),t,g*.7)
            for h in range(4): M(hat(),t+h*b_/4,g*(.3 if h%2==0 else .18))
        elif kind=='light':
            if b==0: M(kick(),t,g)
            if b==2: M(snare(),t,g*.5)
        elif kind=='tribal':
            M(tom(80 if b%2==0 else 105),t,g); M(tom(70),t+b_/2,g*.55)
        elif kind=='hats':
            M(hat(),t,g*.3); M(hat(),t+b_/2,g*.2)
        t+=b_; k+=1
def swell(t0,t1,g,notes=(50,57,62,66)):
    d=t1-t0; x=sum(lp(saw(mid(n),d+.4,.003),2600,2) for n in notes)/len(notes); e=np.minimum(1,tt(d+.4)/(d*.8))**2*np.minimum(1,(d+.4-tt(d+.4))/.4); M(x*e,t0,g)
def duck(a,b,depth=.3,fo=.5):  # silencio dramático de la música entre a y b
    g=np.ones(B['N']); i=int(round(a*sr)); j=int(round(b*sr)); g[i:j]=depth; n=int(fo*sr); m=min(n,B['N']-j)
    if m>0: g[j:j+m]=np.linspace(depth,1,m)
    B['M']*=g
def save(mfile='musica.wav',sfile='sfx.wav',mpeak=.55,speak=.9):
    Mx=reverb(lp(B['M'],9000),1.6,.22,2.2); n=B['N']; tail=np.ones(n); k=int(1.5*sr); tail[-k:]=np.linspace(1,0,k); Mx*=tail
    Mx=Mx/(np.max(np.abs(Mx))+1e-9)*mpeak; S=B['SFX']/(np.max(np.abs(B['SFX']))+1e-9)*speak
    wavfile.write(mfile,sr,(Mx*32767).astype(np.int16)); wavfile.write(sfile,sr,(S*32767).astype(np.int16)); print('audio ok',n/sr)
