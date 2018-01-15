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
import ScanDevComponent from './scandev'

const scanListComponent = ( {devices, navigation} ) => {
  return (
    <List dataArray={devices}
      renderRow={
        (device) => (
          <ScanDevComponent mac={device.mac} name={device.name} device={device.dev} navigation={navigation} />
        )
      }>
    </List>
  )
}

export default scanListComponent
