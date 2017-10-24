import React from "react";
import FormComponent from "./Component";

import { connect } from "react-redux";
import { todos } from "../../redux/actions";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: {
                title: "",
                description: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        console.log(e);
        this.setState(prevState => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [e.target.name]: e.target.value
                }
            };
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: {
                title: "",
                description: ""
            }
        });
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                newTodo={this.state.newTodo}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { todos: state.todos };
};

export default connect(mapStatetoProps, todos)(FormContainer);
