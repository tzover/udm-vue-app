// This is a template
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
    computed: {},
  })
  app.mount('#app')
}
