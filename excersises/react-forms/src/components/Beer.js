import React from "react";

function Beer(props) {
    return (
        <div>
            <input  onChange={props.handleChange}
                    value={props.brewery}
                    placeholder="Your favorite brewery?"
                    type="text"/>
            <h1>My favorite brewery is...{props.brewery}</h1>
            <button onClick={props.handleClick}>Display Text</button>
        </div>
    )
}

export default Beer
