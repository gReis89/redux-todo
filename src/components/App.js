import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../actions/todosActions';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import FilterTodos from './FilterTodos';
import Header from './Header';

/**
 * Main React Component
 */
class App extends React.Component {
  constructor(props, context){
    super(props, context);

    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(todo) {
    console.log(todo);
    this.props.actions.toggleTodo(todo);
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container has-padding-horizontal-1">
          <AddTodos />
          <ListTodos todos={this.props.todos} toggleTodo={this.toggleTodo} />
          <FilterTodos />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object.isRequired
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

/**
 * Map dispatch ations to properties on the component
 * @param  {function} dispatch dispatch function from store
 * @return {Object}            mapped object with actions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todosActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
