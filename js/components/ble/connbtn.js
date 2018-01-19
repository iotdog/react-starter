import React from 'react'
import {
  Button,
  Text
} from 'native-base'
import {
  BLECONN_STATE_DISCONNECTED,
  BLECONN_STATE_CONNECTED,
  BLECONN_STATE_CONNECTING,
  BleConnEstablishAction,
  BleConnReleaseAction
} from '../../actions/ble'

const connBtnComponent = ({dispatch, device, mac, connState}) => {
  console.log(connState)
  return (
    <Button transparent light onPress={
      ()=>{
        if(connState == BLECONN_STATE_DISCONNECTED) { // establish connection
          dispatch(BleConnEstablishAction(device, mac))
        } else if(connState == BLECONN_STATE_CONNECTED || connState == BLECONN_STATE_CONNECTING) { // release connection
          dispatch(BleConnReleaseAction(device))
        } else {
          console.log('releasing connection, please wait')
        }
      }
    }>
      <Text style={{color: 'black'}}>{connState == BLECONN_STATE_DISCONNECTED ? 'Connect' : 'Disconnect'}</Text>
    </Button>
  )
}

export default connBtnComponent
