import React from "react";
import FormComponent from "./Component";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                title: "",
                description: ""
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
        this.props.addTodo(this.state.inputs);
        this.setState({
            inputs: {
                title: "",
                description: ""
            }
        });
    }

    render() {
        return (
            <div>
                <FormComponent
                    handleChange={this.handleChange}
                    inputs={this.state.inputs}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default FormContainer;
