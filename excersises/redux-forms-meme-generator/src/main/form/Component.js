import React from "react";
import MemeGen from "./MemeGen";

function FormComponent(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    onChange={props.handleChange}
                    placeholder="Image URL"
                    value={props.inputs.imgUrl}
                    name="imgUrl"
                    type="text"
                />
                <input
                    onChange={props.handleChange}
                    placeholder="Top Text"
                    value={props.inputs.topText}
                    name="topText"
                    type="text"
                />
                <input
                    onChange={props.handleChange}
                    placeholder="Bottom Text"
                    value={props.inputs.bottomText}
                    name="bottomText"
                    type="text"
                />
                <button>Make Your Meme!</button>
            </form>
        </div>
    );
}

export default FormComponent;
