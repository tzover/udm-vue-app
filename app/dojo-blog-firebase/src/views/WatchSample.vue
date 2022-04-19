<template>
  <div class="home">
    <h3>WatchSample</h3>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button type="button" @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  setup() {
    const search = ref('')
    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ])

    // watch(search, () => {
    //   console.log('watch function ran')
    // })

    // watchEffect(() => {
    //   console.log('watchEffect function ran', search.value)
    // })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      console.log('Clicked')
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick }
  },
}
</script>

<style></style>
