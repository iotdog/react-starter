const BLECONN_STATE_CONNECTING = 'connecting'
const BLECONN_STATE_CONNECTED = 'connected'
const BLECONN_STATE_DISCONNECTING = 'disconnecting'
const BLECONN_STATE_DISCONNECTED = 'disconnected'

const ACTION_BLECONN_CONNECTING = 'BLECONN_CONNECTING'
const ACTION_BLECONN_SVCDISCOVERED = 'BLECONN_SVCDISCOVERED'
const ACTION_BLECONN_CONNECTED = 'BLECONN_CONNECTED'
const ACTION_BLECONN_DISCONNECTING = 'BLECONN_DISCONNECTING'
const ACTION_BLECONN_DISCONNECTED = 'BLECONN_DISCONNECTED'

const BleConnectingAction = (dev, mac, subscription) => {
  return {
    type: ACTION_BLECONN_CONNECTING,
    dev,
    mac,
    subscription
  }
}

const BleConnectedAction = () => {
  return {
    type: ACTION_BLECONN_CONNECTED
  }
}

const BleSvcDiscoveredAction = (svc, chars) => {
  return {
    type: ACTION_BLECONN_SVCDISCOVERED,
    svc,
    chars
  }
}

const BleDisconnectingAction = () => {
  return {
    type: ACTION_BLECONN_DISCONNECTING
  }
}

const BleDisconnectedAction = () => {
  return {
    type: ACTION_BLECONN_DISCONNECTED
  }
}

const BleConnEstablishAction = (dev, mac) => {
  return function(dispatch) {
    // subscribe onDisconnected event
    let onDisconnectedSubscription = dev.onDisconnected(
      (error, device) => {
        console.log(error)
        dispatch(BleDisconnectedAction())
      }
    )
    dispatch(BleConnectingAction(dev, mac, onDisconnectedSubscription))
    dev.connect().then(
      (device) => {
        dispatch(BleConnectedAction())
        return device.discoverAllServicesAndCharacteristics()
      }
    ).then(
      (device) => {
        return device.services()
      }
    ).then(
      (services) => {
        for (let i = 0; i < services.length; i++) {
          let svc = services[i];
          svc.characteristics().then(
            (chars) => {
              dispatch(BleSvcDiscoveredAction(svc, chars))
            }
          )
        }
      }
    )
  }
}

const BleConnReleaseAction = (dev) => {
  return function(dispatch) {
    dispatch(BleDisconnectingAction())
    dev.cancelConnection().then(
      (device) => {
        dispatch(BleDisconnectedAction())
      }
    ).catch(
      (error) => {
        console.log('disconnecting error:' + error)
      }
    )
  }
}

export {
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
}
