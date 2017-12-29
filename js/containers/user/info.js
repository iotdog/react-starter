import { connect } from 'react-redux'
import infoComponent from '../../components/user/info'

const mapStateToProps = (state) => {
  return {
    info: state.user.info
  }
}

/**
 * about connect():
 * https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
 */

const infoContainer = connect(
  mapStateToProps
)(infoComponent)

export default infoContainer
