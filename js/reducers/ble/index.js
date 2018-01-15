import {
  combineReducers
} from 'redux'
import scanReducer from './scan.js'
import hardwareReducer from './hardware.js'

/*
State Shape：
ble:
{
  hardware: {
    bleOn: false, # indicating bluetooth is on or off
    bleMgr: object, # BleManager instance of react-native-ble-plx library
  },
  scan: {
    scanning: false, # indicating ble scan is running
    devices: [
      {
        mac: 'FF:FF:FF:FF:FF:FF',
        name: 'sLock-1',
        rssi: -64,
        updateTime: 1515985047, # update time, if time interval (current time minus update time) larger than 30s, the device is treated as missed
        dev: object, # Device instance of react-native-ble-plx library
      }
      ...
    ]
  }
}
 */

const BleReducer = combineReducers({
  hardware: hardwareReducer,
  scan: scanReducer
})

export { BleReducer }
