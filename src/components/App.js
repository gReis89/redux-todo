import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import FilterTodos from './FilterTodos';

class App extends React.Component {
  render () {

    return (
      <div>
        <h1>React + Redux Todo List</h1>
        <AddTodos />
        <ListTodos />
        <FilterTodos />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
