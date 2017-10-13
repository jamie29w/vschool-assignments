import React from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: {
                title: "",
                description: ""
            }
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postTodo = this.postTodo.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.vschool.io/jamie/todo/`).then(response => {
            this.setState({
                todos: response.data.reverse()
            });
        });
    }

    postTodo(event) {
        axios
            .post(`https://api.vschool.io/jamie/todo/`, this.state.newTodo)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todos: [response.data, ...prevState.todos]
                    };
                });
            });
        // event.target.value = "";
    }

    deleteTodo(id) {
        axios
            .delete(`https://api.vschool.io/jamie/todo/${id}`)
            .then(response => {
                this.setState(prevState => {
                    const newArr = prevState.todos.filter(
                        item => item._id !== id
                    );
                    return {
                        todos: newArr
                    };
                });
            });
    }

    handleChange(event) {
        event.persist();
        this.setState(prevState => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [event.target.name]: event.target.value
                }
            };
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Your Next Todo"
                    value={this.state.newTodo.title}
                    name="title"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.newTodo.description}
                    name="description"
                    onChange={this.handleChange}
                />
                <button onClick={this.postTodo}>Add Todo</button>

                {this.state.todos.map((item, i) => {
                    return (
                        <TodoItem
                            todo={item}
                            deleteTodo={this.deleteTodo}
                            key={item.title + i}
                        />
                    );
                })}
            </div>
        );
    }
}

export default TodoList;
