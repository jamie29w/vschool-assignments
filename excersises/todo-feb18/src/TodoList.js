import React, { Component } from 'react';
import TodoComponent from './TodoComponent';
// import NewTodosContainer from './NewTodosContainer';
import axios from 'axios';
const todoUrl = 'https:/api.vschool.io/jamie/todo/';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    axios.get(todoUrl).then(response => {
      this.setState({ todos: response.data });
    });
  }

  createTodo(todo) {
    axios.post(todoUrl, todo).then(response => {
      this.setState(prevState => {
        return { todos: [response.data, ...prevState.todos] };
      });
    });
  }

  handleDelete(id) {
    axios.delete(todoUrl + id).then(response => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(todo => {
            return todo._id !== id;
          })
        };
      });
    });
  }

  handleEdit(id) {
    alert(`handlEdit hasn't been created yet.`);
  }

  render() {
    const allTodos = this.state.todos.map((todo, i) => (
      <TodoComponent
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        todo={todo}
        descriptions={todo.description}
      />
    ));
    return allTodos;
  }
}
