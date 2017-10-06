import React from "react";

function Navbar(props) {
    const styles = {
        background: 'url(${props.img}) no-repeat center center fixed',
        backgroundSize: "100% 100%"
    }
    return (
        <div className="navBar" style = {styles}>
            <a href="#" className="navItem ">About</a>
            <a href="#" className="navItem ">Portfolio</a>
            <img className="navItem brand" src={require("../assets/kitson-creative-logo.jpg")}/>
            <a href="#" className="navItem ">Partners</a>
            <a href="#" className="navItem ">Contact</a>
        </div>
    )
};

export default Navbar;
