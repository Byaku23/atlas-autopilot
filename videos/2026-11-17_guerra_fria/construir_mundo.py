# Genera mapa_mundo.js (países Natural Earth 50m, dominio público) para el video de la Guerra Fría. uso: python3 -I construir_mundo.py paises.geojson mapa_mundo.js
import json,sys
N=['United States of America','Canada','United Kingdom','France','Italy','Belgium','Netherlands','Luxembourg','Denmark','Norway','Iceland','Portugal',
'Russia','Ukraine','Belarus','Lithuania','Latvia','Estonia','Moldova','Georgia','Armenia','Azerbaijan','Kazakhstan','Uzbekistan','Turkmenistan','Kyrgyzstan','Tajikistan',
'Poland','Czechia','Slovakia','Hungary','Romania','Bulgaria','Albania','Germany','Cuba','Spain','Switzerland','Austria','Sweden','Finland','Greece','Turkey','Mexico','Serbia','Bosnia and Herz.','Croatia','Slovenia','Macedonia','Montenegro','Kosovo','Ireland','Mongolia','China','Haiti','Dominican Rep.','Jamaica','Bahamas','Iran','Iraq','Syria','Italy','Morocco','Algeria','Tunisia','Libya','Egypt','Israel']
def rings(g):
    P=g['coordinates'] if g['type']=='MultiPolygon' else [g['coordinates']]
    return [[[round(x,2),round(y,2)] for x,y in poly[0]] for poly in P]
out=[]
for f in json.load(open(sys.argv[1]))['features']:
    n=f['properties']['NAME']
    if n in N: out.append({'n':n,'g':rings(f['geometry'])})
open(sys.argv[2],'w').write('var MAPA_PAISES='+json.dumps(out,separators=(',',':'))+';')
print(len(out),'países',len(set(N)-set(o['n'] for o in out)),'sin encontrar',set(N)-set(o['n'] for o in out))
