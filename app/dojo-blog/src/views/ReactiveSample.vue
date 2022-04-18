<template>
  <div class="home">
    <h3>ReactiveSample</h3>

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
  setup() {
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
}
</script>

<style></style>
