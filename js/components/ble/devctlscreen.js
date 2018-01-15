import React, {
  Component
} from 'react'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right
} from 'native-base'

export default class devCtlScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Device',
  };
  constructor(props) {
    super(props);
    this.mac = props.navigation.state.params.mac;
    this.bledev = props.navigation.state.params.bledev;
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Device Info</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>ID</Text>
              </Left>
              <Right>
                <Text>{this.bledev.id}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>MAC</Text>
              </Left>
              <Right>
                <Text>{this.mac}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>Adv. Name</Text>
              </Left>
              <Right>
                <Text>{this.bledev.name}</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Service Info</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
