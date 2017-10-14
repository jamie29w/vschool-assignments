import React from "react";

function TodoComponent(props) {
    const divStyle = {
        marginTop: "6%"
    };
    const todoTextStyle = {
        color: "#327AB7",
        marginTop: "1%",
        marginBottom: "1%"
    };

    const inputStyles = {
        marginTop: "6%",
        marginLeft: "2%",
        marginRight: "2%",
        width: "200px",
        display: "inline"
    };

    const buttonStyles = {
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "1%",
        width: "200px",
        display: "inline"
    };

    const checkboxStyles = {
        display: "inline"
    };
    return (
        <div style={divStyle}>
            <h2 style={todoTextStyle}>{props.todo.title}</h2>
            <h4 style={todoTextStyle}>{props.todo.description}</h4>
            <button
                style={buttonStyles}
                onClick={() => {
                    props.deleteTodo(props.todo._id);
                }}
                className="btn btn-success">
                Complete (^‿^) Remove!
            </button>
            <button
                style={buttonStyles}
                className="btn btn-primary"
                onClick={props.handleToggle}>
                Edit
            </button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSubmit} action="">
                    <input
                        value={props.editedTodo.title}
                        type="text"
                        placeholder="Edit Title"
                        onChange={props.handleEdit}
                        name="title"
                        style={inputStyles}
                        className={"form-control input-md"}
                    />
                    <input
                        value={props.editedTodo.description}
                        type="text"
                        placeholder="Edit Description"
                        onChange={props.handleEdit}
                        name="description"
                        style={inputStyles}
                        className={"form-control input-md"}
                    />
                    <button type="submit" className="btn btn-success">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TodoComponent;
