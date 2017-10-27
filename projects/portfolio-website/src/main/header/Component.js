import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import backgroundUrl2 from "../../assets/iceland.jpg";
import backgroundUrl1 from "../../assets/mountain.jpg";
import backgroundUrl3 from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
    const divStyles = {
        background: `url(${backgroundUrl3}) no-repeat center center`,
        backgroundSize: "cover",
        // backgroundColor: "#B8B8B6",

        width: "100%",
        minWidth: "375px",
        height: "75vh",
        postion: "relative",
        // fontFamily: "'Open Sans', sans-serif",
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
                <h2 style={subHeadText}>Web Developer</h2>
            </div>
        </div>
    );
}

export default HeaderComponent;
