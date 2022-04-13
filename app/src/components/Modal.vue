<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <slot>Default contents</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

.modal p {
  font-style: normal;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.modal.sale .actions {
  color: white;
}

.modal.sale .actions a {
  color: white;
}
</style>
