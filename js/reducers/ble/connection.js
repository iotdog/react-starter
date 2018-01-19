import {
  BLECONN_STATE_CONNECTING,
  BLECONN_STATE_CONNECTED,
  BLECONN_STATE_DISCONNECTING,
  BLECONN_STATE_DISCONNECTED,
  ACTION_BLECONN_CONNECTING,
  ACTION_BLECONN_CONNECTED,
  ACTION_BLECONN_SVCDISCOVERED,
  ACTION_BLECONN_DISCONNECTING,
  ACTION_BLECONN_DISCONNECTED,
  BleConnEstablishAction,
  BleConnReleaseAction
} from '../../actions/ble'

const connReducer = (state={}, action) => {
  switch(action.type) {
    case ACTION_BLECONN_CONNECTING:
      return {
        connState: BLECONN_STATE_CONNECTING,
        dev: action.dev,
        mac: action.mac,
        subscription: action.subscription,
        services: []
      }
    case ACTION_BLECONN_CONNECTED:
      return {
        connState: BLECONN_STATE_CONNECTED,
        dev: state.dev,
        mac: state.mac,
        subscription: state.subscription,
        services: state.services
      }
    case ACTION_BLECONN_DISCONNECTING:
      return {
        connState: BLECONN_STATE_DISCONNECTING,
        dev: state.dev,
        mac: state.mac,
        subscription: state.subscription,
        services: state.services
      }
    case ACTION_BLECONN_DISCONNECTED:
      if(state.subscription) {
        state.subscription.remove() // unsubscribe onDisconnected event
      }
      return {
        connState: BLECONN_STATE_DISCONNECTED,
        services: []
      }
    case ACTION_BLECONN_SVCDISCOVERED:
      return {
        connState: BLECONN_STATE_CONNECTED,
        dev: state.dev,
        mac: state.mac,
        subscription: state.subscription,
        services: [
          ...state.services,
          {
            svc: action.svc,
            characteristics: action.chars
          }
        ]
      }
    default:
      return state
  }
}

export default connReducer
