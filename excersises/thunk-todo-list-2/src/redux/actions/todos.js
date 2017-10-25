import axios from "axios";
const todosURL = "https://api.vschool.io/jamie/todo/";

export function loadTodos() {
    return dispatch => {
        axios
            .get(todosURL)
            .then(response => {
                dispatch({
                    type: "LOAD_TODOS",
                    todos: response.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export function addTodo(todo) {
    return dispatch => {
        axios
            .post(todosURL, todo)
            .then(response => {
                dispatch({
                    type: "ADD_TODO",
                    todo
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export function deletedTodo(id) {
    return dispatch => {
        axios
            .delete(todosURL + id)
            .then(response => {
                dispatch({
                    type: "DELETE_TODO",
                    id
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export function editTodo(id, editedTodo) {
    return dispatch => {
        axios
            .put(todosURL + id, editedTodo)
            .then(response => {
                dispatch({
                    type: "EDIT_TODO",
                    editedTodo: response.data,
                    id
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
}
