import React from "react";
import NavbarComponent from "./Component";

class NavbarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <NavbarComponent
                closeModal={this.closeModal}
                openModal={this.openModal}
                modalShow={this.state.showModal}
            />
        );
    }
}

export default NavbarContainer;
