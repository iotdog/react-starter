import React, {
  Component
} from 'react';
import {
  Platform
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import {
  HomeScreen
} from './js/components/home';
import {
  Stack1Screen,
  Stack2Screen
} from './js/components/stacks';
import {
  Tab1Screen,
  Tab2Screen
} from './js/components/tabs';

/**
 * home screens
 */
const HomeRoutes = {
  Home: {
    screen: HomeScreen,
  },
  Stack1: {
    screen: Stack1Screen,
  },
  Stack2: {
    screen: Stack2Screen,
  },
}

const HomeNavigator = StackNavigator({
  ...HomeRoutes,
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
  /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

/**
 * global navigation
 */
const RootNavigator = TabNavigator({
  TabHome: {
    screen: HomeNavigator,
  },
  Tab1: {
    screen: Tab1Screen,
  },
  Tab2: {
    screen: Tab2Screen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue',
  },
});

export default () => <RootNavigator />
/**
 * the following code is for ReactBase Toast
 */
// <Root>
//   <RootNavigator />
// </Root>;
