import React, {
  Component
} from 'react'
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base'
import Styles from './styles'

class Stack1Screen extends Component < {} > {
  static navigationOptions = {
    title: 'Stack1',
  };
  constructor(props) {
    super(props);
    this._goStack2 = this.onBtn1Clicked.bind(this);
    this._goTodoList = this.onBtn2Clicked.bind(this);
    this._goUserScreen = this.onBtn3Clicked.bind(this);
  }
  onBtn1Clicked() {
    this.props.navigation.navigate('Stack2');
  }
  onBtn2Clicked() {
    this.props.navigation.navigate('TodoList');
  }
  onBtn3Clicked() {
    this.props.navigation.navigate('UserScreen')
  }
  render() {
    return (
      <Container style={Styles.container}>
        <Content>
          <Button bordered onPress={this._goStack2} style={Styles.button}>
            <Text>Go to Stack2</Text>
          </Button>
          <Button block onPress={this._goTodoList} style={Styles.button}>
            <Text>Go to TodoList</Text>
          </Button>
          <Button rounded warning onPress={this._goUserScreen} style={Styles.button}>
            <Text>Go to User Screen</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export {
  Stack1Screen
}
