import React, {
  Component
} from 'react'
import {
  Platform
} from 'react-native'
import {
  Container,
  Content,
  Button,
  Label,
  H1,
  Text,
  Icon
} from 'native-base'

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
    headerRight: (
      <Button onPress={()=>navigation.navigate('Stack1')} small light style={{marginRight: 5}}>
        <Label>Menu</Label>
      </Button>
    ),
    tabBarIcon: <Icon name='home'/>
  });
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={HomeStyles.container}>
        <H1>Welcome to RN Starter!</H1>
        <Text style={HomeStyles.instructions}>
          To get more, click Menu on the top right
        </Text>
        <Text style={HomeStyles.instructions}>
          {instructions}
        </Text>
      </Container>
    )
  }
}

export {
  HomeScreen
}
