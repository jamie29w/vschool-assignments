import React from "react"
import Seals from "./Seals"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            happySeals: 10
        }
        this.clubSeals = this.clubSeals.bind(this);
        this.petSeals = this.petSeals.bind(this);
    }

    clubSeals(num) {
        this.setState(prevState => {
            return  {
                happySeals: prevState.happySeals - num
            }
        })
    }

    petSeals(num) {
        this.setState(prevState => {
            return {
                happySeals: prevState.happySeals + num
            }
        })
    }



    render() {
        return (
            <div>
                <Seals
                    happySeals={this.state.happySeals}
                    num={1}
                    clubSeals={()=>this.clubSeals(1)}
                    petSeals={()=>this.petSeals(1)}/>
                <Seals
                    happySeals={this.state.happySeals}
                    num={5}
                    clubSeals={()=>this.clubSeals(5)}
                    petSeals={()=>this.petSeals(5)}/>
            </div>
        )
    }
}

export default App
