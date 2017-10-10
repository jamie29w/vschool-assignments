import React from "react";

function NameList(props) {
    return (
        <div>
            <ol>
                {props.nameList.map((name, i) => <li key={name + i}>{name}</li>)}
            </ol>
        </div>
    )
}

export default NameList;
