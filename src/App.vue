<template>
  <header>
    <nav>
      <a
        v-for="component in components"
        :key="component"
        :class="{ active: component.__name === currentComponent }"
        @click.prevent="currentComponent = component.__name"
      >
        {{ component.__name }}
      </a>
    </nav>
  </header>
  <main>
    <KeepAlive>
      <component :is="components[currentComponent]"></component>
    </KeepAlive>
  </main>
  <TheLoading />
</template>

<script setup>
import TheTodo from './pages/todo/TheTodo.vue'
import MealTime from './pages/mealtime/MealTime.vue'
import TheLoading from './components/TheLoading.vue'
import { ref } from 'vue'

const components = {
  TheTodo,
  MealTime,
}

const currentComponent = ref('TheTodo')
</script>
