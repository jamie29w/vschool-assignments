import React from "react";

function TodoComponent(props) {
    return (
        <div>
            <h2>{props.todo.title}</h2>
            <h4>{props.todo.description}</h4>
            <button
                onClick={() => {
                    props.deleteTodo(props.todo._id);
                }}>
                Delete!
            </button>
        </div>
    );
}

export default TodoComponent;
