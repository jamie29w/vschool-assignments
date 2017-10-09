import React from "react";

function Row2BlogEntryComponent(props) {
    return (
        <div className="Row2BlogEntryComponent">
            <div className="entryNameDiv">{props.entryName}</div>
            <div className="entrySubtitleDiv">{props.entrySubtitle}</div>
            <div className="entryByDiv">{props.entryBy}</div>
        </div>
    )
}

export default Row2BlogEntryComponent
