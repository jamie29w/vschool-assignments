import React from "react";
import Row2BlogEntryComponent from "./Row2BlogEntryComponent"
import blogEntries from "../data/blogEntries.json"

function genEntries(blogEntries) {
    return blogEntries.map((blog) => {
        return <Row2BlogEntryComponent entry={blog} />
    })
}

function Row2BlogEntryContainer() {
    return (
        <div className="row2BlogEntryContainer">
            {genEntries(blogEntries)}
            <button className="btn row2Button">OLDER POSTS →</button>
        </div>
    )
};

export default Row2BlogEntryContainer;
