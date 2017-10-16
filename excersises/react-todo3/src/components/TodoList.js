import React from "react";
import TodoContainer from "./TodoContainer";
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            newTodo: {
                title: "",
                description: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.postNewTodo = this.postNewTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.vschool.io/jamie/todo/`).then(response => {
            this.setState({
                todoList: response.data.reverse()
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

    postNewTodo(event) {
        axios
            .post(`https://api.vschool.io/jamie/todo/`, this.state.newTodo)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todoList: [response.data, ...prevState.todoList],
                        newTodo: {
                            title: "",
                            description: ""
                        }
                    };
                });
            });
    }

    deleteTodo(id) {
        axios
            .delete(`https://api.vschool.io/jamie/todo/${id}`)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todoList: prevState.todoList.filter(
                            todo => todo._id !== id
                        )
                    };
                });
            });
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    name="title"
                    type="text"
                    placeholder="New Todo"
                    value={this.state.newTodo.title}
                />
                <input
                    onChange={this.handleChange}
                    name="description"
                    type="text"
                    placeholder="Details?"
                    value={this.state.newTodo.description}
                />
                <button onClick={this.postNewTodo}>Add!</button>
                {this.state.todoList.map((todo, i) => {
                    return (
                        <TodoContainer
                            todo={todo}
                            key={todo.title + i}
                            deleteTodo={this.deleteTodo}
                        />
                    );
                })}
            </div>
        );
    }
}

export default TodoList;
