import React from "react";

function FooterComponent(props) {
    const containerStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        width: "100%",
        padding: "15px",
        position: "relative",
        bottom: "-15px",
        fontSize: "14px",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
    };

    // const spanStyle = {
    //     marginTop: "8px",
    //     marginBottom: "8px",
    //     textAlign: "center",
    //     flexBasis: "30%"
    // };

    // const iconStyle = {
    //     fontSize: "35px",
    //     marginTop: "8px",
    //     marginBottom: "8px"
    // };

    return (
        <div style={containerStyles}>
            <span className="a">
                <a className="links" href="https://github.com/jamie29w">
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                </a>
            </span>

            <span className="b">
                <a
                    className="links"
                    href="mailto:jamie29w@gmail.com?Subject=Programming%20Inquiry">
                    jamie29w@gmail.com
                </a>
            </span>
            <span className="c">
                <a className="links" href="">
                    View My Resume
                </a>
            </span>
            <span className="d">
                <a className="links" href="tel:775-360-0360">
                    775 360 0360
                </a>
            </span>
            <span className="e">
                <a
                    className="links"
                    href="https://www.linkedin.com/in/jamiewoodmancy/">
                    <i
                        className="fa fa-linkedin-square fa-lg"
                        aria-hidden="true"
                    />
                </a>
            </span>
        </div>
    );
}

export default FooterComponent;
