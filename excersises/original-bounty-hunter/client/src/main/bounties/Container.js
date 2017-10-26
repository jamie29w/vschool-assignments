import React from "react";
import BountiesComponent from "./Component";
import { connect } from "react-redux";
import { bounties } from "../../redux/actions";
import BountyDisplay from "./Display";

class BountiesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.genBountiesList = this.genBountiesList.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.loadBounties();
    }

    genBountiesList() {
        return this.props.bounties.map((bounty, i) => {
            return (
                <BountyDisplay
                    key={bounty.fName + i}
                    bounty={bounty}
                    handleDeleteClick={this.handleDeleteClick}
                />
            );
        });
    }
    handleDeleteClick(id) {
        // console.log(this.props.bounties);
        this.props.deleteBounty(id);
    }

    render() {
        return <BountiesComponent genBountiesList={this.genBountiesList} />;
    }
}

const mapStatetoProps = state => {
    return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bounties)(BountiesContainer);
