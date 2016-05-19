'use strict'

import React from 'react';
import ToDoStore from '../stores/todoStore';
import ToDoActions from '../actions/todoActions';
import TodoTextInput from '../components/todoTextInput';

function getTodoState() {
  return {
    allTodos: ToDoStore.getAll()
  };
}

var Todo = React.createClass({
	getInitialState: function() {
    return getTodoState();
  },
  componentDidMount: function() {
    ToDoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ToDoStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getTodoState());
  },
  _onSave: function(text) {
    ToDoActions.create(text);
  },
  render: function() {
    let todos = [];
    for (let key in this.state.allTodos) {
      todos.push(<TodoItem key={key} todo={this.state.allTodos[key]} />);
    }
    return (
      <div className="col-md-12">
      	<h1>Todo list</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
        <hr />
        <ol>
          {todos}
        </ol>
    	</div>
    );
  }
});

var TodoItem = React.createClass({

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var todo = this.props.todo;

    return (
      <li
        key={todo.id}>
        <label>
          {todo.text}
        </label>
        <button className="btn btn-xs btn-danger" style={{'margin-left':'10px'}} onClick={this._onDestroyClick} ><span className="glyphicon glyphicon-trash"></span></button>
      </li>
    );
  },

  _onDestroyClick: function() {
    ToDoActions.destroy(this.props.todo.id);
  }

});

module.exports = Todo;
