<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      Loading...
      <Spinner />
    </div>

    <hr />
    <button type="button" @click="handleShowEvent">
      {{ !showSample ? 'Show Sample' : 'Close Sample' }}
    </button>
    <div v-show="showSample">
      <hr />
      <RefSampleOne />
      <RefSampleTwo />
      <hr />
      <ReactiveSample />
      <hr />
      <WatchSample />
      <hr />
      <PropsSample />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

import { ref } from 'vue'
import RefSampleOne from './RefSampleOne.vue'
import RefSampleTwo from './RefSampleTwo.vue'
import ReactiveSample from './ReactiveSample.vue'
import WatchSample from './WatchSample.vue'
import PropsSample from './PropsSample.vue'

export default {
  name: 'Home',
  components: {
    RefSampleOne,
    RefSampleTwo,
    ReactiveSample,
    WatchSample,
    PropsSample,

    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    console.log('setup')

    const { posts, error, load } = getPosts()

    load()

    // practices code
    const showSample = ref(false)
    const handleShowEvent = () => {
      showSample.value = !showSample.value
    }

    return { posts, error, showSample, handleShowEvent }
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
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
