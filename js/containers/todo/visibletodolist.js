import { connect } from 'react-redux';
import { ToggleTodoAction } from '../../actions/todo';
import { TodoList } from '../../components/todo';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(ToggleTodoAction(id))
    }
  }
}

const VisibleTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoListContainer
