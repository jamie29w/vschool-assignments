import React from "react";

function NewBountiesComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleAddSubmit}>
                <input
                    onChange={props.handleChange}
                    name="fName"
                    value={props.inputs.fName}
                    type="text"
                    placeholder="New Bounty First Name"
                />
                <input
                    onChange={props.handleChange}
                    name="lName"
                    value={props.inputs.lName}
                    type="text"
                    placeholder="New Bounty Last Name"
                />
                <button>Add!</button>
            </form>
        </div>
    );
}

export default NewBountiesComponent;
