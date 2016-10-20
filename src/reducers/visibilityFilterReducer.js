import {SET_VISIBILITY_FILTER} from '../constants/actionTypes';
import initialState from './initialState';

/**
 * Reducer to control the visibility property of the app
 * @param  {String} state           current state
 * @param  {Object} action          action to be dispatched
 * @return {String}                 new visibility filter
 */
export default function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
