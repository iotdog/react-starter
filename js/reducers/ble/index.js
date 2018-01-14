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
    bleMgr: object, # BleManager instance of the library
  },
  scan: {
    scanning: false, # indicating ble scan is running
    devices: [
      {
        mac: 'FF:FF:FF:FF:FF:FF',
        name: 'sLock-1',
        rssi: -64,
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
