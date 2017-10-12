import React from "react";
import HitComponent from "./HitComponent";
import axios from "axios";

class HitList extends React.Component {
    constructor() {
        super();
        this.state = {
            HitList: []
        };
    }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            console.log(response);
            this.setState({
                HitList: response.data
            });
        });
    }

    render() {
        return (
            <div className="hitListClass">
                {this.state.HitList.map((hit, i) => {
                    return (
                        <HitComponent
                            name={hit.name}
                            imgUrl={hit.image}
                            key={hit.name + i}
                        />
                    );
                })}
            </div>
        );
    }
}

export default HitList;
