export const todos = function(prevTodos = [], action) {
    let newTodos = [...prevTodos];
    switch (action.type) {
        case "LOAD_TODOS":
            return action.todos.reverse();
        case "ADD_TODO":
            newTodos.push(action.todo);
            return newTodos;
        case "DELETE_TODO":
            return (newTodos = newTodos.filter(todo => {
                return action.id !== todo._id;
            }));
        case "EDIT_TODO":
            return newTodos.map(todo => {
                return action.id === todo._id ? action.editedTodo : todo;
            });
        default:
            return prevTodos;
    }
};
