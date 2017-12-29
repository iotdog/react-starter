import {
  ACTION_LOGIN
} from './types'

const loginAction = (userid, phone, token) => {
  return {
    type: ACTION_LOGIN,
    userid,
    phone,
    token,
  }
}

export default loginAction
