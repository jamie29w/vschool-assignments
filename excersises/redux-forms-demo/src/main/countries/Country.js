import React from "react";

function Country(props) {
    const styles = {
        backgroundImage: `url(${props.country.imgURL})`,
        backgroundSize: "cover",
        width: "500px",
        height: "300px"
    };
    return (
        <div style={styles}>
            <h4>{props.country.name}</h4>
        </div>
    );
}

export default Country;
