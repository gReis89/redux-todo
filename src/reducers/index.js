import { combineReducers } from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer
});

export default rootReducer;
