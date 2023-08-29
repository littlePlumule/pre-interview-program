<template>
  <teleport to="body">
    <div v-if="isLoading" class="overlay">
      <div class="loading"></div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from 'vue'
const isLoading = inject('isLoading')
</script>
