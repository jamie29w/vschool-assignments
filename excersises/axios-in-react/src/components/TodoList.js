import React from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            TodoList: []
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/jamie/todo/").then((response) => {
            this.setState({
                TodoList: response.data
            })
        })
    }

    render() {
        return this.state.TodoList.map((todo, i) => {
            return (
                <TodoComponent
                    title = {todo.title}
                    description = {todo.description}
                    key = {todo.title + i}
                />
            )
        })
    }
}

export default TodoList
