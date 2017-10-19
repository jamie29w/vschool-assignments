import React from "react";
import { connect } from "react-redux";
import { addOne, subtractOne } from "../redux/actions/index.js";

function Counter(props) {
    const style = {
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "100px"
    };
    const buttonStyle = {
        fontSize: "50px"
    };
    return (
        <div style={style}>
            <button onClick={props.subtractOne} style={buttonStyle}>
                -
            </button>
            <span>{props.counter}</span>
            <button onClick={props.addOne} style={buttonStyle}>
                +
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { addOne, subtractOne })(Counter);
