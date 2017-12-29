import {
  ACTION_LOGIN,
  ACTION_LOGOUT
} from '../../actions/user'

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        userid: action.userid,
        phone: action.phone,
        token: action.token
      }
    case ACTION_LOGOUT:
      return {
        userid: state.userid,
        phone: state.phone,
        token: action.token
      }
    default:
      return state
  }
}

export default sessionReducer
