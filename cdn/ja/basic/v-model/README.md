# Vue.js 3

# v-model

## 種類 と 役割

| 種類    | 役割                                   |
| :------ | :------------------------------------- |
| .lazy   | バインドのタイミングを遅延させる       |
| .trim   | 入力値から前後の空白を削除してから代入 |
| .number | 入力値を数値型に型変換してから代入     |

> v-model 使用時は`value`, `checked`, `selected`のような属性は無視される

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-model -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <div>
        <!-- Basic -->
        <input type="text" placeholder="Basic" v-model="msgBasic" /><br />
        <p>{{ msgBasic }}</p>

        <!-- Lazy -->
        <input
          type="text"
          placeholder="v-model:lazy"
          v-model.lazy="msgLazy"
        /><br />
        <p>{{ msgLazy }}</p>

        <!-- Trim -->
        <input
          type="text"
          placeholder="v-model:trim"
          v-model.trim="msgTrim"
        /><br />
        <p>{{ msgTrim }}</p>

        <!-- Number -->
        <input
          type="number"
          placeholder="v-model:number"
          v-model.number="age"
        />
        <p>{{ age + 2 }}</p>

        <br />
        <pre>
        {{ $data }}
        </pre>
      </div>
    </div>

    <!-- Scripts -->
    <script src="./js/main.js"></script>
  </body>
</html>
```

- ./js/main.js

```
{
  const app = Vue.createApp({
    data() {
      return {
        msgBasic: '',
        msgLazy: '',
        msgTrim: '',
        age: 0,
      }
    },
  })
  app.mount('#app')
}
```
