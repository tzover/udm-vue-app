# Vue.js 3

# event

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
    <title>Vue.js 3 - event -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->

      <!-- inline event handler -->
      <h2>inline event handler</h2>
      <p>{{ counter}}</p>
      <button type="button" @click="counter++">
        Click1 <span>(inline)</span>
      </button>

      <br />

      <!-- method event handler -->
      <h2>method event handler</h2>
      <button type="button" @click="clickHandler">
        Click2 <span>(methods)</span>
      </button>

      <br />

      <!-- event object -->
      <h2>event object</h2>
      <button type="button" @click="showEventContents">
        Show console event object
      </button>

      <br />

      <!-- event handler with args -->
      <h2>event handler with args</h2>
      <button type="button" @click="clickHandlerWithArg('Vue.js')">
        Click
      </button>
      <p>{{ msg }}</p>

      <br />

      <!-- event handler with args and event object -->
      <h2>event handler with args and event object</h2>
      <button type="button" @click="clickHandlerWithArg2($event, 'Vue.js')">
        Click
      </button>
      <p>{{ msg2 }}</p>

      <br />

      <!-- call once -->
      <h2>call once</h2>
      <button type="button" @click.once="getTime">Get Time?</button>
      <p>{{ time }}</p>
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
        counter: 0,
        msg: '',
        msg2: '',
        time: '',
      }
    },
    methods: {
      clickHandler() {
        this.counter++
      },
      showEventContents(e) {
        console.log(e)
        console.log(e.target)
        console.log(e.target.tagName)
        console.log(e.target.innerHTML)
        console.log(e.target.type)
      },
      clickHandlerWithArg(value) {
        console.log(value)
        this.msg = value
      },
      clickHandlerWithArg2(e, value) {
        console.log(e)
        console.log(value)
        this.msg2 = value
      },
      getTime() {
        this.time = new Date().toLocaleTimeString()
      },
    },
  })
  app.mount('#app')
}
```
