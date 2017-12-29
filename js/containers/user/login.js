import { connect } from 'react-redux'
import loginComponent from '../../components/user/login'

const loginContainer = connect()(loginComponent)

export default loginContainer
