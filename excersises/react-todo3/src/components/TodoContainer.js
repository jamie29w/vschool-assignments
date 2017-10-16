import React from "react";
import TodoComponent from "./TodoComponent";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDisplay: false,
            editingTodo: {
                title: props.todo.title,
                description: props.todo.description,
                completed: props.todo.completed
            }
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(event) {
        event.persist();
        this.setState(prevState => {
            return {
                editingTodo: {
                    ...prevState.editingTodo,
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

    render() {
        return (
            <TodoComponent
                todo={this.props.todo}
                deleteTodo={this.props.deleteTodo}
                handleEdit={this.handleEdit}
            />
        );
    }
}

export default TodoContainer;
