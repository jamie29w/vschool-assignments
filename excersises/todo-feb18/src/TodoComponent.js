import React, { Component } from 'react';

export default function TodoComponent(props) {
  return (
    <div>
      <h1>Title: {props.todo.title}</h1>
      <p>Description: {props.todo.description}</p>
      <button
        onClick={() => {
          props.handleDelete(props.todo._id);
        }}>
        Delete
      </button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
