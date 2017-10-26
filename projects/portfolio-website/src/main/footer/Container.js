import React from "react";
import FooterComponent from "./Component";

class FooterContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>
                    <FooterComponent />
                </h2>
            </div>
        );
    }
}

export default FooterContainer;
