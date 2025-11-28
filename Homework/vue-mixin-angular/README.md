# Angular Counter Demo
Ez egy olyan Angular projekt, amely Vue Mixin az alapja.
Más csomagokat igényel, lentebb lesz részletezve

## 🔍 Kulcsfontosságú különbségek: Vue Mixin vs Angular Service

| Vue Mixin                          | Angular Service                               |
|------------------------------------|-----------------------------------------------|
| `mixins: [counterMixin]`          | `constructor(private service: CounterService)` |
| `data()` függvény                 | `BehaviorSubject<T>`                           |
| `computed` property               | `Observable.pipe(map())`                       |
| `methods`                         | Service metódusok                              |
| `mounted` / `unmounted`           | `ngOnInit` / `ngOnDestroy`                     |
| Template: `{{ count }}`           | Template: `{{ count$ | async }}`               |

## 📁 Projekt könyvtárszerkezet – vue-mixin-angular
```
vue-mixin-angular/ 
├── .angular/ # Angular build és konfigurációs fájlok
 ├── .vscode/ # VS Code beállítások 
 ├── node_modules/ # Függőségek 
 ├── public/ # Publikus fájlok (pl. favicon, index.html) 
 ├── src/ # Forráskód 
 │ ├── component/ # Vue komponensek 
 │ │ ├── counter/ # Számláló logika 
 │ │ └── counter-display/ # Megjelenítő komponens 
 │ ├── services/ # Angular szolgáltatások 
 │ │ ├── counter.service.ts 
 │ │ ├── app.config.server.ts 
 │ │ └── app.config.ts 
 │ ├── app.html # Alap HTML sablon 
 │ ├── app.routes.server.ts # Szerveroldali route-ok 
 │ ├── app.spec.ts # Tesztek 
 │ ├── app.ts # Fő alkalmazás logika 
 │ ├── index.html # Belépési pont 
 │ ├── main.server.ts # SSR belépési pont 
 │ ├── main.ts # CSR belépési pont 
 │ └── styles.css # Globális stílusok 
 ├── .editorconfig # Editor formázási szabályok 
 ├── .gitignore # Git kizárási szabályok 
 ├── angular.json # Angular konfiguráció 
 ├── package-lock.json # Függőségek verziózása 
 ├── package.json # Projekt metaadatok és függőségek 
 ├── README.md # Dokumentáció 
 ├── tsconfig.app.json # TypeScript beállítások (alkalmazás) ├── tsconfig.json # Globális TypeScript konfiguráció 
 └── tsconfig.spec.json # TypeScript beállítások (tesztek)
```

## 🤔 Milyen csomagokkal müködik a projekt?
- @Injectable Service: Singleton pattern DI-val
- BehaviorSubject: Reaktív állapotkezelés RxJS-sel
- Observable + async pipe: Automatikus unsubscribe
- OnInit/OnDestroy: Lifecycle hookok
- Standalone komponensek: Modern Angular 17+

## 🖥️ Screenshot a weboldalról
![Angular Counter Demo Screenshot](https://i.ibb.co/mCGStyCT/website.png)

## ⌨️ Parancsok a projekthez

``` bash
    ng new vue-mixin-angular
```

- Amiket választottam:
Which stylesheet format would you like to use? CSS

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation   
(SSG/Prerendering)? Yes

Do you want to create a 'zoneless' application without zone.js? No

Which AI tools do you want to configure with Angular best practices? 
https://angular.dev/ai/develop-with-ai None

De ha kihagytuk volna a zone.js telepítést, akkor tegyük fel
``` bash
    npm install zone.js
```