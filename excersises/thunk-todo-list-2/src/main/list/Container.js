import React from "react";
import ListComponent from "./Component";
import TodoDisplay from "./Display";
import { connect } from "react-redux";
import { todos } from "../../redux/actions";

class ListContainer extends React.Component {
    constructor() {
        super();

        this.genList = this.genList.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.loadTodos();
    }

    genList() {
        return this.props.todos.map((todo, i) => {
            return (
                <TodoDisplay
                    key={todo.title + i}
                    todo={todo}
                    handleDeleteClick={this.handleDeleteClick}
                />
            );
        });
    }
    handleDeleteClick(id) {
        this.props.deletedTodo(id);
    }

    render(props) {
        return <ListComponent genList={this.genList} />;
    }
}

const mapStatetoProps = state => {
    return { todos: state.todos };
};

export default connect(mapStatetoProps, todos)(ListContainer);
