# Angular Counter Demo
Ez egy olyan Angular projekt, amely Vue Mixin alapja.
Más csomagokat igényel, lentebb lesz részletezve

## Vue Mixin és Angular Service közti különbség
## 🔍 Kulcsfontosságú különbségek: Vue Mixin vs Angular Service

| Vue Mixin                          | Angular Service                               |
|------------------------------------|-----------------------------------------------|
| `mixins: [counterMixin]`          | `constructor(private service: CounterService)` |
| `data()` függvény                 | `BehaviorSubject<T>`                           |
| `computed` property               | `Observable.pipe(map())`                       |
| `methods`                         | Service metódusok                              |
| `mounted` / `unmounted`           | `ngOnInit` / `ngOnDestroy`                     |
| Template: `{{ count }}`           | Template: `{{ count$ | async }}`               |
