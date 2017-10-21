import React from "react";
import EditsContainer from "./edits/Container";
import { memes } from "../../redux/actions";
import { connect } from "react-redux";

function Meme(props) {
    console.log(props);
    const containerStyle = {
        width: "250px",
        height: "auto"
    };
    const imgStyles = {
        backgroundImage: `url(${props.meme.imgUrl})`,
        backgroundSize: "cover",
        width: "250px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        textShadow: "2px 2px black"
    };

    const topTextStyles = {
        textAlign: "center"
    };

    const bottomTextStyles = {
        textAlign: "center"
    };

    return (
        <div style={containerStyle}>
            <div style={imgStyles}>
                <div style={topTextStyles}>
                    <h3>{props.meme.topText}</h3>
                </div>
                <div style={bottomTextStyles}>
                    <h3>{props.meme.bottomText}</h3>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        props.deleteMeme(props.index);
                    }}>
                    Delete!
                </button>
                <EditsContainer />
            </div>
        </div>
    );
}

export default connect(null, memes)(Meme);
