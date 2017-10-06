import React from "react";


function Box(props) {
    const styles = {
        backgroundColor: `${props.bgCol}`,
        // backgroundSize: "cover",
    };
    return (
        <div className="box" style={styles}>
            <div className="nameText">{props.nameText}</div>
            <img src={props.logoImg}/>
            <div className="urlText">{props.webUrl}</div>
        </div>
    )

}


export default Box;
