import React from "react";
import TodoItemContainer from "./TodoItemContainer";
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

        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
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

    addTodo(event) {
        event.preventDefault();
        if (this.state.newTodo.title === "") {
            alert("Please provide a title for your Todo.");
        } else {
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
                })
                .catch(error => {
                    alert(
                        error,
                        "Please try sending us your Todo again, or refresh your browser."
                    );
                });
        }
    }

    deleteTodo(id) {
        axios
            .delete(`https://api.vschool.io/jamie/todo/${id}`)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todoList: prevState.todoList.filter(
                            item => item._id !== id
                        )
                    };
                });
            });
    }

    editTodo(id, editedTodo) {
        axios
            .put(`https://api.vschool.io/jamie/todo/${id}`, editedTodo)
            .then(response => {
                let newEdit = response.data;
                this.setState(prevState => {
                    const newTodos = prevState.todoList.map(todo => {
                        if (todo._id === id) {
                            return newEdit;
                        } else {
                            return todo;
                        }
                    });
                    return {
                        todoList: newTodos
                    };
                });
            });
    }

    render() {
        const inputStyles = {
            marginTop: "%",
            marginLeft: "2%",
            marginRight: "2%",
            width: "200px",
            display: "inline"
        };

        const buttonStyles = {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "6%",
            marginBottom: "6%",
            paddingLeft: "",
            width: "200px"
        };
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Your Next Todo"
                        type="text"
                        value={this.state.newTodo.title}
                        style={inputStyles}
                        className={"form-control input-md"}
                    />
                    <input
                        onChange={this.handleChange}
                        name="description"
                        placeholder="Add a Description"
                        type="text"
                        value={this.state.newTodo.description}
                        style={inputStyles}
                        className={"form-control input-md"}
                    />
                    <button className="btn btn-danger" style={buttonStyles}>
                        Add it to the List
                    </button>
                </form>

                {this.state.todoList.map((todo, i) => {
                    return (
                        <div key={todo.title + i}>
                            <TodoItemContainer
                                todo={todo}
                                deleteTodo={this.deleteTodo}
                                editTodo={this.editTodo}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TodoList;
