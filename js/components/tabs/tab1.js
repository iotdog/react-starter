import React, {
  Component
} from 'react'
import {
  Container,
  Header,
  Content,
  Title,
  Button,
  Text,
  Icon
} from 'native-base'
import {
  BleManager
} from 'react-native-ble-plx'
import {
  BleOnAction,
  BleOffAction
} from '../../actions/ble'
import { connect } from 'react-redux'
import {
  ScanBtnContainer,
  ScanListContainer
} from '../../containers/ble'

class tab1Screen extends Component<{}> {
  static navigationOptions = ({navigation}) => ({
    title: 'BLE',
    headerTitle: 'BleRx',
    tabBarIcon: <Icon name='bluetooth'/>,
    headerRight: <ScanBtnContainer />
  });
  constructor(props) {
    super(props)
    this.manager = new BleManager()
    this._onBleStateChanged = this.onBleStateChanged.bind(this)
  }
  componentWillMount() {
    const subscription = this.manager.onStateChange(this._onBleStateChanged, true);
  }
  onBleStateChanged(state) {
    if (state === 'PoweredOn') {
      console.log('bt is on');
      this.props.dispatch(BleOnAction(this.manager))
    } else if (state === 'PoweredOff') {
      console.log('bt is off');
      this.props.dispatch(BleOffAction())
    } else {
      console.log(state);
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <ScanListContainer />
        </Content>
      </Container>
    );
  }
}

const Tab1Screen = connect()(tab1Screen)

export { Tab1Screen }
