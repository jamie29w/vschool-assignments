import React from "react";
import EditBountiesComponent from "./Component";

import { connect } from "react-redux";
import { bounties } from "../../../redux/actions";

class EditBountiesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleDisplay: false,
            inputs: {
                fName: props.bounty.fName,
                lName: props.bounty.lName,
                bounty: props.bounty.bounty,
                living: props.bounty.living,
                type: props.bounty.type
            }
        };
        this.handleEditToggle = this.handleEditToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    }

    handleEditToggle() {
        this.setState(prevState => {
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    handleChange(e) {
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

    handleSaveSubmit(e) {
        e.preventDefault();
        this.props.editBounty(this.props.bounty._id, this.state.inputs);
        this.setState(prevState => {
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            };
        });
    }

    render() {
        return (
            <EditBountiesComponent
                handleEditToggle={this.handleEditToggle}
                handleChange={this.handleChange}
                handleSaveSubmit={this.handleSaveSubmit}
                inputs={this.state.inputs}
                toggleDisplay={this.state.toggleDisplay}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bounties)(EditBountiesContainer);
