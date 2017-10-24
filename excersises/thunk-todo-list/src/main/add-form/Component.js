import React from "react";

function FormComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    onChange={props.handleChange}
                    name="title"
                    placeholder="todo"
                    type="text"
                    value={props.newTodo.title}
                />
                <input
                    onChange={props.handleChange}
                    name="description"
                    placeholder="description"
                    type="text"
                    value={props.newTodo.description}
                />
                <button type="submit">Add Todo!</button>
            </form>
        </div>
    );
}
export default FormComponent;
