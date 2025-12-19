# Viragok project

## A projektről
Ez a projekt egy virágokból álló webshop-ról szól, ahol a felhasználó különböző típusokat tud venni. Lehet hozzáadni, szerkeszteni és törölni virágokat.

## Milyen parancsok is kellenek, ahhoz, hogy futtatsuk?
Előszőr project letöltése után terminal-ban ezt írjuk be, hogy függöségek meglegyenek
``` bash
npm install
```
Utána weboldal müködtetéshez kellő parancsok. 
``` bash
npm run dev
```
Majd másik terminal-ban ezt írjuk be. Ez fogja biztosítani a képeket.
``` bash
npm run server
```

## Project strukktúrája
``` bash
flower-shop/
├── 📁 public/
│   ├── 📁 images/              # Helyi képfájlok (opcionális)
│   │   ├── rose.jpg
│   │   ├── sunflower.jpg
│   │   └── ...
│   ├── favicon.ico
│   └── index.html
├── 📁 src/
│   ├── 📁 assets/              # Statikus erőforrások
│   │   └── logo.png
│   ├── 📁 components/          # Vue komponensek
│   │   ├── FlowerCard.vue
│   │   ├── FlowerList.vue
│   │   ├── ShoppingCart.vue
│   │   ├── FlowerForm.vue
│   │   ├── Navigation.vue
│   │   └── Footer.vue
│   ├── 📁 router/              # Vue Router
│   │   └── index.js
│   ├── 📁 services/            # API szolgáltatások
│   │   └── api.js
│   ├── 📁 stores/              # Pinia store-ok
│   │   ├── flowerStore.js
│   │   └── cartStore.js
│   ├── 📁 utils/               # Segédfüggvények
│   │   └── imageHelper.js
│   ├── 📁 views/               # Oldal komponensek
│   │   ├── HomeView.vue
│   │   ├── AdminView.vue
│   │   └── CartView.vue
│   ├── App.vue                 # Fő komponens
│   └── main.js                 # Alkalmazás belépési pont
├── 📁 .vscode/                 # VS Code beállítások
│   └── settings.json
├── 📁 node_modules/            # Függőségek
├── data.json                   # JSON Server adatbázis
├── package.json                # Projekt konfiguráció
├── package-lock.json
├── vite.config.js              # Vite konfiguráció
├── jsconfig.json               # JavaScript konfiguráció
├── index.html                  # HTML sablon
├── README.md                   # Dokumentáció
└── .gitignore                  # Git ignore fájl
```