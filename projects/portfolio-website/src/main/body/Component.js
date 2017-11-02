import React from "react";
import { Grid, Row } from "react-bootstrap";
import HomeComponent from "./home/Component";
import SkillsComponent from "./skills/Component";

function BodyComponent(props) {
    const divStyles = {
        backgroundColor: "#F6F4F5",
        color: "#2C2C2A",
        width: "100%",
        textAlign: "center"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <HomeComponent />
                </Row>
                <Row>
                    <SkillsComponent />
                </Row>
            </Grid>
        </div>
    );
}

export default BodyComponent;
