<template>
  <label
    v-for="todoItem in todoList"
    :key="todoItem.id"
    :class="['todo-item', { done: todoItem.completed }]"
  >
    <input
      type="checkbox"
      :checked="todoItem.completed"
      @click="toggleTodoCompleted($event, todoItem)"
    />
    <span class="check-button"></span>
    <p v-if="isUpdate !== todoItem.id" class="todo-content">
      {{ todoItem.content }}
    </p>
    <input
      v-else
      type="text"
      title="enter to update"
      :value="todoItem.content"
      @input="contentUpdate = $event.target.value"
      @blur="blurUpdate"
      @keyup.enter="updateTodo(todoItem)"
    />
    <button class="todo-update" title="update" @click="updating(todoItem)">
      <i class="material-icons">edit</i>
    </button>
    <button
      class="todo-delete"
      title="delete"
      @click="emits('delete-todo', todoItem.id)"
    >
      <i class="material-icons">delete</i>
    </button>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['delete-todo'])
const props = defineProps({
  todoList: {
    type: Array,
  },
})

const isUpdate = ref(null)
const contentUpdate = ref('')

function updating(todo) {
  switch (isUpdate.value) {
    case todo.id:
      isUpdate.value = null
      break
    default:
      isUpdate.value = todo.id
  }
}

function blurUpdate() {
  isUpdate.value = null
}

function toggleTodoCompleted(event, todoItem) {
  todoItem.completed = event.target.checked
}

function updateTodo(todoItem) {
  if (contentUpdate.value.trim() === '') return
  todoItem.content = contentUpdate.value
  isUpdate.value = null
  contentUpdate.value = null
}
</script>
