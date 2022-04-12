// This is a template
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
