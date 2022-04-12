# Vue.js 3

# v-show

## 役割

- `if` と似てる

- v-if
  - 要素を DOM から削除/追加
  - 切り替えコスト高
  - `v-else` `v-else-if` が使える
- v-show
  - CSS display プロパティ
  - 初期描画コスト高
  - `v-else` `v-else-if` が使えない

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-show -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <p v-show="toggle">Hello Vue.js!</p>
      <!-- <p v-if="toggle">Hello Vue.js!</p> -->
      <!-- <p v-else>
        Good Bye!
      </p> -->
      <button type="button" @click="toggleBtn">Click!</button>
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
        toggle: true,
      }
    },
    methods: {
      toggleBtn() {
        this.toggle = !this.toggle
      },
    },
  })
  app.mount('#app')
}
```
