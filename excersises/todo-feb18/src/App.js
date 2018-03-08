import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodosContainer from './NewTodosContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NewTodosContainer />
        <TodoList />
      </div>
    );
  }
}
