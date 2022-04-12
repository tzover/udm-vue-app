# Vue.js 3

# v-on

## 役割

- userEvent
  - .stop : event の親要素への伝達を中止
  - .prevent : event 規定の動作をキャンセル
  - .capture : event handler を capture mode で動作
  - .self : event 発生元が要素実親の場合にだけ実行
  - .once : event handler を一回だけ実行
  - .passive : passive mode を有効化

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-on -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <button type="button" v-on:click="getTime">Get Time</button>
      <br />
      <!-- 省略形 -->
      <button type="button" @click="getTime">Get Time</button>
      <p>{{ now }}</p>
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
        now: '-',
      }
    },
    methods: {
      getTime() {
        console.log('')
        this.now = new Date().toLocaleString()
      },
    },
  })
  app.mount('#app')
}
```
