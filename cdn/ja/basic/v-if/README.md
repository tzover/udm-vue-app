# Vue.js 3

# v-if

## 役割

- 普通に`if`

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-if -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <p v-if="toggle">Hello</p>
      <button type="button" @click="toggleBtn">Click!</button>
    </div>

    <!-- Scripts -->
    <script src="./js/main.js"></script>
  </body>
</html>
```

- ./js/main.js

```
// This is a template
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
    computed: {},
  })
  app.mount('#app')
}
```