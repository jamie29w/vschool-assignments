import React from "react";
import TodoComponent from "./TodoComponent";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDisplay: false,
            editedTodo: {
                title: props.todo.title,
                description: props.todo.description,
                completed: props.todo.completed
            }
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleEdit(event) {
        event.persist();
        this.setState(prevState => {
            return {
                editedTodo: {
                    ...prevState.editedTodo,
                    [event.target.name]: event.target.value
                }
            };
        });
    }

    handleToggle() {
        this.setState(prevState => {
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            this.props.editTodo(this.props.todo._id, this.state.editedTodo);
        });
    }

    render() {
        return (
            <TodoComponent
                todo={this.props.todo}
                deleteTodo={this.props.deleteTodo}
                editedTodo={this.state.editedTodo}
                handleEdit={this.handleEdit}
                handleSubmit={this.handleSubmit}
                toggleDisplay={this.state.toggleDisplay}
                handleToggle={this.handleToggle}
            />
        );
    }
}

export default TodoContainer;
