import {
  connect
} from 'react-redux'
import scanListComponent from '../../components/ble/scanlist'

const mapStateToProps = (state, ownProps) => {
  return {
    devices: state.ble.scan.devices,
    navigation: ownProps.navigation
  }
}

const scanListContainer = connect(
  mapStateToProps
)(scanListComponent)

export default scanListContainer
