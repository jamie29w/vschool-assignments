import React from "react";

export default function Service(props) {
    const id = props.match.params.id;
    const serviceInfo = props.searchById(id);
    console.log(serviceInfo);

    return (
        <div>
            <h3>{serviceInfo.title}</h3>
            <p style={{ fontStyle: "bold" }}>{serviceInfo.price}</p>
        </div>
    );
}
