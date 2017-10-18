import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import PortfolioContainer from "./views/portfolio/Container";
import Investment from "./views/Investment";
import Blog from "./views/Blog";
import Testimonials from "./views/Testimonials";
import Contact from "./views/Contact";

import { Switch, Route } from "react-router-dom";

import { Grid } from "react-bootstrap";

export default function App() {
    return (
        <div>
            <Navbar />
            <Grid className="switch-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={PortfolioContainer} />
                    <Route path="/investment" component={Investment} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/testimonials" component={Testimonials} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Grid>
        </div>
    );
}
