import React, {
  Component
} from 'react'
import {
  Container,
  Header,
  Content,
  H1
} from 'native-base'

class Tab2Screen extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content>
          <H1>This is Tab2Screen</H1>
        </Content>
      </Container>
    );
  }
}

export { Tab2Screen }
