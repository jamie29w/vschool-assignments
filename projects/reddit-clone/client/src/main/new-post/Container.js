import React from "react";
import NewPostComponent from "./Component";

class NewPostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleDisplay: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(prevState => {
            return {
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    render() {
        return (
            <NewPostComponent
                toggleDisplay={this.state.toggleDisplay}
                handleToggle={this.handleToggle}
            />
        );
    }
}

export default NewPostContainer;
