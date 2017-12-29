import React from 'react'
import PropTypes from 'prop-types'
import {
  Text
} from 'react-native'

const Filter = ({ active, children, onClick }) => {
  if(active) {
    return (
      <Text style={{marginLeft: 10}}>{children}</Text>
    )
  }
  return (
    <Text onPress={onClick} style={{textDecorationLine: "underline", marginLeft: 10}}>
      {children}
    </Text>
  )
}

export default Filter
