# Vue.js 3

# v-bind

## 役割

- プロパティとして js 側で定義したものを使用したい場合に使用
  > v-model と似てる

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-bind -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <input
        type="text"
        placeholder="This is a v-bind sample"
        v-bind:value="message"
      />
      <br />
      <!-- 省略形 -->
      <input
        type="text"
        placeholder="This is a v-bind sample"
        :value="message"
      />
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
        message: 'Hello.',
      }
    },
  })
  app.mount('#app')
}
```
