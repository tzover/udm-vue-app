<template>
  <div class="home">
    <h3>RefSampleOne</h3>
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
    const p = ref(null)

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('clicked', p)
      p.value.classList.add('test')
      p.value.textContent = 'Hello, ninjas'
    }
    return { name: name, age: age, handleClick: handleClick, p: p }
  },
}
</script>

<style></style>
