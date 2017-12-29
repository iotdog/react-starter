let nextTodoId = 0
const AddTodoAction = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const SetVisibilityFilterAction = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const ToggleTodoAction = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export { AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction }
