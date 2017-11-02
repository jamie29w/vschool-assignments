import React from "react";
import Post from "./Post";

function ListComponent(props) {
    return <div>{props.genList()}</div>;
}

export default ListComponent;
