# Vue.js 3

# v-for

## 役割

- 普通に`for`

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - v-for -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <ul>
        <li v-for="color in colors">{{ color.name }}</li>
      </ul>
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
        colors: [
          { id: 1, name: 'red' },
          { id: 2, name: 'blue' },
          { id: 3, name: 'green' },
        ],
      }
    },
  })
  app.mount('#app')
}

```
