import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import HomeStyles from './styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component < {} > {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <Button
    title="Menu"
    onPress={()=>navigation.navigate('Stack1')} />,
  });
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.welcome}>
          Welcome to RN Starter!
        </Text>
        <Text style={HomeStyles.instructions}>
          To get more, click Menu on the top right
        </Text>
        <Text style={HomeStyles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

export {
  HomeScreen
}
