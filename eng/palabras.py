# palabras.py PALABRAS.json CARPETA
# Convierte la transcripción de ElevenLabs (lista de palabras con start/end en segundos)
# en script.txt (palabras separadas por espacios) + st.txt (inicio de cada palabra), que usa words.py.
# Acepta: [{"text":..,"start":..,"end":..,"type":"word"}, ...] o {"words":[...]}.
import json,sys,os
src,out=sys.argv[1],sys.argv[2]
d=json.load(open(src,encoding='utf-8'))
if isinstance(d,dict): d=d.get('words') or d.get('transcripts',[{}])[0].get('words',[])
ws=[w for w in d if w.get('type','word')=='word' and str(w.get('text','')).strip()]
toks=[];st=[]
for w in ws:
    for i,p in enumerate(str(w['text']).split()):
        toks.append(p); st.append(float(w['start'])+i*0.01)
open(os.path.join(out,'script.txt'),'w',encoding='utf-8').write(' '.join(toks)+'\n')
open(os.path.join(out,'st.txt'),'w').write(' '.join('%.2f'%s for s in st)+'\n')
print('palabras',len(toks),'última',st[-1] if st else None)
