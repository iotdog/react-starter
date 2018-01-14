import React from 'react'
import {
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Icon
} from 'native-base'

const scanListComponent = ( {devices} ) => {
  return (
    <List dataArray={devices}
      renderRow={
        (device) => (
          <ListItem icon style={{marginLeft: 0}}>
            <Left>
              <Icon style={{marginLeft: 15}} name='md-bluetooth' />
            </Left>
            <Body>
              <Text>{device.mac}</Text>
              <Text note>{device.name}</Text>
            </Body>
            <Right>
              <Text note>{device.rssi}</Text>
            </Right>
          </ListItem>
        )
      }>
    </List>
  )
}

export default scanListComponent
