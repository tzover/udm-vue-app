// This is a template
{
  const app = Vue.createApp({
    data() {
      return {
        msg: 'Hello.',
        km: 0,
        m: 0,
        firstName: '',
        lastName: '',
        // compare computed vs watch
        // fullName: '',

        // deep
        id: 0,
        color: '',
        colors: [
          { id: 1, name: 'Red' },
          { id: 2, name: 'Green' },
          { id: 3, name: 'Blue' },
        ],
      }
    },
    watch: {
      msg(newValue, oldValue) {
        console.log('new : %s, old : %s', newValue, oldValue)
      },
      km(value) {
        console.log(value)
        this.km = value
        this.m = value * 1000
      },
      m(value) {
        console.log(value)
        this.m = value
        this.km = value / 1000
      },

      // compare computed vs watch
      // firstName(value) {
      //   this.fullName = value + ' ' + this.lastName
      // },
      // lastName(value) {
      //   this.fullName = this.firstName + ' ' + value
      // },

      // deep
      colors: {
        handler(newValue, oldValue) {
          console.log('Update!')
        },
        deep: true, // nameの変更を監視
      },
    },
    computed: {
      // compare computed vs watch
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
    },
    methods: {
      changeColor(id, name) {
        this.colors[id].name = name
      },
    },
  })
  app.mount('#app')
}
