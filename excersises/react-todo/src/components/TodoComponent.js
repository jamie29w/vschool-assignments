import React from "react";

function TodoComponent(props) {
    const divStyle = {
        marginTop: "6%"
    };

    const todoTextStyle1 = {
        color: "#327AB7",
        marginTop: "8%"
    };

    const todoTextStyle2 = {
        color: "#327AB7"
    };

    const inputStyles = {
        marginTop: "6%",
        marginLeft: "2%",
        marginRight: "2%",
        width: "200px",
        display: "inline"
    };

    const buttonStyles1 = {
        marginLeft: "2%",
        marginRight: "2%",
        width: "60px",
        display: "inline",
        textAlign: "center"
    };

    const buttonStyles2 = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "6%",
        width: "60px",
        display: "block"
    };

    return (
        <div style={divStyle}>
            <h2 style={todoTextStyle1}>{props.todo.title}</h2>
            <h4 style={todoTextStyle2}>{props.todo.description}</h4>
            <button
                style={buttonStyles1}
                onClick={() => {
                    props.deleteTodo(props.todo._id);
                }}
                className="btn btn-success">
                Done
            </button>
            <button
                style={buttonStyles1}
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
                    <button
                        style={buttonStyles2}
                        type="submit"
                        className="btn btn-danger">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TodoComponent;
