<template>
  <label :class="['todo-item', { done: todoItem.completed }]">
    <input type="checkbox" v-model="todoItem.completed" @change="updateTodo" />
    <span class="check-button"></span>
    <p v-if="!isUpdate" class="todo-content">
      {{ todoItem.content }}
    </p>
    <input
      v-else
      type="text"
      title="enter to update"
      :value="todoItem.content"
      @input="editContent = $event.target.value"
      @keyup.enter="updateTodo"
    />
    <button class="todo-update" title="edit" @click="isUpdate = !isUpdate">
      <i class="material-icons">edit</i>
    </button>
    <button
      class="todo-delete"
      title="remove"
      @click="emits('delete-todo', todoItem.id)"
    >
      <i class="material-icons">delete</i>
    </button>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['delete-todo', 'update-todo'])
const props = defineProps({
  todoItem: {
    type: Object,
  },
})

const { todoItem } = props

const isUpdate = ref(false)
const editContent = ref(todoItem.content || '')

function updateTodo() {
  todoItem.content = editContent.value
  emits('update-todo', {
    id: todoItem.id,
    content: todoItem.content,
    completed: todoItem.completed,
  })
  isUpdate.value = false
}
</script>
