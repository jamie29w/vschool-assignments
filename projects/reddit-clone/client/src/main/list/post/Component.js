import React from "react";

function PostComponent(props) {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <span>Votes: {props.post.votes | 0} </span>{" "}
            <button
                onClick={() => {
                    props.handleUpVote(props.id);
                }}>
                UpVote
            </button>
            <button>DownVote</button>
            <p>{props.post.text}</p>
            <button
                onClick={() => {
                    props.handleDelete(props.id);
                }}>
                Delete
            </button>
        </div>
    );
}

export default PostComponent;
