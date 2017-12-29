import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';
import Footer from './footer';
import { VisibleTodoListContainer, AddTodoContainer } from '../../containers/todo';

export default class TodoScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Todo List',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <AddTodoContainer />
        <VisibleTodoListContainer />
        <Footer />
      </View>
    );
  }
}
