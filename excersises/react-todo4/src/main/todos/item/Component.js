import React from "react";

function ItemComponent(props) {
    return (
        <div>
            <span>Title: </span>
            <h3>{props.todo.title}</h3>
            <span>Description: </span>
            <p>{props.todo.description}</p>
            <button onClick={() => props.handleDelete(props.todo._id)}>
                X
            </button>
            <label>Completed</label>
            <input
                name="completed"
                type="checkbox"
                onClick={props.handleChange}
            />
            <form action="" onSubmit={() => this.handleSave}>
                <input
                    value={props.inputs.title}
                    type="text"
                    placeholder="Edit Title"
                    onChange={props.handleChange}
                    name="title"
                />
                <input
                    value={props.inputs.description}
                    type="text"
                    placeholder="Edit Description"
                    onChange={props.handleChange}
                    name="description"
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default ItemComponent;
