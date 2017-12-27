import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';

class Stack2Screen extends Component<{}> {
  static navigationOptions = {
    title: 'Stack2',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>This is Stack2</Text>
      </View>
    );
  }
}

export { Stack2Screen }
