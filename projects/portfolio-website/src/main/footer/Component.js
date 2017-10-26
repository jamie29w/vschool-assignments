import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function FooterComponent(props) {
    const divStyles = {
        backgroundColor: "#2C2C2A",
        color: "#F6F4F5",
        width: "100%",
        // fontFamily: "museo-sans",
        // fontWeight: "100",
        // fontStyle: "normal",
        textAlign: "center",
        padding: "15px",

        position: "relative",
        bottom: "-15px"
    };

    const colStyle = {
        marginTop: "5px",
        marginBottom: "5px"
    };

    const phoneText = {
        fontSize: "12px"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col style={colStyle} xs={6} sm={3}>
                        <i className="fa fa-file fa-md" aria-hidden="true" />
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <i
                            className="fa fa-linkedin-square fa-lg"
                            aria-hidden="true"
                        />
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                    </Col>
                    <Col style={colStyle} xs={6} sm={3}>
                        <i
                            className="fa fa-envelope fa-md"
                            aria-hidden="true"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span style={phoneText}>775 360 0360</span>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default FooterComponent;
