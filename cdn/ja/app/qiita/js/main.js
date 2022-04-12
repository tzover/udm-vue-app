// This is a template
{
  const app = Vue.createApp({
    data() {
      return {
        items: null,
        keyword: '',
        msg: '',
      }
    },
    watch: {
      keyword(newKeyword, oldKeyword) {
        console.log(newKeyword)
        this.msg = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      },
    },
    mounted() {
      // this.keyword = 'JavaScript'
      // this.getAnswer()

      // debounce は　lodashの関数
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
      getAnswer() {
        if (this.keyword === '') {
          console.log('empty')
          this.items = null
          return
        }

        this.msg = 'Loading...'
        const vm = this
        const params = { page: 1, per_page: 20, query: this.keyword }

        axios
          .get('https://qiita.com/api/v2/items', { params })
          .then((res) => {
            console.log(res)
            vm.items = res.data
          })
          .catch((err) => {
            vm.msg = 'Error!' + err
          })
          .finally(() => {
            vm.msg = ''
          })
      },
    },
    computed: {},
  })
  app.mount('#app')
}
