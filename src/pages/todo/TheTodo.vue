<template>
  <div class="container">
    <h1>Todo List</h1>

    <TodoAdd @add-todo="addTodo" />

    <TodoFilter :selected="selected" @change-filter="changeFilter" />

    <div class="todo-list">
      <TodoItem
        v-if="filteredTodoList.length"
        :todoList="filteredTodoList"
        @delete-todo="deleteTodo"
      />
      <div v-else class="nothing">No Any todo</div>
    </div>
  </div>
</template>

<script setup>
import TodoAdd from './components/TodoAdd.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoItem from './components/TodoItem.vue'
import { useTodo, useTodoFilter } from '../../composables/useTodo'

const { todoList, addTodo, deleteTodo } = useTodo()
const { selected, changeFilter, filteredTodoList } = useTodoFilter(todoList)
</script>
