import {
  combineReducers
} from 'redux'
import {
  ACTION_BLESCAN_START,
  ACTION_BLESCAN_STOP,
  ACTION_BLESCAN_UPDATE
} from '../../actions/ble'

const scanningReducer = (state = false, action) => {
  switch (action.type) {
    case ACTION_BLESCAN_START:
      return true
    case ACTION_BLESCAN_STOP:
      return false
    default:
      return state
  }
}

const deviceReducer = (devices = [], action) => {
  switch (action.type) {
    case ACTION_BLESCAN_UPDATE:
      let existed = false
      for (let i = 0; i < devices.length; i++) {
        if (devices[i]['mac'] == action.mac) { // update existed device
          devices[i]['name'] = action.name
          devices[i]['rssi'] = action.rssi
          existed = true
          break
        }
      }
      if (!existed) {
        devices.push({ // add new device
          mac: action.mac,
          name: action.name,
          rssi: action.rssi
        })
      }
      /**
       * sort by RSSI
       */
      devices.sort((a, b) => {
        if (a.rssi >= b.rssi) {
          return -1
        }
        return 1
      })
      /**
       * must return new array object, see https://redux.js.org/docs/Troubleshooting.html
       */
      let tmp = []
      for(let i=0; i<devices.length; i++) {
        tmp.push({
          mac: devices[i]['mac'],
          name: devices[i]['name'],
          rssi: devices[i]['rssi']
        })
      }
      return tmp
    default:
      return devices
  }
}

const scanReducer = combineReducers({
  scanning: scanningReducer,
  devices: deviceReducer
})

export default scanReducer
