import React, { PropTypes } from 'react';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import FilterTodos from './FilterTodos';

const App = () => {
  return (
    <div>
      <h1>React + Redux Todo List</h1>
      <AddTodos />
      <ListTodos />
      <FilterTodos />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
