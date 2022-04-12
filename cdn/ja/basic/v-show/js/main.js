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
  })
  app.mount('#app')
}
