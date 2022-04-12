// This is a template
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
    computed: {},
  })
  app.mount('#app')
}
