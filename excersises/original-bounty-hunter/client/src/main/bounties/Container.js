import React from 'react';
import BountiesComponent from './Component';
import { connect } from 'react-redux';
import { bountyActions } from '../../redux/bounties';
import EditBountiesContainer from './edit-bounties/Container';

class BountiesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.genBountiesList = this.genBountiesList.bind(this);
  }

  componentDidMount() {
    this.props.loadBounties();
  }

  genBountiesList() {
    return this.props.bounties.map((bounty, i) => {
      return (
        <EditBountiesContainer
          key={bounty.fName + i}
          bounty={bounty}
          id={bounty._id}
        />
      );
    });
  }

  render() {
    return <BountiesComponent genBountiesList={this.genBountiesList} />;
  }
}

const mapStatetoProps = state => {
  return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bountyActions)(BountiesContainer);
