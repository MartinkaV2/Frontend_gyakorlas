# BDIE Finder – Mini Vue Klón

Ez a projekt próbálkozás szerűen https://benzhaomin.github.io/bdiefinder/ -t akarta klónozni.

A cél egy kis, oktatási célú alkalmazás készítése, amely bemutatja a Vue alapjait: komponensek, props, eseménykezelés, API-lekérés, routing és state kezelés.

## Projekt létrehozása

A projekt létrehozásához a következő parancsot használtam:
```bash
npm create vue@latest bdie-finder-clone
```
Csak enter-t nyomtam utána, amikor csomagokat kérdezte.
Második választásnál pedig a Oxlint-t választottam.

## Könyvtárba lépés
Projektünk build-elése után ezzel a paranccsal lehet belépni
```bash
cd .\bdie-finder-clone\
```

## Csomagok telepítése
Ezeket is telepítsuk fel!
```bash
npm install vue-router@4
```

```bash
npm install pinia
```

Miért is kell nekünk ez?
A Vue Router segít az oldalak közötti navigációban, míg a Pinia egyszerű és hatékony állapotkezelést biztosít.

## Könyvár szerkezete
Ez a projekt könyvár szerkezete:
```
bdie-finder-clone/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── styles.css
│   │
│   ├── components/
│   │   ├── SearchBar.vue
│   │   ├── ResultList.vue
│   │   └── ResultItem.vue
│   │
│   ├── views/
│   │   └── HomeView.vue
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── store/
│   │   └── index.js
│   │
│   ├── App.vue
│   └── main.js
│
├── package.json
└── README.md
```