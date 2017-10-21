import React from "react";

function EditsComponent(props) {
    return (
        <div>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.display ? "show" : "hide"}>
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
                    <button>Save the Memes!</button>
                </form>
            </div>
        </div>
    );
}

export default EditsComponent;
