import React from "react";
import NameForm from "./NameForm"
import NameList from "./NameList"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        console.log(`componentWillMount`)
    }

    componentDidMount() {
        console.log(`componentDidMount`)
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount`)
        //unmount process goes here, if needed
    }

    shouldComponentUpdate() {
        console.log(`shouldComponentUpdate`)
    }

    handleChange(event) {
        this.setState({
            nameInput: event.target.value
        });
    }

    handleClick(event) {
        this.setState((prevState) => {
            return {
                nameList: [...prevState.nameList, prevState.nameInput],
                nameInput: ""
            }
        });
    }

    render() {
        return (
            <div>
                <NameForm handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    userInput={this.state.nameInput}
                />
                <NameList nameList={this.state.nameList} />
            </div>
        )
    }
}

export default App
