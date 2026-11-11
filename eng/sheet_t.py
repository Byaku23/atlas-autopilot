# hoja de contacto rápida por tiempos: python3 sheet_t.py /abs/index.html salida.png t1 t2 ... (máx 12 por hoja)
import sys,os,subprocess,tempfile
html,out=sys.argv[1],sys.argv[2];ts=sys.argv[3:]
d=tempfile.mkdtemp();pre=os.path.join(d,'s')
subprocess.run(['python3',os.path.join(os.path.dirname(__file__),'shot.py'),html,pre]+ts,check=True)
from PIL import Image,ImageDraw
cols=4;w,h=240,427;S=Image.new('RGB',(w*cols,h*((len(ts)+cols-1)//cols)),'black');dr=ImageDraw.Draw(S)
for i,t in enumerate(ts):
    S.paste(Image.open(pre+f'_{i}.png').resize((w,h)),((i%cols)*w,(i//cols)*h));dr.rectangle([(i%cols)*w,(i//cols)*h,(i%cols)*w+52,(i//cols)*h+14],fill='black');dr.text(((i%cols)*w+3,(i//cols)*h+2),'t=%s'%t,fill='yellow')
S.save(out);print(out)
