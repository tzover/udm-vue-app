<template>
  <div class="home">
    home
    <!--ref simple sample -->

    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p>
    <button type="button" @click="handleClick">Click me</button>

    <button type="button" @click="age++">add 1 to age</button>
    <input type="text" v-model="name" /> -->

    <!-- ref vs reactive -->
    <!-- reactiveの方がBetter -->
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ nameOne }}</p>
    <button type="button" @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button type="button" @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    console.log('setup')

    // ref simple sample

    // const p = ref(null)

    // let name = 'mario'
    // let age = 30

    // const handleClick = () => {
    //   console.log('clicked', p)
    //   p.value.classList.add('test')
    //   p.value.textContent = 'Hello, ninjas'
    // }

    // return { name: name, age: age, handleClick: handleClick, p: p }

    // ---------------------------------------
    // ref simple sample 2

    // const name = ref('mario')
    // const age = ref(30)

    // const handleClick = () => {
    //   console.log('clicked')
    //   name.value = 'luigi'
    //   age.value = 35
    // }

    // return { name, age, handleClick }

    // ---------------------------------------
    // ref vs reactive

    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luige', age: 35 })

    const nameOne = ref('mario')
    const nameTwo = reactive('luige')

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
      nameOne.value = 'test'
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
      nameTwo = reactive('test2')
    }

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameOne,
      nameTwo,
    }
  },

  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
}
</script>
