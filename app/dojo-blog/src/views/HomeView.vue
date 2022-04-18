<template>
  <div class="home">
    <h1>Home</h1>
    <PostList />

    <hr />
    <RefSampleOne />
    <RefSampleTwo />
    <hr />
    <ReactiveSample />
    <hr />
    <WatchSample />
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
import RefSampleOne from './RefSampleOne.vue'
import RefSampleTwo from './RefSampleTwo.vue'
import ReactiveSample from './ReactiveSample.vue'
import WatchSample from './WatchSample.vue'

export default {
  name: 'Home',
  components: {
    RefSampleOne,
    RefSampleTwo,
    ReactiveSample,
    WatchSample,
    PostList,
  },
  setup() {
    console.log('setup')
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
