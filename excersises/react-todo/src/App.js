import React from "react";
import TodoList from "./components/TodoList";

function App() {
    const styles = {
        textAlign: "center"
    };

    return (
        <div style={styles}>
            <TodoList />
        </div>
    );
}

export default App;
