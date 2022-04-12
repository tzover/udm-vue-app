// This is a template
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
