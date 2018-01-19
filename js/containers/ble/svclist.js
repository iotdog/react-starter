import {
  connect
} from 'react-redux'
import svcListComponent from '../../components/ble/svclist'

const mapStateToProps = (state) => {
  let services = state.ble.connection.services
  if(!services) {
    services = []
  }
  return {
    services
  }
}

const svcListContainer = connect(
  mapStateToProps
)(svcListComponent)

export default svcListContainer
