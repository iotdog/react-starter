import React from 'react'
import {
  Text,
  View
} from 'react-native'

const infoComponent = ({info}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>ID: </Text>
        <Text>{info.userid}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Phone: </Text>
        <Text>{info.phone}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Token: </Text>
        <Text>{info.token}</Text>
      </View>
    </View>
  )
}

export default infoComponent
