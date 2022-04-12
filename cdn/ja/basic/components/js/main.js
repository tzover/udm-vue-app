// This is a template
{
  const app = Vue.createApp({
    data() {
      return {}
    },
  })
  // lower case
  app.component('hello-container', {
    template: '<p>Hello</p>',
  })
  app.mount('#app')
}
