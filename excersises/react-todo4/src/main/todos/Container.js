import React from "react";
import TodosComponent from "./Component";
import ItemContainer from "./item/Container";

import axios from "axios";
const url = "https://api.vschool.io/jamie/todo/";

class TodosContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            inputs: {
                title: "",
                description: ""
            }
        };
        this.genTodos = this.genTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        axios.get(url).then(response => {
            this.setState({
                todos: response.data.reverse()
            });
        });
    }

    genTodos() {
        return this.state.todos.map(todo => {
            return (
                <ItemContainer
                    key={todo._id}
                    todo={todo}
                    handleDelete={this.handleDelete}
                />
            );
        });
    }

    addTodo(todo) {
        axios.post(url, todo).then(response => {
            this.loadData();
        });
    }

    handleDelete(id) {
        axios.delete(url + id).then(response => {
            this.loadData();
        });
    }

    handleEdit(id, editedTodo) {
        axios.put(url + id, editedTodo).then(response => {
            this.loadData();
        });
    }

    render() {
        return (
            <TodosComponent
                genTodos={this.genTodos}
                addTodo={this.addTodo}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
            />
        );
    }
}

export default TodosContainer;
