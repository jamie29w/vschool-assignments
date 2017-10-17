import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </div>
    );
}
