<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
export default {
  setup() {
    const { documents: playlists } = getCollection('playlists')

    return { playlists }
  },
}
</script>

<style></style>
