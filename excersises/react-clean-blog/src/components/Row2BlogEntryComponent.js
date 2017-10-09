import React from "react";

function Row2BlogEntryComponent(props) {
    return (
        <div className="row2BlogEntryComponent">
            <div className="entryNameDiv">{props.entry.entryName}</div>
            <div className="entrySubtitleDiv">{props.entry.entrySubtitle}</div>
            <div className="entryByDiv"> Posted by <a src="#" className="row2AuthorName">{props.entry.author}</a> on {props.entry.date}</div>
        </div>
    )
}

export default Row2BlogEntryComponent
