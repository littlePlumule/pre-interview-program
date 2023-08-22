import { ref, computed } from 'vue'

export function useTodo() {
  const todoList = ref([])

  function addTodo(todo) {
    todoList.value.push(todo)
  }

  function deleteTodo(todoId) {
    todoList.value = todoList.value.filter(todo => todo.id !== todoId)
  }

  return {
    todoList,
    addTodo,
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
