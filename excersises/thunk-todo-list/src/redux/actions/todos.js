import axios from "axios";
const todosUrl = "https://api.vschool.io/jamie/todo/";

export function loadTodos() {
    return dispatch => {
        axios
            .get(todosUrl)
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
    //REPLACES THIS:
    // axios.get(todosUrl).then(response => {
    //     return {
    //         type: "LOAD_TODOS"
    //         todos: response.data
    //     }
    // })
    // .catch(err=> {
    //     console.log(err)
    // })
}

export function addTodo(todo) {
    return dispatch => {
        axios
            .post(todosUrl, todo)
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

export function deleteTodo(id) {
    return dispatch => {
        axios
            .delete(todosUrl + id)
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
    console.log(editedTodo);
    return dispatch => {
        axios
            .put(todosUrl + id, editedTodo)
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
