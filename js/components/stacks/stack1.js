import React, {
  Component
} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class Stack1Screen extends Component < {} > {
  static navigationOptions = {
    title: 'Stack1',
  };
  constructor(props) {
    super(props);
    this._goStack2 = this.onBtn1Clicked.bind(this);
    this._goTodoList = this.onBtn2Clicked.bind(this);
  }
  onBtn1Clicked() {
    this.props.navigation.navigate('Stack2');
  }
  onBtn2Clicked() {
    this.props.navigation.navigate('TodoList');
  }
  render() {
    return (
      <View>
        <Button title='Go to Stack2' onPress={this._goStack2}>
        </Button>
        <Button title='Go to TodoList' onPress={this._goTodoList}>
        </Button>
      </View>
    );
  }
}

export {
  Stack1Screen
}
