import React, {
  Component
} from 'react'
import {
  Text,
  View
} from 'react-native'
import {
  LoginContainer,
  InfoContainer,
  LogoutContainer
} from '../../containers/user'

export default class userScreen extends Component<{}> {
  static navigationOptions = {
    title: 'User',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <LoginContainer />
        <LogoutContainer />
        <InfoContainer />
      </View>
    );
  }
}
