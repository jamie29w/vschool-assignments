import React from "react";
import TodoComponent from "./TodoComponent";
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

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);
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

    handleClickAdd(event) {
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

    handleClickDel(id) {
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

    render() {
        const inputStyles = {
            marginTop: "5%",
            marginLeft: "2%",
            marginRight: "2%",
            marginBottom: "3%",
            width: "20%",
            display: "inline"
        };

        const buttonStyles = {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: ""
        };
        return (
            <div>
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
                <button
                    className="btn btn-primary"
                    style={buttonStyles}
                    onClick={this.handleClickAdd}>
                    Add to List
                </button>
                {this.state.todoList.map((obj, i) => {
                    return (
                        <TodoComponent
                            todo={obj}
                            key={obj.title + i}
                            handleClickDel={this.handleClickDel}
                        />
                    );
                })}
            </div>
        );
    }
}

export default TodoList;
