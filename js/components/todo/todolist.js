import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'
import {
  FlatList
} from 'react-native';

const TodoList = ({ todos, onTodoClick }) => {
  // console.log('todos: ' + JSON.stringify(todos));
  return (
    <FlatList
      data={todos}
      renderItem={
        ({item}) => (
          <Todo key={item.id} {...item} onClick={() => onTodoClick(item.id)} />
        )
      }
      keyExtractor={(item, index) => item.id}
      style={{
        marginTop: 20,
      }}
    />
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
