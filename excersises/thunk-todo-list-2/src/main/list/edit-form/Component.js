import React from "react";

function EditFormComponent(props) {
    return (
        <div>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSaveSubmit}>
                    <input
                        type="text"
                        name="title"
                        onChange={props.handleChange}
                        value={props.updatedTodo.title}
                    />
                    <input
                        type="text"
                        name="description"
                        onChange={props.handleChange}
                        value={props.updatedTodo.description}
                    />
                    <button>Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default EditFormComponent;
