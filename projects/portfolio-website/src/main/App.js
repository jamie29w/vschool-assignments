import React from "react";
import HeaderContainer from "./header/Container";
import BodyContainer from "./body/Container";
// import SkillsComponent from "./skills/Component";
import FooterContainer from "./footer/Container";
import NavbarComponent from "./navbar/Component";

function App() {
    return (
        <div>
            <NavbarComponent />
            <HeaderContainer />
            <BodyContainer />
            <FooterContainer />
        </div>
    );
}

export default App;
