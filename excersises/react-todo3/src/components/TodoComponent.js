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
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSubmit} action="">
                    <input
                        onChange={props.handleEdit}
                        value={props.editedTodo.title}
                        placeholder="Edit Title"
                        type="text"
                        name="title"
                    />
                    <input
                        onChange={props.handleEdit}
                        value={props.editedTodo.description}
                        placeholder="Edit Description"
                        type="text"
                        name="description"
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default TodoComponent;
