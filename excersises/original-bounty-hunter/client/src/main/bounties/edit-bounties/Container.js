import React from 'react';
import EditBountiesComponent from './Component';

import { connect } from 'react-redux';
import { bountyActions } from '../../../redux/bounties';

class EditBountiesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleDisplay: true,
      inputs: {
        fName: props.bounty.fName,
        lName: props.bounty.lName,
        bounty: props.bounty.bounty,
        living: props.bounty.living,
        type: props.bounty.type
      },
      types: {
        Human: props.bounty.type === 'Human',
        Droid: props.bounty.type === 'Droid',
        Wookie: props.bounty.type === 'Wookie',
        Ewok: props.bounty.type === 'Ewok'
      }
    };
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  // doesTypeMatch(str)

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
      if (e.target.type === 'radio') {
        return {
          inputs: {
            ...prevState.inputs,
            [e.target.name]: e.target.value
          },
          types: {
            Human: false,
            Droid: false,
            Wookie: false,
            Ewok: false,
            [e.target.value]: true
          }
        };
      } else {
        return {
          ...prevState,
          inputs: {
            ...prevState.inputs,
            [e.target.name]:
              e.target.type === 'checkbox' ? e.target.checked : e.target.value
          }
        };
      }
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

  handleDeleteClick() {
    console.log(this.props.bounty._id);
    this.props.deleteBounty(this.props.bounty._id);
  }

  render(props) {
    return (
      <EditBountiesComponent
        handleEditToggle={this.handleEditToggle}
        handleChange={this.handleChange}
        handleSaveSubmit={this.handleSaveSubmit}
        handleDeleteClick={this.handleDeleteClick}
        inputs={this.state.inputs}
        types={this.state.types}
        toggleDisplay={this.state.toggleDisplay}
      />
    );
  }
}

const mapStatetoProps = state => {
  return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bountyActions)(EditBountiesContainer);
