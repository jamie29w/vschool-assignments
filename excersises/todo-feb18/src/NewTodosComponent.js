import React from 'react';

function NewTodosComponent(props) {
  return (
    <div>
      <form onSubmit={props.handleCreateTodo}>
        <input
          value={props.title}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          value={props.description}
          name="description"
          placeholder="description"
          type="text"
        />
        <button>Add me!!</button>
      </form>
    </div>
  );
}

export default NewTodosComponent;
