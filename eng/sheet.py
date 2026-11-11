# python3 sheet.py salida.png columnas img1 img2 ...  (añade el número de cuadro/etiqueta)
import sys
from PIL import Image,ImageDraw
files=sys.argv[3:];cols=int(sys.argv[2]);w,h=240,427
S=Image.new('RGB',(w*cols,h*((len(files)+cols-1)//cols)),'black');d=ImageDraw.Draw(S)
for i,f in enumerate(files):
    S.paste(Image.open(f).resize((w,h)),((i%cols)*w,(i//cols)*h)); d.text(((i%cols)*w+4,(i//cols)*h+4),str(i),fill='yellow')
S.save(sys.argv[1])
