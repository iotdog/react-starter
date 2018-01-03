import React, {
  Component
} from 'react'
import {
  Container,
  Header,
  Content,
  Title
} from 'native-base'

class Tab1Screen extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content>
          <Title style={{marginTop: 30}}>This is Tab1Screen</Title>
        </Content>
      </Container>
    );
  }
}

export { Tab1Screen }
