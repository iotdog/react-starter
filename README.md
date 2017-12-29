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

Related source code is as follows:

* App.js - setup redux store
* js/components/stacks/stack2.js - navigate to TodoList Screen
* js/actions/todo - define actions
* js/components/todo - define ui components
* js/containers/todo - define containers
* js/reducers/todo - define reducers

## References

[React-redux "connect" explained](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
