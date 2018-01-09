import {
  ACTION_BLE_ON,
  ACTION_BLE_OFF,
} from '../../actions/ble'

const hardwareReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_BLE_ON:
      return {
        bleOn: true,
        bleMgr: action.bleMgr
      }
    case ACTION_BLE_OFF:
      return {
        bleOn: false,
        bleMgr: null
      }
    default:
      return state
  }
}

export default hardwareReducer
