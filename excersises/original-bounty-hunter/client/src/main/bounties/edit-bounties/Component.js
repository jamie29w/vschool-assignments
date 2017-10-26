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
                    <h3>Living:</h3>
                    <div>
                        <input
                            onChange={props.handleChange}
                            name="living"
                            // value="true"
                            type="radio"
                        />
                        <span>Alive</span>
                        <input
                            onChange={props.handleChange}
                            name="living"
                            // value="false"
                            type="radio"
                        />
                        <span>Deceased</span>
                    </div>
                    <h3>Allegiance:</h3>
                    <div>
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Jedi"
                            type="radio"
                        />
                        <span>Jedi</span>
                        <input
                            onChange={props.handleChange}
                            name="type"
                            value="Sith"
                            type="radio"
                        />
                        <span>Sith</span>
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
