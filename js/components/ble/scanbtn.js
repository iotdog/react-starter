import React from 'react'
import {
  Button,
  Text
} from 'native-base'
import {
  BleScanStartAction,
  BleScanStopAction,
  BleScanCacheAction,
  BleScanUpdateAction
} from '../../actions/ble'
import {
  ConvertMac
} from '../../utils'

const scanBtnComponent = ({ dispatch, bleMgr, scanning }) => {
  return (
    <Button transparent light onPress={ () => {
        if(bleMgr == null) {
          console.log('bleMgr is null')
          return
        }
        if(scanning) {
          bleMgr.stopDeviceScan()
          dispatch(BleScanStopAction())
          return
        }
        bleMgr.startDeviceScan(null, null, (error, device) => {
          if(error) {
            console.log(error)
            return
          }
          if (device.name) {
            // adv name contains MAC
            let mac = device.name.substring(device.name.length - 12, device.name.length)
            mac = ConvertMac(mac)
            let name = device.name.substring(0, device.name.length - 12)
            // if(device.rssi > -60) {
            //   dispatch(BleScanCacheAction(mac, name, device.rssi, device))
            //   dispatch(BleScanUpdateAction())
            // }
            dispatch(BleScanCacheAction(mac, name, device.rssi, device))
            dispatch(BleScanUpdateAction())
          }
        })
        dispatch(BleScanStartAction())
      }
    }>
      <Text style={{color: 'black'}}>{scanning ? 'Stop' : 'Scan'}</Text>
    </Button>
  )
}

export default scanBtnComponent
