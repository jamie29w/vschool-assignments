import React from "react";
import BodyComponent from "./Component";

class BodyContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>
                    <BodyComponent />
                </h2>
            </div>
        );
    }
}

export default BodyContainer;
