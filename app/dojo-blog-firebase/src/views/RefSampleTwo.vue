<template>
  <div class="home">
    <h3>RefSampleTwo</h3>

    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button type="button" @click="handleClick">Click me</button>

    <button type="button" @click="age++">add 1 to age</button>
  </div>

  <input type="text" v-model="name" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      console.log('clicked')
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick }
  },
}
</script>

<style></style>
