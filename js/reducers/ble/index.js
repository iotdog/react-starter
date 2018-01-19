import {
  combineReducers
} from 'redux'
import scanReducer from './scan'
import hardwareReducer from './hardware'
import connReducer from './connection'

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
    display: { # for UI display
      updateTime: 1515985047, # used to control that UI is updated every 2 seconds
      devices: [ # used for UI List
        {
          mac: 'FF:FF:FF:FF:FF:FF',
          name: 'sLock-1',
          rssi: -64,
          updateTime: 1515985047, # update time, if time interval (current time minus update time) larger than 30s, the device is treated as missed
          dev: object, # Device instance of react-native-ble-plx library
        },
        ...
      ],
      cache: [...] # cache for scanned devices
    }
  },
  connection: {
    connState: 'disconnected', # can be one of [connecting, connected, disconnecting, disconnected]
    dev: object, # Device instance of react-native-ble-plx library
    mac: 'FF:FF:FF:FF:FF:FF',
    subscription: object, # Subscription on which remove() function can be called to unsubscribe
    services: [
      {
        svc: object, # Service instance of react-native-ble-plx library
        characteristics: [...] # Characteristic object of react-native-ble-plx library
      },
      ...
    ]
  }
}
 */

const BleReducer = combineReducers({
  hardware: hardwareReducer,
  scan: scanReducer,
  connection: connReducer
})

export { BleReducer }
