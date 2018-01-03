# 1. Overview

In this project, we are going to learning the topics as follows:

* Start an empty React Native project
* Integrate [React Navigation](https://reactnavigation.org/) into the project
* Integrate [Redux](https://redux.js.org/) into the project
* Integrate [NatvieBase](https://nativebase.io/) into the project
* Integrate [react-native-ble-plx](https://github.com/Polidea/react-native-ble-plx) into the project
* Integrate [protobuf-js](https://github.com/google/protobuf/tree/master/js) into the project
* Integrate [Couchbase Lite](https://github.com/couchbaselabs/react-native-couchbase-lite) into the project

this project is inspired by [native-starter-kit](https://github.com/start-react/native-starter-kit), but we add some extra features, such as protobuf and BLE (bluetooth low energy).

## 1.1 Run the code

```
git clone https://github.com/iotdog/rn-starter.git
cd rn-starter
npm install
react-native link
react-native run-android # for Android
react-native run-ios # for iOS
```

# 2. Start an Empty React Native Project

Following the [official tutorial](https://facebook.github.io/react-native/docs/getting-started.html) to get start.

# 3. [React Navigation](https://reactnavigation.org/) Integration

TODO

# 4. [Redux](https://redux.js.org/) Integration

Learn about the [core concepts](https://redux.js.org/docs/introduction/CoreConcepts.html) at first.
In this project, we migrate the official redux example [Todo List](https://redux.js.org/docs/basics/ExampleTodoList.html) to React Native app.

## 4.1 Setup

```
npm install --save redux react-redux redux-logger
```

## 4.2 Code

Related source code is as follows:

* App.js - setup redux store
* js/components/stacks/stack2.js - navigate to TodoList Screen
* js/actions/todo - define actions
* js/components/todo - define ui components
* js/containers/todo - define containers
* js/reducers/todo - define reducers

## 4.3 References

[React-redux "connect" explained](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)

# 5. [NativeBase](https://nativebase.io/) Integration

## 5.1 Setup base library

```
npm install --save native-base
npm install --save react-native-vector-icons
react-native link
```

## 5.2 Setup theme library

```
node node_modules/native-base/ejectTheme.js
```
then a folder named native-base-theme gets copied to your project root.

the usages are in js/components/stacks/stack2.js

## 5.3 Code

Related source code is as follows:

* js/components/home/index.js
* js/components/stacks/stack1.js
* js/components/stacks/stack2.js
* js/components/tabs/tab1.js
* js/components/tabs/tab2.js
