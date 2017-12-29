import { connect } from 'react-redux'
import logoutComponent from '../../components/user/logout'

const logoutContainer = connect()(logoutComponent)

export default logoutContainer
