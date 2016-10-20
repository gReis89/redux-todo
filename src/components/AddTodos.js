import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../actions/todosActions';

/**
 * AddTodos React Component connected via react-redux
 * this is responsible to add news todos
 */
class AddTodos extends React.Component {
  constructor(props, context){
    super(props,context);

    //Declaring component state
    this.state = {
      todo: {
        text: '',
        completed: false
      },
    };

    /**
     * Binding custom methods to this component
     */
    this.addTodo = this.addTodo.bind(this);
    this.updateTodoState = this.updateTodoState.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  /*****************
   * REACT METHODS *
   *****************/

  /**
   * Set focus on text input when component did mount
   */
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.todoText).focus();
  }

  /******************
   * CUSTOM METHODS *
   ******************/

  /**
   * Change state when typing on input
   */
  updateTodoState(e) {
    const field = e.target.name;
    let todo = this.state.todo;
    todo[field] = e.target.value;
    return this.setState({todo});
  }

  /**
   * Add new todo calling a redux action
   */
  addTodo() {
    if(this.state.todo.text.length){
      this.props.actions.addTodo(this.state.todo);
      this.clearInputField();
    }
  }

  /**
   * Clear input field
   */
  clearInputField() {
    let todo = this.state.todo;
    todo.text = '';
    this.setState({todo});
  }

  /**
   * Add new todo when hiting the enter key
   */
  handleEnter(e){
    if(e.key === 'Enter'){
      this.addTodo();
    }
  }

  render (){
    return (
      <div className="control is-grouped has-padding-vertical-1 is-marginless">
        <p className="control is-expanded">
          <input className="input is-large" placeholder="What you need to do?" type="text" ref="todoText" value={this.state.todo.text} name="text" onKeyPress={this.handleEnter} onChange={this.updateTodoState} />
        </p>
        <p className="control">
          <button className="button is-primary is-large" onClick={this.addTodo}>Add Todo</button>
        </p>
      </div>
    );
  }
}

AddTodos.propTypes = {
  actions: PropTypes.object.isRequired
};

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

export default connect(undefined,mapDispatchToProps)(AddTodos);
