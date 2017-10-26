import React from "react";
import EditFormComponent from "./Component";

import { connect } from "react-redux";
import { todos } from "../../../redux/actions";

class EditFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleDisplay: false,
            updatedTodo: {
                title: props.todo.title,
                description: props.todo.description
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        console.log(this.props);
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
                updatedTodo: {
                    ...prevState.updatedTodo,
                    [e.target.name]: e.target.value
                }
            };
        });
    }

    handleSaveSubmit(e) {
        e.preventDefault();
        this.props.editTodo(this.props.id, this.state.updatedTodo);
    }

    render() {
        return (
            <EditFormComponent
                handleChange={this.handleChange}
                handleSaveSubmit={this.handleSaveSubmit}
                updatedTodo={this.state.updatedTodo}
                handleToggle={this.handleToggle}
                toggleDisplay={this.state.toggleDisplay}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { todos: state.todos };
};

export default connect(mapStatetoProps, todos)(EditFormContainer);
