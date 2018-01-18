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
      },
      ...
    ]
  },
  connection: {
    connState: 'disconnected', # can be one of [connecting, connected, disconnecting, disconnected]
    dev: object, # Device instance of react-native-ble-plx library
    mac: 'FF:FF:FF:FF:FF:FF',
    services: [
      {
        uuid: '00001851-0000-1000-8000-00805f9b34fb',
        svc: object, # Service instance of react-native-ble-plx library
        characteristics: [
          {
            uuid: '00002a3a-0000-1000-8000-00805f9b34fb',
            char: object, # Characteristic object of react-native-ble-plx library
          },
          ...
        ]
      },
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
