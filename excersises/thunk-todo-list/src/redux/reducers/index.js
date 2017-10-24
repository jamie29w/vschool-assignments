import { todos } from "./todos";
import { combineReducers } from "redux";

let reducer = combineReducers({ todos });

//combineReducers replaces this:
// let state = {
//     todos: []
// }
//
// function reducer(prevState = state, action) {
//     return {
//         todos: todos(prevState.todos, action)
//     }
// }

export default reducer;
