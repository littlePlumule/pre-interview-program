<template>
  <div class="container">
    <h1>Todo List</h1>

    <TodoAdd @add-todo="addTodo" />

    <TodoFilter :selected="selected" @change-filter="changeFilter" />

    <div class="todo-list" v-if="filteredTodoList.length">
      <TodoItem
        v-for="todoItem in filteredTodoList"
        :key="todoItem.id"
        :todoItem="todoItem"
        @delete-todo="deleteTodo"
        @update-todo="updateTodo"
      />
    </div>
    <div v-else class="nothing">No Any todo</div>
  </div>
</template>

<script setup>
import TodoAdd from './components/TodoAdd.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoItem from './components/TodoItem.vue'
import { useTodo, useTodoFilter } from '../../composables/useTodo'

const { todoList, addTodo, updateTodo, deleteTodo } = useTodo()
const { selected, changeFilter, filteredTodoList } = useTodoFilter(todoList)
</script>
