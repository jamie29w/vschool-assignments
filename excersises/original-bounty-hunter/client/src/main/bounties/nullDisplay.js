import React from "react";
import EditBountiesContainer from "./edit-bounties/Container";

function BountyDisplay(props) {
    return (
        <div>
            {/*<h1>
                {props.bounty.fName} {props.bounty.lName}
            </h1>
            <h3>Bounty: ${props.bounty.bounty}</h3>
            <h3>Bounty Complete: {props.bounty.living ? "Yes" : "No"}</h3>
            <h3>Race: {props.bounty.type}</h3>
            <button
                onClick={() => {
                    props.handleDeleteClick(props.bounty._id);
                }}>
                Delete
            </button>*/}
            <EditBountiesContainer
                bounty={props.bounty}
                id={props.bounty._id}
            />
        </div>
    );
}

export default BountyDisplay;