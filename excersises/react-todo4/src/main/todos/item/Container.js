import React from "react";
import ItemComponent from "./Component";

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: props.todo.title,
                description: props.todo.description,
                completed: props.todo.completed
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]:
                        e.target.type === "checkbox"
                            ? e.target.checked
                            : e.target.value
                }
            };
        });
    }

    handleSave(e) {
        e.preventDefault();
        this.props.handleEdit(this.props.todo._id, this.state.inputs);
    }

    render() {
        return (
            <ItemComponent
                todo={this.props.todo}
                handleDelete={this.props.handleDelete}
                handleChange={this.handleChange}
                inputs={this.state.inputs}
                handleSave={this.handleSave}
            />
        );
    }
}

export default ItemContainer;
