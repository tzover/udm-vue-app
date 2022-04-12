// This is a template
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
    methods: {},
    computed: {},
  })
  app.mount('#app')
}
