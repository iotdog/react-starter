import React from 'react'
import {
  Button
} from 'react-native'
import {
  LogoutAction
} from '../../actions/user'

const logoutComponent = ({dispatch}) => {
  return (
    <Button
      title='Logout'
      onPress={() => {
          dispatch(LogoutAction())
        }
      }
    />
  )
}

export default logoutComponent
