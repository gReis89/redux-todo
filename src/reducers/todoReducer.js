import {ADD_TODO, TOGGLE_TODO} from '../constants/actionTypes';
import initialState from './initialState';

/**
 * Todos main reducer function
 * @param  {Array}  state=[]  Receives a previous state to be reduced
 * @param  {Object} action    Action to be applied to the state
 * @return {Array}            New immutable state
 */
export default function todos(state=initialState.todos, action) {
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t,action));
    default:
      return state;
  }
}

/**
 * Reducer Composition method: Reducer for a single todo
 * @param  {Object} state  Current state from the reducer
 * @param  {[type]} action Action to be applied to the new state
 * @return {[type]}        New immutable state
 */
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.todo.id,
        text: action.todo.text,
        completed: false
      };
    case TOGGLE_TODO:
      if(state.id !== action.todo.id){
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};
