import React, {PropTypes} from 'react';

/**
 * React dumb component to list todos
 */
const ListTodos = ({todos}) => {
  return (
    <ul className="has-padding-vertical-1 has-padding-top-0">
      {todos.map(todo => <li className="box" key={todo.id}>{todo.text}</li>)}
    </ul>
  );
};

ListTodos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ListTodos;
