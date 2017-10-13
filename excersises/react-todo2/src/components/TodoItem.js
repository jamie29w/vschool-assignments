import React from "react";

function TodoItem(props) {
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <h3>{props.todo.description}</h3>
            <button onClick={() => props.deleteTodo(props.todo._id)}>
                Delete
            </button>
            <hr />
        </div>
    );
}

export default TodoItem;
