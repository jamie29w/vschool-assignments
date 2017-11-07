import React from "react";

function EditBountiesComponent(props) {
    const containerStyle = {
        marginTop: "20px",
        marginBottom: "20px"
    };

    const buttonStyles = {
        display: "inline"
    };

    return (
        <div style={containerStyle}>
            <hr />
            <button style={buttonStyles} onClick={props.handleDeleteClick}>
                Delete
            </button>
            <button style={buttonStyles} onClick={props.handleEditToggle}>
                Edit Bounty
            </button>
            <button
                className={props.toggleDisplay ? "hide" : "showButton"}
                onClick={props.handleSaveSubmit}>
                Save
            </button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSaveSubmit}>
                    <h1>
                        Name: {props.inputs.fName} {props.inputs.lName}
                    </h1>
                    <h2>Bounty Reward: ${props.inputs.bounty}</h2>

                    <h3>
                        Bounty Complete: {props.inputs.living ? "Yes" : "No"}
                    </h3>

                    <h3>Type: {props.inputs.type}</h3>
                </form>
            </div>
            <div className={props.toggleDisplay ? "hide" : "show"}>
                <form onSubmit={props.handleSaveSubmit}>
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
                        Bounty Reward:{" $"}
                        <input
                            onChange={props.handleChange}
                            name="bounty"
                            type="text"
                            value={props.inputs.bounty}
                        />
                    </h2>
                    <h3>
                        Bounty Complete:{" "}
                        <input
                            onChange={props.handleChange}
                            name="living"
                            // value={props.inputs.living}
                            type="checkbox"
                            checked={props.inputs.living === true}
                        />
                    </h3>

                    <h3>
                        Type:{" "}
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Human"
                            type="radio"
                            checked={props.types.Human}
                        />
                        <span>Human </span>
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Droid"
                            type="radio"
                            checked={props.types.Droid}
                        />
                        <span>Droid </span>
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Wookie"
                            type="radio"
                            checked={props.types.Wookie}
                        />
                        <span>Wookie </span>
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Ewok"
                            type="radio"
                            checked={props.types.Ewok}
                        />
                        <span>Ewok </span>
                    </h3>
                </form>
            </div>
        </div>
    );
}
export default EditBountiesComponent;
