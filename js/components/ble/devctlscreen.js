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
import { NavigationActions } from 'react-navigation'
import {
  SvcListContainer,
  ConnBtnContainer
} from '../../containers/ble'

export default class devCtlScreen extends Component<{}> {
  static navigationOptions = ({navigation}) => {
    let { state } = navigation
    return {
      title: state.params.mac,
      tabBarLabel: 'Device',
      headerRight: <ConnBtnContainer mac={state.params.mac} device={state.params.bledev} />
    }
  }
  constructor(props) {
    super(props);
    this.mac = props.navigation.state.params.mac;
    this.bledev = props.navigation.state.params.bledev;
  }
  /*
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
  */
  render() {
    return (
      <Container>
        <Content>
          <SvcListContainer />
        </Content>
      </Container>
    );
  }
}
