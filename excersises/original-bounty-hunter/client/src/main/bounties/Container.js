import React from "react";
import BountiesComponent from "./Component";
import { connect } from "react-redux";
import { bounties } from "../../redux/actions";
import EditBountiesContainer from "./edit-bounties/Container";

class BountiesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.genBountiesList = this.genBountiesList.bind(this);
        // this.handleDeleteClick = this.handleDeleteClick.bind(this);
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
    // handleDeleteClick(id) {
    //     // console.log(this.props.bounties);
    //     this.props.deleteBounty(id);
    // }

    render() {
        return <BountiesComponent genBountiesList={this.genBountiesList} />;
    }
}

const mapStatetoProps = state => {
    return { bounties: state.bounties };
};

export default connect(mapStatetoProps, bounties)(BountiesContainer);
