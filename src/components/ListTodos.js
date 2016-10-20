import React, {PropTypes} from 'react';

/**
 * React dumb component to list todos
 */
const ListTodos = ({todos, toggleTodo}) => {
  let todoList = todos.map(todo => {
    return (<li className="box has-hand-cursor" key={todo.id} onClick={()=>toggleTodo(todo)}>
      {todo.completed ? <i className="fa fa-check-square-o" /> : <i className="fa fa-square-o" /> }
      &nbsp;
      {todo.text}
    </li>);
  });
  return (
    <ul className="has-padding-vertical-1 has-padding-top-0 is-uppercase">
      {todoList}
    </ul>
  );
};

ListTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default ListTodos;
