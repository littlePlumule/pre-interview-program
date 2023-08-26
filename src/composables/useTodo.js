import { v4 as uuidv4 } from 'uuid'
import { ref, computed } from 'vue'
import { createTodo, editTodo, removeTodo } from '../api'

export function useTodo() {
  const todoList = ref([])

  function addTodo(todo) {
    createTodo(todo)
      .then(res => {
        todoList.value.push({
          id: uuidv4(),
          content: res.content,
          completed: res.completed,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  function updateTodo(todo) {
    editTodo(todo)
      .then(res => {
        const targetIndex = todoList.value.findIndex(item => item.id === res.id)
        todoList.value.splice(targetIndex, 1, res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function deleteTodo(todoId) {
    removeTodo(todoId).then(res => {
      switch (res.status) {
        case 200:
          todoList.value = todoList.value.filter(todo => todo.id !== todoId)
          break
        default:
          return
      }
    })
  }

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  }
}

export function useTodoFilter(todoList) {
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

  return {
    selected,
    changeFilter,
    filteredTodoList,
  }
}
