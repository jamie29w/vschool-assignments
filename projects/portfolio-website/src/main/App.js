import React from "react";
import HeaderContainer from "./header/Container";
import BodyContainer from "./body/Container";
// import SkillsComponent from "./skills/Component";
import FooterContainer from "./footer/Container";
import NavbarContainer from "./navbar/Container";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeRef: {},
            portfolioRef: {}
        };
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <HeaderContainer />
                <BodyContainer />
                <FooterContainer />
            </div>
        );
    }
}

export default App;
