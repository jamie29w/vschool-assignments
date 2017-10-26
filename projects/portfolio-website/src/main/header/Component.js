import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function HeaderComponent(props) {
    const divStyles = {
        backgroundColor: "#B8B8B6",
        color: "#F6F4F5",
        width: "100%",
        // fontFamily: "'museo-sans'",
        // fontWeight: "100",
        // fontStyle: "normal",
        textAlign: "center"
    };
    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col>
                        <h3 className="text">hi from HeaderComponent</h3>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default HeaderComponent;
