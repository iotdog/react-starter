import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../../actions/todo';
import {
  TextInput,
  Button,
  View
} from 'react-native';


const addTodo = ({ dispatch }) => {
  let input
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        onChangeText={(text) => input = text}
        placeholder='input a todo'
        style={{
          width: 200,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft: 10,
        }}
      />
      <Button
        title='Add Todo'
        onPress={() => {
          // console.log('input: ' + input);
            if(!input || !input.trim()) {
              return
            }
            dispatch(AddTodoAction(input))
            input = ''
          }
        }
      />
    </View>
  );
}
const AddTodoContainer = connect()(addTodo)

export default AddTodoContainer
