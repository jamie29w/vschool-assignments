import React from "react";

export default function Gallery(props) {
    const id = props.match.params.id;
    const galleryInfo = props.searchById(id);
    console.log(galleryInfo);
    const galleryStyles = {
        color: "rgb(128, 128, 128)"
    };

    return (
        <div style={galleryStyles}>
            <h2>{galleryInfo.title}</h2>
            <img className="galleryImage" src={galleryInfo.imgUrl} alt="" />
        </div>
    );
}
