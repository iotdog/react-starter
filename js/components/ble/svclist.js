import React from 'react'
import {
  List,
  Card,
  CardItem,
  Text,
  Left,
  Right
} from 'native-base'

const svcListComponent = ({services}) => {
  return (
    <List dataArray={services}
      renderRow={
        (svcInfo) => {
          let svc_id = svcInfo.svc.uuid.substring(4, 8)
          return (
            <Card>
              <CardItem header>
                <Text>Service: {svc_id}</Text>
              </CardItem>
              <Card dataArray={svcInfo.characteristics}
                renderRow={
                  (characteristic) => {
                    let char_id = characteristic.uuid.substring(4, 8)
                    return (
                      <CardItem>
                        <Left>
                          <Text note>Char. UUID</Text>
                        </Left>
                        <Right>
                          <Text>{char_id}</Text>
                        </Right>
                      </CardItem>
                    )
                  }
                }>
              </Card>
            </Card>
          )
        }
      }>
    </List>
    // <List dataArray={services}
    //   renderRow={
    //     (svcInfo) => (
    //       <Card
    //         dataArray={svcInfo.svc.characteristics}
    //         renderRow={
    //           (characteristic) => (
    //             <CardItem>
    //               <Left>
    //                 <Text note>char UUID</Text>
    //               </Left>
    //               <Right>
    //                 <Text>{characteristic.uuid}</Text>
    //               </Right>
    //             </CardItem>
    //           )
    //         }>
    //       </Card>
    //     )
    //   }>
    // </List>
  )
}

export default svcListComponent
