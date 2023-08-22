<template>
  <div class="container">
    <h1>Todo List</h1>

    <TodoAdd @add-todo="addTodo" />

    <TodoFilter :selected="selected" @change-filter="changeFilter" />

    <div class="todo-list">
      <TodoItem :todoList="filteredTodoList" @delete-todo="deleteTodo" />
    </div>
  </div>
</template>

<script setup>
import TodoAdd from './components/TodoAdd.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoItem from './components/TodoItem.vue'
import { ref, computed } from 'vue'

const todoList = ref([])

function addTodo(todo) {
  todoList.value.push(todo)
}

function deleteTodo(todoId) {
  todoList.value = todoList.value.filter(todo => todo.id !== todoId)
}

const selected = ref('all')

function changeFilter(filterValue) {
  selected.value = filterValue
}

const filteredTodoList = computed(() => {
  switch (selected.value) {
    case 'completed':
      return todoList.value.filter(todo => todo.completed)
    case 'incomplete':
      return todoList.value.filter(todo => !todo.completed)
    default:
      return todoList.value
  }
})
</script>
