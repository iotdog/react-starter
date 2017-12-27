import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';

class Tab1Screen extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>This is Tab1 Screen</Text>
      </View>
    );
  }
}

export { Tab1Screen }
