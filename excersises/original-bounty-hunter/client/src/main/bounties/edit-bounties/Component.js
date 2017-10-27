import React from "react";

function EditBountiesComponent(props) {
    return (
        <div>
            <button onClick={props.handleEditToggle}>Edit Bounty</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSaveSubmit}>
                    <h3>Name:</h3>
                    <div>
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
                        <input
                            onChange={props.handleChange}
                            name="bounty"
                            type="text"
                            value={props.inputs.bounty}
                        />
                    </div>
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

                    <h3>Type:</h3>
                    <div>
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
                    </div>
                    <div>
                        <button onClick={props.handleSaveSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditBountiesComponent;
