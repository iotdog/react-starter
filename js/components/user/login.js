import React from 'react'
import {
  TextInput,
  Button,
  View
} from 'react-native'
import {
  LoginAction
} from '../../actions/user'

const loginComponent = ({dispatch}) => {
  let phone = ''
  let passwd = ''
  return (
    <View>
      <TextInput
        onChangeText={(text) => phone = text}
        placeholder='phone number'
        style={{
          width: 200,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft: 10,
          marginTop: 20,
        }}
      />
      <TextInput
        onChangeText={(text) => passwd = text}
        placeholder='password'
        style={{
          width: 200,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft: 10,
          marginTop: 20,
        }}
      />
      <Button
        title='Login'
        onPress={() => {
            if(!phone || !phone.trim() || !passwd) {
              return
            }
            dispatch(LoginAction('userid-' + phone, phone, 'token-' + phone))
          }
        }
      />
    </View>
  )
}

export default loginComponent
