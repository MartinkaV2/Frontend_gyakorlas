# A haj
A feladatot [itt](http://informatika.fazekas.hu/wp-content/uploads/2015/10/A-haj.pdf) található meg

## Mik is kellenek a megoldáshoz
- Képszerkesztő program
- Kódoláshoz alkalmas program (pl. Visual Studio Code, VSCodium)

## Fontos lépések
2–4. pont (kép rajzolása): Bár ezek a lépések a cim.png elkészítéséhez szükségesek (barna lekerekített téglalap, a fej.png két példányának elhelyezése és átszínezése, a „Haj” felirat és árnyéka), a feladat megengedi a pot_cim.png használatát, így ezek a grafikai műveletek nem elengedhetetlenek a weblap végeredményéhez. Ha azonban saját képet készítünk, a megadott színeket és elrendezést kell követni.

5. pont: Létre kellett hozni a haj.html fájlt, és beállítani az oldal egységes megjelenését:
– háttérszín: fehér, szövegszín: fekete,
– linkek színe: alapértelmezett állapotban barna (#B97A5A), már látogatott és egyéb állapotokban szürke (#C3C3C3),
– böngésző címsorában megjelenő cím: „7 érdekesség”,
– betűtípus: Helvetica vagy Arial.

6. pont: A hajforras.txt állomány teljes szövegét be kellett másolni a HTML-dokumentumba, majd a minta alapján tagolni (bekezdések, címsorok stb.).

7. pont: A cim.png (vagy a pot_cim.png) képet az oldal tetejére kellett elhelyezni, és vízszintesen középre igazítani.

8. pont: A főcímet (<h1>) kellett használni a weblap címének, az alcímeket pedig <h2>-vel megadni, barna betűszínnel. Az alcímeket számozatlan felsorolássá (<ul>) kellett alakítani (a minta szerint minden alcím előtt egy • jel található).

9. pont: Az első bekezdést (a főcím utáni szöveg) dőlt betűstílussal (<em> vagy font-style: italic), a második bekezdést félkövérrel (<strong> vagy font-weight: bold) kellett formázni.

10. pont: A második alcím („Mikor kezd el nőni a hajunk?”) mellé jobbra igazítva kellett elhelyezni a szerkezet.jpg képet. A képet arányosan 300 képpont szélesre kellett méretezni, 2 pixeles belső margóval bal és jobb oldalon, 1 pixel vastag szegéllyel, és alternatív szövegként „Szőrtüsző” megadásával.

11. pont: Az első bekezdésben („Hány szál van belőle, miért hullik, hogyan nő?”) a vesszőkkel elválasztott részekből linkeket kellett készíteni, amelyek az oldalon belüli megfelelő alcímekre ugranak. Ehhez az alcímeket („Hány hajszál található a fejünkön?”, „Meddig él egy hajszálunk?” és „Mikor kezd el nőni a hajunk?”) könyvjelzőkké kellett alakítani (id attribútum), és a linkekben ezekre hivatkozni. A megadott táblázat alapján a linkek szövege és a célpont összerendelése:
– „Hány szál van belőle” → „Hány hajszál található fejünkön?”
– „miért hullik” → „Meddig él egy hajszálunk?”
– „hogyan nő?” → „Mennyit nő egy hajszál?” (A forrásszövegben a harmadik alcím „Mikor kezd el nőni a hajunk?”, de a táblázat szerint „Mennyit nő egy hajszál?” – itt valószínűleg eltérés van, de a feladat szerint a táblázatot kell követni, vagy a szövegben szereplő alcímekhez kell igazítani. A pontos megoldáshoz a hajforras.txt-ben lévő alcímeket kell használni: a harmadik alcím „Mikor kezd el nőni a hajunk?” – de a link „hogyan nő?” ehhez tartozhat. A táblázatban „Mennyit nő egy hajszál?” szerepel, ami nincs a szövegben, ezért lehet, hogy a „Mikor kezd el nőni” a megfelelő. A vizsgafeladatnál a pontos egyezést kell biztosítani.)