# Vue.js 3

# computed

## 役割

- 算出プロパティと呼ばれる
- 関数によって処理したデータを返すことができる
- method と混合しがちだが、computed はキャッシュが使える

## Sample

- index.html

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.js 3 - computed -</title>
    <script src="https://unpkg.com/vue@3.1.5"></script>
    <link rel="stylesheet" href="./style/main.css" />
  </head>
  <body>
    <!-- Contents -->
    <div id="app">
      <!-- Practices -->
      <p>{{ msg.split("").reverse().join("") }}</p>
      <p>{{ reversedMsg }}</p>
      <p>{{ reversedMsgMethod() }}</p>

      <!-- getter setter -->
      <p>Price : <input type="number" v-model="price" /></p>
      <p>
        tax included price:
        <input type="number" v-model="taxIncludedPrice" />
      </p>

      <!-- cache -->
      <h2>computed:</h2>
      <ul>
        <li>{{ computedNumber }}</li>
        <li>{{ computedNumber }}</li>
        <li>{{ computedNumber }}</li>
      </ul>
      <h2>methods:</h2>
      <ul>
        <li>{{ methodsNumber() }}</li>
        <li>{{ methodsNumber() }}</li>
        <li>{{ methodsNumber() }}</li>
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
        msg: 'Hello Vue.js',
        price: 100,
      }
    },
    methods: {
      reversedMsgMethod() {
        console.log('This is method')
        return this.msg.split('').reverse().join('')
      },
      methodsNumber() {
        console.log('methods!')
        return Math.random()
      },
    },
    computed: {
      reversedMsg() {
        console.log('This is computed')
        return this.msg.split('').reverse().join('')
      },
      taxIncludedPrice: {
        get() {
          return this.price * 1.1
        },
        set(value) {
          this.price = value / 1.1
        },
      },
      computedNumber() {
        console.log('computed!')
        return Math.random()
      },
    },
  })
  app.mount('#app')
}
```
