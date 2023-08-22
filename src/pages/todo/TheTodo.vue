<template>
  <div class="container">
    <h1>Todo List</h1>
    <div class="todo-add">
      <input
        v-model="content"
        type="text"
        placeholder="Add New Todo"
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">Add</button>
    </div>
    <div class="filters">
      <div
        v-for="filter in filters"
        :key="filter.value"
        :class="['filter', { active: filterValue === filter.value }]"
        @click="filterValue = filter.value"
      >
        {{ filter.label }}
      </div>
    </div>
    <div class="todo-list">
      <label
        v-for="todoItem in filteredTodoList"
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
          :value="todoItem.content"
          @input="contentUpdate = $event.target.value"
          @blur="blurUpdate"
          @keyup.enter="updateTodo(todoItem)"
        />
        <button class="todo-update" @click="updating(todoItem)">
          <i class="material-icons">edit</i>
        </button>
        <button class="todo-delete" @click="deleteTodo(todoItem.id)">
          <i class="material-icons">delete</i>
        </button>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const content = ref('')
const todoList = ref([])
const isUpdate = ref(null)
const contentUpdate = ref('')

function addTodo() {
  if (content.value.trim() === '') return
  const todo = {
    id: todoList.value.length,
    content: content.value,
    completed: false,
  }
  todoList.value.push(todo)
  content.value = ''
}

function deleteTodo(todoId) {
  todoList.value = todoList.value.filter(todo => todo.id !== todoId)
}

function updating(todo) {
  switch (isUpdate.value) {
    case todo.id:
      isUpdate.value = null
      break
    default:
      isUpdate.value = todo.id
  }
}

function updateTodo(todoItem) {
  todoItem.content = contentUpdate.value
  isUpdate.value = null
  contentUpdate.value = null
}

function blurUpdate() {
  isUpdate.value = null
}

function toggleTodoCompleted(event, todoItem) {
  todoItem.completed = event.target.checked
}

const filterValue = ref('all')
const filters = [
  { label: '全部', value: 'all' },
  { label: '已完成', value: 'completed' },
  { label: '未完成', value: 'incomplete' },
]

const filteredTodoList = computed(() => {
  switch (filterValue.value) {
    case 'completed':
      return todoList.value.filter(todo => todo.completed)
    case 'incomplete':
      return todoList.value.filter(todo => !todo.completed)
    default:
      return todoList.value
  }
})
</script>
