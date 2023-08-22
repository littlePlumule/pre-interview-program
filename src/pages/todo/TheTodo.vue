<template>
  <div class="container">
    <h1>Todo List</h1>
    <div class="todo-add">
      <input type="text" placeholder="Add New Todo" />
      <button>Add</button>
    </div>
    <div class="filters">
      <div class="filter active">全部</div>
      <div class="filter">已完成</div>
      <div class="filter">未完成</div>
    </div>
    <div class="todo-list">
      <label class="todo-item done">
        <input type="checkbox" />
        Todo 1
        <span class="check-button"></span>
      </label>
      <label class="todo-item">
        <input type="checkbox" />
        Todo 2
        <span class="check-button"></span> </label
      ><label class="todo-item">
        <input type="checkbox" />
        Todo 3
        <span class="check-button"></span>
      </label>
    </div>
  </div>
</template>

<script setup></script>
