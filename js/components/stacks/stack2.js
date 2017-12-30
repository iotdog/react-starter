import React, {
  Component
} from 'react'
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Footer,
  Text,
  Button,
  FooterTab,
  StyleProvider
} from 'native-base'
import getTheme from '../../../native-base-theme/components'
import material from '../../../native-base-theme/variables/material'

class Stack2Screen extends Component<{}> {
  static navigationOptions = {
    title: 'Stack2',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Body>
              <Title>NativeBase Overview</Title>
            </Body>
          </Header>
          <Content>
            <Text>This is stack2</Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Tab A</Text>
              </Button>
            </FooterTab>
            <FooterTab>
                <Button full>
                  <Text>Tab B</Text>
                </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

export { Stack2Screen }
