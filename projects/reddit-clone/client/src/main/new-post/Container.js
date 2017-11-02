import React from "react";
import NewPostComponent from "./Component";
import { connect } from "react-redux";
import { posts } from "../../redux/actions";

class NewPostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDisplay: false,
            inputs: {
                title: "",
                text: "",
                votes: 0
            }
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleToggle() {
        this.setState(prevState => {
            return {
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.addPost(this.state.inputs);
    }

    render() {
        return (
            <NewPostComponent
                toggleDisplay={this.state.toggleDisplay}
                handleToggle={this.handleToggle}
                inputs={this.state.inputs}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { posts: state.posts };
};

export default connect(mapStatetoProps, posts)(NewPostContainer);
