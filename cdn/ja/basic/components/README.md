# Vue.js 3

# components

## 役割

- UI Parts

> component name は`ハイフンを 1 つ以上`含める必要がある

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - Components -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <!-- lower case and include '-' -->
      <hello-container></hello-container>
      <hello-component></hello-component>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>

    <!-- Scripts -->
    <script src="./js/main.js"></script>
  </body>
</html>
```

- ./js/main.js

```
{
  const helloComponent = {
    template: '<p>Hello Local</p>',
  }

  const buttonCounter = {
    template:
      '<div><span>count: </span><button @click="countUp">{{ count }}</button></div>',
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      countUp() {
        this.count++
      },
    },
  }

  const app = Vue.createApp({
    data() {
      return {}
    },
    components: {
      'hello-component': helloComponent,
      'button-counter': buttonCounter,
    },
  })
  // lower case
  app.component('hello-container', {
    template: '<p>Hello Global</p>',
  })
  app.mount('#app')
}
```
