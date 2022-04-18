<template>
  <div class="home">
    <hr />
    <RefSampleOne />
    <RefSampleTwo />
    <hr />
    <ReactiveSample />
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import RefSampleOne from './RefSampleOne.vue'
import RefSampleTwo from './RefSampleTwo.vue'
import ReactiveSample from './ReactiveSample.vue'

export default {
  name: 'Home',
  components: { RefSampleOne, RefSampleTwo, ReactiveSample },
  setup() {
    console.log('setup')
    return {}
  },
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
}
</script>

<style>
h3 {
  letter-spacing: 1px;
  color: aqua;
}
</style>
