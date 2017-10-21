import React from "react";
import CountriesComponent from "./Component";
import { connect } from "react-redux";
import Country from "./Country";

class CountriesContainer extends React.Component {
    constructor() {
        super();

        this.genList = this.genList.bind(this);
    }

    genList() {
        return this.props.countries.map((country, i) => {
            return (
                <Country key={country.name + i} country={country} index={i} />
            );
        });
    }

    render(props) {
        return <CountriesComponent genList={this.genList} />;
    }
}

const mapStateToProps = state => {
    return { countries: state.countries };
};

export default connect(mapStateToProps, {})(CountriesContainer);
