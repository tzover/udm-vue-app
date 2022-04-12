{
  const app = Vue.createApp({
    data: () => ({
      newItem: '',
      todos: [],
    }),
    methods: {
      addItem(e) {
        if (this.newItem === '') return

        let todo = {
          item: this.newItem,
          isDone: false,
        }

        // push array
        this.todos.push(todo)
        this.newItem = ''
      },

      deleteItem(idx) {
        this.todos.splice(idx, 1)
      },
    },
  })

  app.mount('#app')
}
