import {
  ACTION_LOGOUT
} from './types'

const logoutAction = () => {
  return {
    type: ACTION_LOGOUT,
    token: '',
  }
}

export default logoutAction
