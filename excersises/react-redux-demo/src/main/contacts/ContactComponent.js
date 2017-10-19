import React from "react";

export default function Contact(props) {
    const styles = {
        border: "3px dotted rebeccapurple",
        padding: "8px",
        margin: "5px",
        borderRadius: "30%",
        backgroundColor: "limegreen",
        color: "whitesmoke"
    };
    return (
        <div style={styles}>
            <h3>{props.contact.firstName}</h3>
            <h5>{props.contact.lastName}</h5>
            <h5>{props.contact.phone}</h5>
        </div>
    );
}
