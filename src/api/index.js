const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export function createTodo(todo) {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

export function editTodo(todo) {
  return fetch(`${BASE_URL}/${todo.id}`, {
    method: 'PATCH',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

export function removeTodo(todoId) {
  return fetch(`${BASE_URL}/${todoId}`, {
    method: 'DELETE',
  })
    .then(res => res)
    .catch(err => {
      console.log(err)
    })
}
