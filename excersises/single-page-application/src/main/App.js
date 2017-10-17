import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Investment from "./views/Investment";
import Blog from "./views/Blog";
import Testimonials from "./views/Testimonials";
import Contact from "./views/Contact";

import { Switch, Route } from "react-router-dom";

import { Grid, Col, Row } from "react-bootstrap";

export default function App() {
    return (
        <div>
            <Navbar />
            <Grid className="switch-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/investment" component={Investment} />
                    <Route exact path="/blog" component={Blog} />
                    <Route
                        exact
                        path="/testimonials"
                        component={Testimonials}
                    />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Grid>
        </div>
    );
}
