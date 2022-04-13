<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="#modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info...</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>

  <button type="button" @click.self="toggleModal">open modal (alt)</button>
  <button type="button" @click.self="toggleModalTwo">open modal</button>

  <!-- ref practice -->
  <br />
  <input type="text" ref="name" />
  <button type="button" @click="handleClick">Click</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      console.log(this.$refs)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  },
  components: {
    HelloWorld,
    Modal,
  },
}
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
