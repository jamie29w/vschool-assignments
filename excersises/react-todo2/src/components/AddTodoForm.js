import React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

function AddTodoForm(props) {
    return (
        <FormGroup>
            <FormControl
                type="text"
                placeholder="Your Next Todo"
                value={props.state.newTodo.title}
                name="title"
                onChange={props.handleChange}
            />
            <FormControl
                type="text"
                placeholder="Description"
                value={props.state.newTodo.description}
                name="description"
                onChange={props.handleChange}
            />
            <Button onClick={props.handleClick}>Add Todo</Button>
        </FormGroup>
    );
}

export default AddTodoForm;
