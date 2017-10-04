import React from "react";

function Footer() {
    return (
        <div className="footer">
            <a href="#" className="navItem ">About</a>
            <a href="#" className="navItem ">Portfolio</a>
            <img className="navItem brand" src={require("../assets/kitson-creative-logo.jpg")}/>
            <a href="#" className="navItem ">Partners</a>
            <a href="#" className="navItem ">Contact</a>
        </div>
    )
};

export default Footer;
