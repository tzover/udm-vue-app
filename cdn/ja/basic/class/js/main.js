// This is a template
{
  const app = Vue.createApp({
    data() {
      return {
        isLarge: true,
        hasError: true,

        // array class
        largeClass: 'large',
        dangerClass: 'text-danger',

        // object class
        classObject: {
          large: true,
          'text-danger': true,
        },

        // 三項演算子
        largeClass2: {
          large: true,
          'bg-gray': true,
        },
        dangerClass2: {
          'text-danger': true,
        },
        isLarge2: true,

        // inline style
        color: 'blue',
        fontSize: 3,
        styleObject: {
          color: 'skyblue',
          fontSize: '3rem',
        },
      }
    },
    methods: {},
    computed: {},
  })
  app.mount('#app')
}
