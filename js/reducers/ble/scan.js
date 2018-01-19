import {
  combineReducers
} from 'redux'
import {
  ACTION_BLESCAN_START,
  ACTION_BLESCAN_STOP,
  ACTION_BLESCAN_UPDATE,
  ACTION_BLESCAN_CACHE
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

const displayReducer = (display = {cache:[], devices:[], updateTime: 0}, action) => {
  switch (action.type) {
    case ACTION_BLESCAN_CACHE:
      if(action.rssi >= 0) { // sometime rssi will get 127 for iOS, ignore them
        return display
      }
      let devices = display.cache
      let existed = false
      for (let i = 0; i < devices.length; i++) {
        if (devices[i]['mac'] == action.mac) { // update existed device
          devices[i]['name'] = action.name
          devices[i]['rssi'] = action.rssi
          devices[i]['dev'] = action.dev
          devices[i]['updateTime'] = Math.floor(Date.now() / 1000)
          existed = true
          break
        }
      }
      if (!existed) {
        devices.push({ // add new device
          mac: action.mac,
          name: action.name,
          rssi: action.rssi,
          dev: action.dev,
          updateTime: Math.floor(Date.now() / 1000)
        })
      }
      return {
        updateTime: display.updateTime,
        devices: display.devices,
        cache: devices
      }
    case ACTION_BLESCAN_UPDATE:
      let curr_time = Math.floor(Date.now() / 1000)
      if(curr_time - display.updateTime >= 2) {
        let tmp = []
        for(let i=0; i<display.cache.length; i++) {
          let curr_time = Math.floor(Date.now() / 1000)
          if(curr_time - display.cache[i]['updateTime'] > 30) { // the device is missed
            continue
          }
          tmp.push({
            mac: display.cache[i]['mac'],
            name: display.cache[i]['name'],
            rssi: display.cache[i]['rssi'],
            dev: display.cache[i]['dev'],
            updateTime: display.cache[i]['updateTime']
          })
        }
        tmp.sort((a, b) => {
          if (a.rssi >= b.rssi) {
            return -1
          }
          return 1
        })
        return {
          updateTime: curr_time,
          devices: tmp,
          cache: display.cache
        }
      } else {
        return display
      }
    default:
      return display
  }
}

const scanReducer = combineReducers({
  scanning: scanningReducer,
  display: displayReducer
})

export default scanReducer
