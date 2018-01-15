import React from 'react'
import {
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Icon
} from 'native-base'

const ScanDevComponent = ( {mac, name, device, navigation} ) => (
  <ListItem icon style={{marginLeft: 0}} onPress={()=>{
    navigation.navigate('DevCtl', {mac: mac, bledev: device})
  }}>
    <Left>
      <Icon style={{marginLeft: 15}} name='md-bluetooth' />
    </Left>
    <Body>
      <Text>{mac}</Text>
      <Text note>{name}</Text>
    </Body>
    <Right>
      <Text note>{device.rssi}</Text>
    </Right>
  </ListItem>
)

export default ScanDevComponent
