import React from "react";
import { connect } from "react-redux";
import { countries } from "../../redux/actions";

function Country(props) {
    console.log(props);
    const styles = {
        backgroundImage: `url(${props.country.imgURL})`,
        backgroundSize: "cover",
        width: "500px",
        height: "300px",
        color: "blue"
    };
    return (
        <div style={styles}>
            <h4>{props.country.name}</h4>
            <button
                onClick={() => {
                    props.deleteCountry(props.index);
                }}>
                Delete!
            </button>
        </div>
    );
}

export default connect(null, countries)(Country);
