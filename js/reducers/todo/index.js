import {
  combineReducers
} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityfilter';

const TodoReducers = combineReducers({
  todos,
  visibilityFilter
})

export { TodoReducers }
