import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AddTodos extends React.Component {

  addTodo() {

  }

  render (){
    let {todos} = this.props;
    console.log(todos);
    return (
      <div>
        <input type="text" />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

AddTodos.propTypes = {
  todos: PropTypes.array
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodos);
