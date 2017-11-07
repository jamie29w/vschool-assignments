import React from "react";

function NewBountiesComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleAddSubmit}>
                <h1>
                    Name:{" "}
                    <input
                        onChange={props.handleChange}
                        name="fName"
                        type="text"
                        value={props.inputs.fName}
                    />
                    <input
                        onChange={props.handleChange}
                        name="lName"
                        type="text"
                        value={props.inputs.lName}
                    />
                </h1>
                <h2>
                    Bounty Reward:{" "}
                    <input
                        onChange={props.handleChange}
                        name="bounty"
                        type="text"
                        value={props.inputs.bounty}
                    />
                </h2>

                <h3>
                    Type:{" "}
                    <input
                        onChange={props.handleChange}
                        name="type"
                        value="Human"
                        type="radio"
                    />
                    <span>Human </span>
                    <input
                        onChange={props.handleChange}
                        name="type"
                        value="Droid"
                        type="radio"
                    />
                    <span>Droid </span>
                    <input
                        onChange={props.handleChange}
                        name="type"
                        value="Wookie"
                        type="radio"
                    />
                    <span>Wookie </span>
                    <input
                        onChange={props.handleChange}
                        name="type"
                        value="Ewok"
                        type="radio"
                    />
                    <span>Ewok </span>
                </h3>
                <button>Add New Bounty</button>
            </form>
        </div>
    );
}

export default NewBountiesComponent;
