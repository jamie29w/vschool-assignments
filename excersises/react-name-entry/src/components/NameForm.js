import React from "react";

function NameForm(props) {
    return (
        <div>
            <input placeholder="Add your name here"
                onChange={props.handleChange}
                value={props.userInput}
                type="text"/>
            <h2>{props.userInput}</h2>
            <button onClick={props.handleClick} >Click to add to Names List</button>
            <h3>Names List:</h3>
            <ol>{props.nameList}</ol>
        </div>
    )
}

export default NameForm;
