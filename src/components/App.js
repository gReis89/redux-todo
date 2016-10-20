import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../actions/todosActions';
import AddTodos from './todo/AddTodos';
import ListTodos from './todo/ListTodos';
import FilterTodos from './todo/FilterTodos';
import Header from './layout/Header';

/**
 * Main React Component
 */
class App extends React.Component {
  constructor(props, context){
    super(props, context);

    this.toggleTodo = this.toggleTodo.bind(this);
  }

  /**
   * set todo to completed or not
   */
  toggleTodo(todo) {
    this.props.actions.toggleTodo(todo);
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container has-padding-horizontal-1">
          <AddTodos />
          <ListTodos todos={this.props.todos} toggleTodo={this.toggleTodo} />
          <FilterTodos active={this.props.filter} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  actions: PropTypes.object.isRequired
};

/**
 * Filter todos list by visibility
 * @param  {Array} todos    list of todos
 * @param  {String} filter  string representing the visibility filter
 * @return {Array}          new list of filtered todos
 */
function filterTodosByVisibility(todos, filter){
  if(filter === '/completed'){
    return todos.filter(t => t.completed);
  } else {
    return todos.filter(t => !t.completed);
  }
}

/**
 * Map state from redux store to component properties
 * @param  {Object} state     Redux store state
 * @param  {Object} ownProps  injected by redux
 * @return {Object}           mapped object with store properties
 */
function mapStateToProps(state, ownProps) {
  let todos = state.todos,
  filter = ownProps.location.pathname;
  if(filter !== '/'){
    todos = filterTodosByVisibility(todos,filter);
  }

  return {
    todos,
    filter
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
