import React from "react";

function HitComponent(props) {
    const imgStyles = {
        backgroundImage:
            "url('http://i1194.photobucket.com/albums/aa374/BL_ID19510/sniperoverlay-1.png'), url(" +
            props.imgUrl +
            ")"
    };

    return (
        <div className="hitComponentClass">
            <h2 className="hitComponentText">Name:</h2>
            <h2 className="hitComponentText">{props.name}</h2>
            <div style={imgStyles} className="hitListImagesClass" />
        </div>
    );
}

export default HitComponent;
