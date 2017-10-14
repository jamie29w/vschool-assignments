import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";

function TodoItem(props) {
    return (
        <div>
            <h1>{props.todo.title}</h1>
            <h3>{props.todo.description}</h3>
            <Button onClick={() => props.deleteTodo(props.todo._id)}>
                Delete
            </Button>
            <hr />
        </div>
    );
}

export default TodoItem;
