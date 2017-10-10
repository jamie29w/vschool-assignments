import React from "react"
import Beer from "./components/Beer"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            favoriteBrewery: ""
        }
        this.beerPartyClick = this.beerPartyClick.bind(this);
        this.beerPartyChange = this.beerPartyChange.bind(this);
    }

    beerPartyClick() {
        alert(`Your favorite brewery is ${this.state.favoriteBrewery}`)
    }

    beerPartyChange(event) {
        this.setState({
            favoriteBrewery: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Beer   brewery={this.state.favoriteBrewery}
                        handleClick={this.beerPartyClick}
                        handleChange={this.beerPartyChange}
                />
            </div>
        )
    }
}

export default App
