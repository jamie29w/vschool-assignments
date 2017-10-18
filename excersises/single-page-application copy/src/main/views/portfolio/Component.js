import React from "react";
import Gallery from "./views/Gallery";

import { Switch, Route } from "react-router-dom";

import { Grid, Row, Col } from "react-bootstrap";

export default function PortfolioComponent(props) {
    let searchById = props.searchById;

    return (
        <Grid>
            <Row>
                <Col xs={3} sm={2}>
                    {props.genLinks()}
                </Col>
                <Col xs={8} xsOffset={1} sm={9} smOffset={1}>
                    <Switch>
                        <Route
                            path="/portfolio/:id"
                            render={props => {
                                return (
                                    <Gallery
                                        searchById={searchById}
                                        {...props}
                                    />
                                );
                            }}
                        />
                    </Switch>
                </Col>
            </Row>
        </Grid>
    );
}
