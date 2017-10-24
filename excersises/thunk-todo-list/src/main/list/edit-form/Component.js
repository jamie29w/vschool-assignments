import React from "react";
import { connect } from "react-redux";
import { todos } from "../../../redux/actions";

function EditFormComponent(props) {
    return (
        <div>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSaveSubmit}>
                    <input
                        name="title"
                        onChange={props.handleChange}
                        value={props.updatedTodo.title}
                        placeholder="new title"
                        type="text"
                    />
                    <input
                        name="description"
                        onChange={props.handleChange}
                        value={props.updatedTodo.description}
                        placeholder="new description"
                        type="text"
                    />
                    <button>Save it!</button>
                </form>
            </div>
        </div>
    );
}

export default connect(null, todos)(EditFormComponent);
