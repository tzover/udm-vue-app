{
  const app = Vue.createApp({
    data() {
      return {
        url: 'https://google.com',
        showDetails: true,
        title: 'The final empire',
        auther: 'yt',
        age: 28,
        count: 0,
        x: 0,
        y: 0,
        books: [
          { title: 'sample1', data: 'data1', img: 'assets/1.jpg', isFav: true },
          {
            title: 'sample2',
            data: 'data2',
            img: 'assets/2.jpg',
            isFav: false,
          },
          { title: 'sample3', data: 'data3', img: 'assets/3.jpg', isFav: true },
        ],
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
      handleEvent(e, data) {
        console.log(e)
        if (data) {
          console.log(data)
        }
      },
      handleMousemove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
      },
      toggleFav(book) {
        book.isFav = !book.isFav
      },
    },
    computed: {
      filteredBooks() {
        return this.books.filter((book) => book.isFav)
      },
    },
  })

  app.mount('#app')
}
