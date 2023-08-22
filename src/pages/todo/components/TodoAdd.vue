<template>
  <div class="todo-add">
    <input
      v-model="content"
      type="text"
      placeholder="Add New Todo"
      @keyup.enter="emitAddTodo"
    />
    <button @click="emitAddTodo">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['add-todo'])

let tid = 0

const content = ref('')

function emitAddTodo() {
  if (content.value.trim() === '') return
  const todo = {
    id: tid,
    content: content.value,
    completed: false,
  }
  emits('add-todo', todo)
  tid++
  content.value = ''
}
</script>
