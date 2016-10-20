import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import FilterTodos from './FilterTodos';
import Header from './Header';

/**
 * Main React Component
 */
class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="container has-padding-horizontal-1">
          <AddTodos />
          <ListTodos todos={this.props.todos} />
          <FilterTodos />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array
};

/**
 * Map state from redux store to component properties
 * @param  {Object} state Redux store state
 * @return {Object}       mapped object with store properties
 */
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
