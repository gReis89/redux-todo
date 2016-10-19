import * as types from '../constants/actionTypes';

export function addTodo(todo){
  return function(dispatch){
    dispatch({type: types.ADD_TODO, todo});
  };
}
