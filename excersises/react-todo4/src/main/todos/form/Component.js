import React from "react";

function FormComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    onChange={props.handleChange}
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={props.inputs.title}
                />
                <input
                    onChange={props.handleChange}
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={props.inputs.description}
                />
                <button type="submit">+</button>
            </form>
        </div>
    );
}

export default FormComponent;
