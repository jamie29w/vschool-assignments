import React from "react"

function Antihero(props) {
    return (
        <div onClick = {() => {props.handleClick(props.obj.catchPhrase)}}>
            <div className="heroNameText">{props.obj.name}</div>
            <img className="heroImg" src={props.obj.imgSrc}/>
        </div>
    )
}

export default Antihero
