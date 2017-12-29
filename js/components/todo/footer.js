import React from 'react'
import { FilterContainer } from '../../containers/todo'
import {
  View,
  Text
} from 'react-native'

// const Footer = () => (
//   <p>
//     Show:
//     {' '}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_COMPLETED">
//       Completed
//     </FilterLink>
//   </p>
// )

const Footer = () => (
  <View style={{flexDirection: 'row', marginTop: 50}}>
    <Text>Show: </Text>
    <FilterContainer filter="SHOW_ALL">
      All
    </FilterContainer>
    <FilterContainer filter="SHOW_ACTIVE">
      Active
    </FilterContainer>
    <FilterContainer filter="SHOW_COMPLETED">
      Completed
    </FilterContainer>
  </View>
)

export default Footer
