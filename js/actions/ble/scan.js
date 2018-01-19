const ACTION_BLE_ON = 'BLE_ON'
const ACTION_BLE_OFF = 'BLE_OFF'
const ACTION_BLESCAN_START = 'BLESCAN_START'
const ACTION_BLESCAN_STOP = 'BLESCAN_STOP'
const ACTION_BLESCAN_UPDATE = 'BLESCAN_UPDATE'
const ACTION_BLESCAN_CACHE = 'BLESCAN_CACHE'

const BleOnAction = (bleMgr) => {
  return {
    type: ACTION_BLE_ON,
    bleMgr
  }
}

const BleOffAction = () => {
  return {
    type: ACTION_BLE_OFF,
  }
}

const BleScanStartAction = () => {
  return {
    type: ACTION_BLESCAN_START,
  }
}

const BleScanStopAction = () => {
  return {
    type: ACTION_BLESCAN_STOP,
  }
}

const BleScanUpdateAction = () => {
  return {
    type: ACTION_BLESCAN_UPDATE
  }
}

const BleScanCacheAction = (mac, name, rssi, dev) => {
  return {
    type: ACTION_BLESCAN_CACHE,
    mac,
    name,
    rssi,
    dev
  }
}

export {
  ACTION_BLE_ON,
  ACTION_BLE_OFF,
  ACTION_BLESCAN_START,
  ACTION_BLESCAN_STOP,
  ACTION_BLESCAN_UPDATE,
  ACTION_BLESCAN_CACHE,
  BleOnAction,
  BleOffAction,
  BleScanStartAction,
  BleScanStopAction,
  BleScanUpdateAction,
  BleScanCacheAction,
}
