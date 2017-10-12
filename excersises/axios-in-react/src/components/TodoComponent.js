import React from "react";

function TodoComponent(props) {
    return(
        <div>
            <h2>Title: {props.title}</h2>
            <h4>Description: {props.description}</h4>
        </div>
    )
}

export default TodoComponent
