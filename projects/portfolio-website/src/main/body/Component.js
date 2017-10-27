import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

function BodyComponent(props) {
    const divStyles = {
        backgroundColor: "#F6F4F5",
        color: "#2C2C2A",
        width: "100%",
        // fontFamily: "museo-sans",
        // fontWeight: "100",
        // fontStyle: "normal",
        textAlign: "center"
    };

    const colStyles = {
        backgroundColor: "#2A2E37",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "20px"
    };

    const headTextStyles = {
        fontFamily: "'Open Sans', sans-serif"
    };

    const bodyTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".5em",
        fontWeight: "300"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Col
                        style={colStyles}
                        xs={10}
                        xsOffset={1}
                        md={10}
                        mdOffset={1}>
                        <h3 style={headTextStyles}>
                            Hello world, my name is Jamie.
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Elegant | Straightforward | UX/UI
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi voluptatibus fugit odio maxime,
                            laboriosam, earum sit neque ipsam, totam, eum
                            molestias. Explicabo aliquam nemo expedita magni,
                            doloribus minus voluptate harum!
                        </h3>
                        <h3 style={bodyTextStyles}>
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
