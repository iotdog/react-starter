const BLECONN_STATE_ESTABLISHING = 'connecting'
const BLECONN_STATE_ESTABLISHED = 'connected'
const BLECONN_STATE_RELEASING = 'releasing'
const BLECONN_STATE_RELEASED = 'released'

const ACTION_BLECONN_ESTABLISH = 'BLECONN_ESTABLISH'
const ACTION_BLECONN_CONNECTING = 'BLECONN_CONNECTING'
const ACTION_BLECONN_CONNECTED = 'BLECONN_CONNECTED'
const ACTION_BLECONN_RELEASE = 'BLECONN_RELEASE'
const ACTION_BLECONN_DISCONNECTING = 'BLECONN_DISCONNECTING'
const ACTION_BLECONN_DISCONNECTED = 'BLECONN_DISCONNECTED'

const BleConnectingAction = () => {
  return {
    type: ACTION_BLECONN_CONNECTING
  }
}

const BleConnEstablishingAction = (dev, connState) => {
  if(connState == BLECONN_RELEASED) {
    return function(dispatch) {
      dispatch(BleConnectingAction())
      // TODO 
      return dev.connect().then()
    }
  }
  else {
    console.log('ble connection is not released')
  }
}

export {
  ACTION_BLECONN_ESTABLISHING,
  ACTION_BLECONN_ESTABLISHED,
  ACTION_BLECONN_RELEASING,
  ACTION_BLECONN_RELEASED
}
