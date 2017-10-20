import React from "react";
import FormComponent from "./Component";
import { connect } from "react-redux";
import { countries } from "../../redux/actions";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                imgURL: ""
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
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addCountry(this.state.inputs);
        this.setState({
            inputs: {
                name: "",
                imgURL: ""
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

export default connect(null, countries)(FormContainer);
