import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function FooterComponent(props) {
    const divStyles = {
        backgroundColor: "#2C2C2A",
        width: "100%",
        padding: "15px",
        position: "relative",
        bottom: "-15px",
        textAlign: "center"
    };

    const colStyle = {
        color: "#F6F4F5"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col style={colStyle} xs={6} sm={3}>
                        <a className="links" href="">
                            <i
                                className="fa fa-file fa-md"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <a className="links" href="">
                            <i
                                className="fa fa-linkedin-square fa-lg"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <a className="links" href="">
                            <i
                                className="fa fa-github fa-lg"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <a className="links" href="">
                            <i
                                className="fa fa-envelope fa-md"
                                aria-hidden="true"
                            />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <a
                            style={{ fontSize: "12px" }}
                            className="links"
                            href="tel:775-360-0360">
                            775 360 0360
                        </a>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default FooterComponent;
