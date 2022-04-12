// This is a template
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
