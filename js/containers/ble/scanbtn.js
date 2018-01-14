import {
  connect
} from 'react-redux'
import scanBtnComponent from '../../components/ble/scanbtn'

const mapStateToProps = (state) => {
  return {
    bleMgr: state.ble.hardware.bleMgr,
    scanning: state.ble.scan.scanning
  }
}

const scanBtnContainer = connect(
  mapStateToProps
)(scanBtnComponent)

export default scanBtnContainer
