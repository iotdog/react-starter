import {
  connect
} from 'react-redux'
import scanListComponent from '../../components/ble/scanlist'

const mapStateToProps = (state) => {
  return {
    devices: state.ble.scan.devices
  }
}

const scanListContainer = connect(
  mapStateToProps
)(scanListComponent)

export default scanListContainer
