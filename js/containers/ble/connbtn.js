import {
  connect
} from 'react-redux'
import connBtnComponent from '../../components/ble/connbtn'
import {
  BLECONN_STATE_DISCONNECTED
} from '../../actions/ble'

const mapStateToProps = (state, ownProps) => {
  let connState = state.ble.connection.connState
  if(!connState) {
    connState = BLECONN_STATE_DISCONNECTED
  }
  return {
    mac: ownProps.mac,
    device: ownProps.device,
    connState
  }
}

const connBtnContainer = connect(
  mapStateToProps
)(connBtnComponent)

export default connBtnContainer
