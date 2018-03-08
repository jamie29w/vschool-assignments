import React, { Component } from 'react';
import NewTodosComponent from './NewTodosComponent';

class NewTodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    };
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }
  handleCreateTodo() {}

  render() {
    return <NewTodosComponent handleCreateTodo={this.handleCreateTodo} />;
  }
}

export default NewTodosContainer;
