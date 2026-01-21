# Egybesült karaj
Emelt szintű informatikai érettségi egyik feladata, névszerint az 1. Egybesült karaj. 
## Feladatról
Ez egy gyakorlati informatikai feladat, amely egy weblap és hozzá kapcsolódó grafikus elemek létrehozását tartalmazza. A feladat célja egy étterem weboldalának kialakítása volt, amely bemutatja az "Egybesült karaj" receptjét otthoni elkészítésre.
Feladat leírás szerint egy szövegszerkeztő és képszerkesztő programra van szükségünk. 
### A feladat főbb részei
#### Grafikai elemek elkészítése
Fejléc kép (fejlec.png):
- Méret: 800×120 pixel

- Háttérszín: sötétbarna (RGB: 80, 59, 53)

#### Tartalom:
- Egy darab szakács ábra (szakacs.png)
- Három darab evőeszköz ábra (eszkozok.png) átlátszó háttérrel
- Evőeszközök alatt sötétbarna téglalap, amely lehetővé teszi a villák és nyelvek részleteinek láthatóságát
- Világosbarna (RGB: 244, 198, 154) színű "Arany Fakanál Bisztró" felirat
- A felirat nem érintheti a téglalap széleit, és a betűméret legalább a téglalap magasságának felével kell egyezzen

#### Receptkép (karajkep.png):
- A karaj.png kép 300 pixel szélességűre méretezése, az oldalarányok megtartásával

### Weblap létrehozása (sult.html)
#### Alapbeállítások:
- Címsor szövege: "Recept"
- Háttérszín: fekete
- Használt színek:
- Sötétbarna: #503B35
- Világosbarna: #F4C69A
- Sötétnarancs: #F26600

### Elrendezés:
- Fő tartalom: 800 pixel széles, sötétbarna téglalap, középre igazítva, szegély nélkül
- Belső margó: 10 pixel minden szöveges tartalomhoz
- Kétoszlopos elrendezés
#### Tartalom struktúrája:
- Fejléc kép (fejlec.png vagy potfejlec.png)
- 60% széles vízszintes vonal
- Főcím: "Egybesült karaj recept" (h1)
#### Alcímek (h2):
- Sztori
- Alapanyagok
- Egyéb elnevezések
- Hozzávalók / 6 adag
- Elkészítés
- Címek és alcímek színe: sötétnarancs
#### Listák:
- Hozzávalók: számozatlan lista (ul)
- Elkészítés: számozott lista (ol)
- Sütési adatok: számozatlan lista (ul)
#### Kép beszúrása:
- Karajkep.png a "Hozzávalók" cím alatt, az oszlopban középre igazítva
- Buboréksúgó (tooltip): "A sült húst szeleteljük"
#### Linkek:
- "tűzdelt karaj" → http://www.kulinarisvilag.hu/hun/receptek/tuzdelt-sult-karaj
- "sertéssült" → http://www.nosalty.hu/receptek/kategoria/husetelek/sertessult
- Linkek színe minden állapotban: sötétnarancs