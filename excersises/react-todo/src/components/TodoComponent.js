import React from "react";

function TodoComponent(props) {
    const todoTextStyle = {
        color: "rgba(250,250,250,.9)"
    };

    return (
        <div>
            <h2 style={todoTextStyle}>{props.todo.title}</h2>
            <h4 style={todoTextStyle}>{props.todo.description}</h4>
            <button
                onClick={() => {
                    props.handleClickDel(props.todo._id);
                }}
                className="btn btn-success">
                Mark Complete!
            </button>
        </div>
    );
}

export default TodoComponent;
