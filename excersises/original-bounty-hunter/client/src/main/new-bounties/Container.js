import React from "react";
import NewBountiesComponent from "./Component";

import { connect } from "react-redux";
import { bounties } from "../../redux/actions";

class NewBountiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                fName: "",
                lName: "",
                bounty: 0,
                type: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }

    handleChange(e) {
        console.log(this.state.inputs);
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            };
        });
    }

    handleAddSubmit(e) {
        e.preventDefault();
        this.props.addBounty(this.state.inputs);
    }

    render() {
        return (
            <NewBountiesComponent
                handleChange={this.handleChange}
                handleAddSubmit={this.handleAddSubmit}
                inputs={this.state.inputs}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bounties)(NewBountiesContainer);
