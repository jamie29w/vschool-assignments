import React from "react";
import EditFormContainer from "./edit-form/Container";
import { connect } from "react-redux";
import { todos } from "../../redux/actions";

function TodoDisplay(props) {
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <h3>{props.todo.description}</h3>
            <button
                onClick={() => {
                    props.handleDeleteClick(props.todo._id);
                }}>
                Delete
            </button>
            <EditFormContainer todo={props.todo} id={props.todo._id} />
        </div>
    );
}
// export default connect(null, todos)(TodoDisplay);

export default TodoDisplay;
