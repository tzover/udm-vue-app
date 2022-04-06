{
  const app = Vue.createApp({
    data() {
      return {
        showDetails: true,
        title: 'The final empire',
        auther: 'yt',
        age: 28,
        count: 0,
      }
    },
    methods: {
      changeTitle() {
        // console.log('Clicked!')
        // title = 'Changed Title by methods'
        this.title = 'Changed Title by methods'
      },
      changeStatus() {
        this.showDetails = !this.showDetails
      },
    },
  })

  app.mount('#app')
}
