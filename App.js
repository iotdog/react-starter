import React, {
  Component
} from 'react';
import {
  Platform
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import {
  HomeScreen
} from './js/components/home'

const AppRoutes = {
  MainScreen: {
    name: 'Home',
    description: 'home screen',
    screen: HomeScreen,
  },
}

const RootNavigator = StackNavigator({
  ...AppRoutes,
}, {
  initialRouteName: 'MainScreen',
  headerMode: 'none',
  /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default () => <RootNavigator />
/**
 * the following code is for ReactBase Toast
 */
// <Root>
//   <RootNavigator />
// </Root>;
