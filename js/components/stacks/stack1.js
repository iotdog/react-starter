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
    this._goStack2 = this.onBtnClicked.bind(this);
  }
  onBtnClicked() {
    this.props.navigation.navigate('Stack2');
  }
  render() {
    return (
      <View>
        <Text>This is Stack1</Text>
        <Button title='Go to Stack2' onPress={this._goStack2}>
        </Button>
      </View>
    );
  }
}

export {
  Stack1Screen
}
