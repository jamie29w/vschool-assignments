import React from "react";

function MemeGen(props) {
    const imgStyles = {
        backgroundImage: `url(${props.meme.imgUrl})`,
        backgroundSize: "cover",
        width: "250px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };

    const topTextStyles = {
        textAlign: "center"
    };

    const bottomTextStyles = {
        textAlign: "center"
    };

    return (
        <div style={imgStyles}>
            <div style={topTextStyles}>
                <h3>{props.meme.topText}</h3>
            </div>
            <div style={bottomTextStyles}>
                <h3>{props.meme.bottomText}</h3>
            </div>
        </div>
    );
}

export default MemeGen;
