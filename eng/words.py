# words.py — tiempos por palabra + construcción de data.js
import json,math,re,os,unicodedata
def norm(w):
    w=unicodedata.normalize('NFD',w.lower()); w=''.join(c for c in w if unicodedata.category(c)!='Mn')
    return re.sub(r'[^a-z0-9ñ\-]','',w)
def load(vdir='.'):
    ws=open(os.path.join(vdir,'script.txt'),encoding='utf-8').read().split()
    st=list(map(float,open(os.path.join(vdir,'st.txt')).read().split()))
    assert len(ws)==len(st),(len(ws),len(st))
    out=[]
    for i,(w,s) in enumerate(zip(ws,st)):
        nx=st[i+1] if i+1<len(st) else s+.9
        e=min(nx-.02,s+.075*len(w)+.14); out.append([w,s,max(s+.08,e)])
    return out
W=load('.') if os.path.exists('script.txt') else []
def wt(pat,after=0.0,n=1,end=False):
    """tiempo (inicio) de la n-ésima palabra que coincide con pat (sin tildes ni signos) después de 'after'"""
    p=norm(pat); k=0
    for w,s,e in W:
        if s>=after-1e-6 and norm(w)==p:
            k+=1
            if k==n: return e if end else s
    raise ValueError('palabra no encontrada: %s después de %.2f'%(pat,after))
def snap(t): return round(t*30)/30
def clean(w): return w.replace('"','').rstrip(',.:;')
def pages(Wd):
    P=[];cur=[]
    for i,(w,s,e) in enumerate(Wd):
        d=clean(w)
        if cur:
            pw,ps,pe=Wd[i-1]; txt_=' '.join(x[0] for x in cur)
            brk= pw[-1] in '.?!:' or len(txt_)+1+len(d)>22 or s-pe>0.42 or (pw[-1]==',' and len(txt_)>=10)
            if brk: P.append(cur);cur=[]
        cur.append([d,round(s,3),round(e,3)])
    if cur: P.append(cur)
    out=[]
    for k,pg in enumerate(P):
        s=pg[0][1]; last_e=pg[-1][2]; nxt=P[k+1][0][1] if k+1<len(P) else last_e+1.0
        out.append([s,round(min(nxt-.02,last_e+.45),3),[[w,s_] for w,s_,e_ in pg]])
    return out
def build(T,RAW,TRS,DUR,vdir='.'):
    E={k:snap(v[0]) for k,v in RAW.items()}
    T=[snap(x) for x in T]
    for i in range(1,len(T)-1): E['tr%d'%i]=T[i]
    HITS=[[E[k],v[1]] for k,v in RAW.items() if v[1]>0]
    PG=pages(W)
    js='var DUR=%s,T=%s,E=%s,HITS=%s,TRS=%s,PAGES=%s,WORDS=%s;'%(DUR,json.dumps(T),json.dumps(E),json.dumps(HITS),json.dumps(TRS),json.dumps(PG,ensure_ascii=False),json.dumps([[w,round(s,3)] for w,s,e in W],ensure_ascii=False))
    open(os.path.join(vdir,'data.js'),'w',encoding='utf-8').write(js)
    json.dump({'E':E,'T':T,'TRS':TRS,'DUR':DUR},open(os.path.join(vdir,'ev.json'),'w'))
    print('data.js ok: escenas',len(T)-1,'eventos',len(E),'páginas',len(PG),'DUR',DUR)
    return E,T
