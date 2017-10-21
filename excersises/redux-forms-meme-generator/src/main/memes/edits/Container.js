import React from "react";
import EditsComponent from "./Component";

class EditsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            toggleDisplay: false,
            inputs: {
                topText: "",
                bottomText: "",
                imgUrl: ""
            }
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleToggle() {
        console.log(this.state.toggleDisplay);
        this.setState(prevState => {
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            };
        });
        // console.log(this.state.inputs);
    }

    handleSubmit(e) {
        // e.preventDefault();
        // this.props.addMeme(this.state.inputs);
        // this.setState({
        //     inputs: {
        //         topText: "",
        //         bottomText: "",
        //         imgUrl: ""
        //     }
        // });
    }

    render(props) {
        return (
            <EditsComponent
                display={this.state.toggleDisplay}
                inputs={this.state.inputs}
                handleChange={this.handleChange}
                handleToggle={this.handleToggle}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default EditsContainer;
