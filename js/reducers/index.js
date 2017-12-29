import {
  combineReducers
} from 'redux';
import {
  TodoReducers
} from './todo'
import {
  UserReducers
} from './user'

/**
 * combine reduces is a good way for implementation
 * https://github.com/reactjs/redux/issues/738
 *
 * about combineReducers:
 * https://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html
 */

const RootReducers = combineReducers({
  todo: TodoReducers,
  user: UserReducers
})

export { RootReducers }
