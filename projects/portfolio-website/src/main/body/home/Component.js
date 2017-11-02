import React from "react";
import { Col } from "react-bootstrap";

function HomeComponent(props) {
    const colStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px"
    };

    const headTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontWeight: "100",
        fontStyle: "italic",
        fontSize: ".9em",
        marginTop: "25px",
        marginLeft: "25px",
        textAlign: "justify"
    };

    const bodyTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".55em",
        fontWeight: "300",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "125%",
        marginLeft: "25px",
        marginRight: "25px",
        letterSpacing: "0px"
    };

    const tldrStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".55em",
        fontWeight: "100",
        fontStyle: "italic",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "125%",
        marginLeft: "25px",
        marginRight: "25px",
        letterSpacing: "0px"
    };
    const punctuationStyles = {
        color: "rgba(39, 58, 100, .9)",
        fontWeight: "400"
    };

    return (
        <Col style={colStyles} xs={10} xsOffset={1} sm={12} smOffset={0}>
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
            <h3 style={tldrStyles}>
                tl;dr Value-Added <span style={punctuationStyles}>|</span>{" "}
                Elegant UX/UI <span style={punctuationStyles}>|</span>{" "}
                Empowering Others
            </h3>
            <h3 style={bodyTextStyles}>Cheers!</h3>
            <h3 style={bodyTextStyles}>-Jamie W</h3>
        </Col>
    );
}

export default HomeComponent;
