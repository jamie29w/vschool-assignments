import React from "react";
import { Col } from "react-bootstrap";

function AboutMeComponent(props) {
    const colStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px"
    };

    const headTextStyles = {
        fontFamily: "'Open Sans', sans-serif",
        marginTop: "25px",
        marginLeft: "25px",
        textAlign: "justify"
    };

    const bodyTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".5em",
        fontWeight: "300",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "120%",
        marginLeft: "25px",
        marginRight: "25px"
    };
    return (
        <Col style={colStyles} xs={10} xsOffset={1}>
            <h3 style={headTextStyles}>Hello world,</h3>

            <h3 style={bodyTextStyles}>
                I{`'`}m all about getting more great things done. I geek out
                over time value and effectiveness. Call me old-fashioned, but I
                believe the best use of technology is to enable people to do
                more of the things that matter most.
            </h3>
            <h3 style={bodyTextStyles}>
                I also believe great user interface is born of a romance between
                clear purpose and elegance. Content is king. And negative space,
                as his ambassador, emphasizes his greatness.
            </h3>
            <h3 style={bodyTextStyles}>
                As fruit of these passions, I love creating new and better ways
                to do more and equipping others to as well. If you feel the
                same, let{`'`}s change the world together.
            </h3>
            <h3 style={bodyTextStyles}>
                tl;dr Value-Added | Elegant UX/UI | Empowering Others
            </h3>
        </Col>
    );
}

export default AboutMeComponent;
