import React from "react";

import reactIcon from "../../../assets/react-logo-1000-transparent.png";
import reduxIcon from "../../../assets/redux-logo.png";
import html5Icon from "../../../assets/html5-512.png";
import css3Icon from "../../../assets/css3-512.png";
import bootstrapIcon from "../../../assets/bootstrap-stack.png";
import jsIcon from "../../../assets/js-icon-transparent.png";
import nodeJsIcon from "../../../assets/nodejs-transparent.png";

function SkillsComponent(props) {
    const containerStyles = {
        width: "100%",
        backgroundColor: "#f6f4f5",
        color: "#2A2E37",
        marginTop: "20px",
        marginBottom: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
    };

    const reactIconStyles = {
        background: `url(${reactIcon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "112px",
        width: "112px"
    };
    const reduxIconStyles = {
        background: `url(${reduxIcon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "95px",
        width: "105px"
    };
    const html5IconStyles = {
        background: `url(${html5Icon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "100px",
        width: "100px"
    };
    const css3IconStyles = {
        background: `url(${css3Icon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "112px",
        width: "112px"
    };
    const boostrapIconStyles = {
        background: `url(${bootstrapIcon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "112px",
        width: "112px"
    };
    const jsIconStyles = {
        background: `url(${jsIcon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "112px",
        width: "112px"
    };
    const nodeJsIconStyles = {
        background: `url(${nodeJsIcon}) no-repeat center center`,
        backgroundSize: "cover",
        height: "100px",
        width: "164px"
    };

    const headTextStyles = {
        fontFamily: "'Open Sans', sans-serif"
    };

    return (
        <div>
            <div>
                <h3 style={headTextStyles}>Powered by:</h3>
            </div>
            <div style={containerStyles}>
                <i style={reactIconStyles} />
                <i style={reduxIconStyles} />
                <i style={html5IconStyles} />
                <i style={css3IconStyles} />
                <i style={boostrapIconStyles} />
                <i style={jsIconStyles} />
                <i style={nodeJsIconStyles} />
            </div>
        </div>
    );
}

export default SkillsComponent;
