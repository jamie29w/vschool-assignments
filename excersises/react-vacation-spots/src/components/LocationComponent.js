import React from "react";

function LocationComponent(props) {
    const styles = {
        backgroundColor: props.bgColor
    };
    return (
        <div style={styles}>
            <h3> Destination: {props.name} </h3>
            <h4> Region: {props.region} - {props.price} </h4>
        </div>
    )
}

export default LocationComponent
