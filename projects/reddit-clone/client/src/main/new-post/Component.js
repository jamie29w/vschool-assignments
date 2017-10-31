import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

function NewPostComponent(props) {
    return (
        <div>
            <Button onClick={props.handleToggle}>Start Something New</Button>
            <FormGroup className={props.toggleDisplay ? "show" : "hide"}>
                <FormControl
                    name="postTitle"
                    type="text"
                    placeholder="Title here..."
                    style={{ width: "60%" }}
                />
                <textarea
                    name="postBody"
                    className="form-control"
                    placeholder="Your thoughts here..."
                    id=""
                    rows="5"
                    style={{ display: "block", width: "60%" }}
                />
                <Button>AddPost</Button>
            </FormGroup>
        </div>
    );
}

export default NewPostComponent;

{
    /*<input placeholder="NewPostComponent Input" type="text" />
<button>Post!</button>*/
}
