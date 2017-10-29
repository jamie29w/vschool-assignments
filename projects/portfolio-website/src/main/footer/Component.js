import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function FooterComponent(props) {
    const divStyles = {
        // backgroundColor: "#2C2C2A",
        backgroundColor: "rgba(42, 46, 55, .7)",
        width: "100%",
        padding: "15px",
        position: "relative",
        bottom: "-15px",
        textAlign: "center",
        fontSize: "14px"
    };

    const colStyle = {
        color: "#F6F4F5",
        marginTop: "8px",
        marginBottom: "8px"
    };

    const iconStyle = {
        color: "#F6F4F5",
        fontSize: "35px",
        marginTop: "8px",
        marginBottom: "8px"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col style={iconStyle} xs={5} xsOffset={1}>
                        <a className="links" href="">
                            <i
                                className="fa fa-linkedin-square fa-lg"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                    <Col style={iconStyle} xs={5}>
                        <a className="links" href="https://github.com/jamie29w">
                            <i
                                className="fa fa-github fa-lg"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                    <Col style={colStyle} xs={12} sm={4}>
                        <a
                            className="links"
                            href="mailto:jamie29w@gmail.com?Subject=Programming%20Inquiry">
                            jamie29w@gmail.com
                        </a>
                    </Col>
                    <Col style={colStyle} xs={12} sm={4}>
                        <a className="links" href="">
                            View My Resume
                        </a>
                    </Col>
                    <Col style={colStyle} xs={12} sm={4}>
                        <a className="links" href="tel:775-360-0360">
                            775 360 0360
                        </a>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default FooterComponent;
