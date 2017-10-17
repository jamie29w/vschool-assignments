import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import TodosContainer from "./todos/Container";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <TodosContainer />
            </div>
        );
    }
}

export default App;
