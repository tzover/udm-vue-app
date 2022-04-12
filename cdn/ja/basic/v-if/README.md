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

      <!-- v-if and v-else -->
      <h3>v-if and v-else</h3>
      <p v-if="toggle2">Yes</p>
      <p v-else>No</p>
      <button type="button" @click="toggleBtn2">Click!</button>

      <!-- v-else-if -->
      <h3>v-else-if</h3>
      <p v-if="color === 'red'">Stop</p>
      <p v-else-if="color === 'yellow'">Caution</p>
      <p v-else-if="color === 'blue'">Go</p>
      <p v-else>Not red/yellow/blue</p>
      <button type="button" @click="changeColor">Click!</button>
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

        // v-if and v-else
        toggle2: true,

        // v-else-if
        color: 'red',
        colors: ['blue', 'yellow', 'red', 'black'],
      }
    },
    methods: {
      toggleBtn() {
        this.toggle = !this.toggle
      },
      toggleBtn2() {
        this.toggle2 = !this.toggle2
      },
      changeColor() {
        const num = Math.floor(Math.random() * 4 - 1) + 1
        this.color = this.colors[num]
      },
    },
  })
  app.mount('#app')
}

```
