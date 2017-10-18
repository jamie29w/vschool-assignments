import React from "react";

import { Link } from "react-router-dom";
import { Grid, Col, Row } from "react-bootstrap";

export default function Navbar() {
    return (
        <Grid>
            <Row>
                <Col xs={12} sm={4} className="link-wrapper">
                    <Link className="link-text" to="/">
                        Home
                    </Link>
                    <Link className="link-text" to="/portfolio">
                        Portfolio
                    </Link>
                    <Link className="link-text" to="/investment">
                        Investment
                    </Link>
                </Col>
                <Col xs={12} sm={4} className="link-wrapper">
                    <img
                        className="logo-img"
                        src="https://woodmancyphotography.com/wp-content/uploads/pp/images/1491773562-WP_logo_PNG.png"
                        alt=""
                    />
                </Col>
                <Col xs={12} sm={4} className="link-wrapper">
                    <Link className="link-text" to="/blog">
                        Blog
                    </Link>
                    <Link className="link-text" to="/testimonials">
                        Testimonials
                    </Link>
                    <Link className="link-text" to="/contact">
                        Contact
                    </Link>
                </Col>
            </Row>
        </Grid>
    );
}
