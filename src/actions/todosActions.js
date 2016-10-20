import * as types from '../constants/actionTypes';
import uuid from 'node-uuid';

/**
 * method to dispatch an ADD_TODO action assigning it to an unique id
 * @param {Object} todo a todo Object to be added
 */
export function addTodo(todo){
  todo.id = uuid.v4();
  return function(dispatch){
    dispatch({type: types.ADD_TODO, todo});
  };
}

/**
 * method to dispatch an TOGGLE_TODO
 * @param {Object} todo a todo Object to be toggled
 */
export function toggleTodo(todo){
  return function(dispatch){
    dispatch({type: types.TOGGLE_TODO, todo});
  };
}
