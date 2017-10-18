import React from "react";
import Navbar from "./Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ServicesContainer from "./views/services/Container";

import { Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={ServicesContainer} />
            </Switch>
        </div>
    );
}
