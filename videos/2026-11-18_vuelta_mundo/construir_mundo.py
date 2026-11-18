# Genera mapa_mundo.js (todos los países Natural Earth 50m, dominio público). uso: python3 -I construir_mundo.py paises.geojson mapa_mundo.js
import json,sys
def rings(g):
    P=g['coordinates'] if g['type']=='MultiPolygon' else [g['coordinates']]
    return [[[round(x,1),round(y,1)] for x,y in poly[0]] for poly in P if len(poly[0])>=8]
out=[]
for f in json.load(open(sys.argv[1]))['features']:
    r=rings(f['geometry'])
    if r: out.append({'n':f['properties']['NAME'],'g':r})
open(sys.argv[2],'w').write('var MAPA_PAISES='+json.dumps(out,separators=(',',':'))+';')
print(len(out),'países')
