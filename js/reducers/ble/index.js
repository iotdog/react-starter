import {
  combineReducers
} from 'redux'
import scanReducer from './scan.js'
import hardwareReducer from './hardware.js'

const BleReducer = combineReducers({
  hardware: hardwareReducer,
  scan: scanReducer
})

export { BleReducer }
