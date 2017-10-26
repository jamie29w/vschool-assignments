import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function BodyComponent(props) {
    const divStyles = {
        backgroundColor: "#FFF",
        color: "#2C2C2A",
        width: "100%",
        // fontFamily: "museo-sans",
        // fontWeight: "100",
        // fontStyle: "normal",
        textAlign: "center"
    };
    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
                        <h3>hi from BodyComponent</h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default BodyComponent;
