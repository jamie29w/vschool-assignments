import React from "react";

function Navbar(props) {
    const flexContainerStyles = {
        width: "100%",
        position: "static",
        backgroundColor: "#273A64",
        height: "5vh",
        top: "15px",
        fontFamily: "'Lato', sans-serif",

        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: "100"
    };
    const linkStyles = {
        // fontFamily: "'Open Sans', sans-serif"
    };
    return (
        <div style={flexContainerStyles}>
            <a className="links" style={linkStyles} href="#">
                Home
            </a>
            <a className="links" style={linkStyles} href="#">
                Portfolio
            </a>
            <a className="links" style={linkStyles} href="#">
                Skills
            </a>
            <a className="links" style={linkStyles} href="#">
                Experience
            </a>
            <a className="links" style={linkStyles} href="#">
                Contact
            </a>
        </div>
    );
}

export default Navbar;
