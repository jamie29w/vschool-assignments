import React from "react";
import Row2BlogEntryComponent from "./Row2BlogEntryComponent"
import blogEntries from "../data/blogEntries.json"

function Row2BlogEntryContainer() {
    let mappedEntries = blogEntries.map((entry, i) => {
        return <Row2BlogEntryComponent
            entryName = {entry.entryName}
            entrySubtitle = {entry.entrySubtitle}
            entryBy = {entry.entryBy}
            key = {entry.entryName + i}
        />
    })

    return (
        <div className="Row2BlogEntryContainer">
            {mappedEntries}
            <button className="btn row2Button">OLDER POSTS</button>
        </div>
    )
};

export default Row2BlogEntryContainer;
