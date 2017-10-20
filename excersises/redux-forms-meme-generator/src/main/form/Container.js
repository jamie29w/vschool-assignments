import React from "react";
import FormComponent from "./Component";
import { connect } from "react-redux";
import { memes } from "../../redux/actions/";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                topText: "",
                bottomText: "",
                imgUrl: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.state.inputs);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addMeme(this.state.inputs);
        this.setState({
            inputs: {
                topText: "",
                bottomText: "",
                imgUrl: ""
            }
        });
    }

    render(props) {
        return (
            <div>
                <FormComponent
                    inputs={this.state.inputs}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default connect(null, memes)(FormContainer);
