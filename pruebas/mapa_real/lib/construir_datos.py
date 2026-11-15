# Genera lib/mapa_datos.js desde Natural Earth (dominio público): estados de EE. UU. (admin_1 50m) y países vecinos (admin_0 50m).
# uso: python3 -I construir_datos.py estados.geojson paises.geojson salida.js
import json,sys
def rings(g):
    P=g['coordinates'] if g['type']=='MultiPolygon' else [g['coordinates']]
    return [[[round(x,3),round(y,3)] for x,y in poly[0]] for poly in P]   # solo anillo exterior
est=json.load(open(sys.argv[1]))['features']; pai=json.load(open(sys.argv[2]))['features']
S=[]
for f in est:
    p=f['properties']
    if p['admin']=='United States of America': S.append({'n':p['name'],'p':p['postal'],'r':p['region'],'g':rings(f['geometry'])})
V=[]
for f in pai:
    p=f['properties']
    if p['NAME'] in('Puerto Rico','Dominican Rep.','Haiti','Cuba','Jamaica','Bahamas','Mexico','Canada'): V.append({'n':p['NAME'],'g':rings(f['geometry'])})
open(sys.argv[3],'w').write('var MAPA_ESTADOS='+json.dumps(S,separators=(',',':'))+',MAPA_PAISES='+json.dumps(V,separators=(',',':'))+';')
print(len(S),len(V))
