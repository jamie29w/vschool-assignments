import React from "react";
import backgroundUrl from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
    const divStyles = {
        background: `url(${backgroundUrl}) no-repeat center center`,
        backgroundSize: "cover",
        width: "100%",
        minWidth: "375px",
        height: "75vh",
        postion: "relative",
        fontFamily: "'Lato', sans-serif",
        color: "#DCDCDC",
        zIndex: "50"
    };

    const textContainer = {
        position: "absolute",
        bottom: "10%",
        transform: "translateY(-50%)",
        padding: "15px",
        right: "15px",
        textAlign: "right"
    };

    const headText = {
        fontSize: "4.5em",
        marginBottom: "10px",
        fontWeight: "100"
    };
    const subHeadText = {
        fontSize: "2.5em",
        marginTop: "10px",
        fontWeight: "100"
    };
    return (
        <div style={divStyles}>
            <div style={textContainer}>
                <h1 style={headText}>Jamie Woodmancy</h1>
                <h2 style={subHeadText}>Web & App Developer</h2>
            </div>
        </div>
    );
}

export default HeaderComponent;
