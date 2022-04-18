<template>
  <div class="home">
    <h3>PropsSample</h3>
    <PostList v-if="showPosts" :posts="posts" />
    <button type="button" @click="showPosts = !showPosts">toggle posts</button>
    <button type="button" @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostListSample.vue'

export default {
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 },
    ])

    const showPosts = ref(true)

    return { posts, showPosts }
  },
}
</script>

<style></style>
