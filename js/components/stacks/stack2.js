import React, {
  Component
} from 'react'
import {
  Image
} from 'react-native'
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
  StyleProvider,
  Icon
} from 'native-base'
import getTheme from '../../../native-base-theme/components'
import material from '../../../native-base-theme/variables/material'

const nativeBaseLogo = require("../../../assets/nativebase_logo.png"); // 引入自定义图片

class Stack2Screen extends Component<{}> {
  static navigationOptions = {
    title: 'Stack2',
    tabBarIcon: <Image source={nativeBaseLogo} style={{width: 24, height: 24}} />
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
              <Title>NativeBase Header</Title>
            </Body>
          </Header>
          <Content>
            <Text>NativeBase Content</Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>NativeBase FooterTab A</Text>
              </Button>
            </FooterTab>
            <FooterTab>
                <Button full>
                  <Text>NativeBase FooterTab B</Text>
                </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

export { Stack2Screen }
