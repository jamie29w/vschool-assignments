import React from "react";
import TimerComponent from "./Component";

class TimerContainer extends React.Component {
    constructor() {
        super();
    }

    render(props) {
        return (
            <div>
                hi from TimerContainer
                <TimerComponent />
            </div>
        );
    }
}

export default TimerContainer;
