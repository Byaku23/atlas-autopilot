# python3 hoja.py salida.png img1 img2 ...  (contacto 4 columnas)
import sys
from PIL import Image
f=sys.argv[2:];w,h=240,427;c=4;S=Image.new('RGB',(w*c,h*((len(f)+c-1)//c)),'black')
for i,p in enumerate(f):S.paste(Image.open(p).resize((w,h)),((i%c)*w,(i//c)*h))
S.save(sys.argv[1])
