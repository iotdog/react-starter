import {
  combineReducers
} from 'redux';
import sessionReducer from './session'

const UserReducers = combineReducers({
  info: sessionReducer
})

export { UserReducers }
