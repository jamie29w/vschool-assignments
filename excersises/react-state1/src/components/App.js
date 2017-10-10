import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            balloonsPopped: 0
        }
        this.popABalloon = this.popABalloon.bind(this);
        this.unpopBalloon = this.unpopBalloon.bind(this);
    }

    popABalloon() {
        this.setState((prevState) => {
            return {
                balloonsPopped: prevState.balloonsPopped + 1
            }
        })
    }

    unpopBalloon() {
        this.setState((prevState) => {
            return {
                balloonsPopped: prevState.balloonsPopped - 1
        }
        })
    }

    render() {
        return(
            <div>
                <h1>Balloons Popped: {this.state.balloonsPopped}</h1>
                <button onClick = {this.popABalloon}>Pop Balloons!</button>
                <button onClick = {this.unpopBalloon}>Unpop a Balloon!</button>
            </div>
        )
    }
}

export default App
