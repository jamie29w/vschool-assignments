import React from "react";
import { Modal, OverlayTrigger, Button } from "react-bootstrap";
// import { scrollToComponent } from "react-scroll-to-component";

function Navbar(props) {
    const flexContainerStyles = {
        width: "100%",
        position: "fixed",
        backgroundColor: "rgba(39, 58, 100, .9)",
        height: "5vh",
        fontFamily: "'Lato', sans-serif",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: "100"
    };

    return (
        <div style={flexContainerStyles}>
            <a className="links" href="#" onClick={props.openModal}>
                Home
            </a>
            <a className="links" href="#" onClick={props.openModal}>
                Portfolio
            </a>
            <a className="links" href="#">
                About Me
            </a>
            <a className="links" href="#">
                Contact
            </a>

            <Modal show={props.modalShow} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>This section is in production</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please enjoy the rest of my website in the meanwhile.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Navbar;
