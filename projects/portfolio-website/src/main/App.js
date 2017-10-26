import React from "react";
import HeaderContainer from "./header/Container";
import BodyContainer from "./body/Container";
import FooterContainer from "./footer/Container";
import Typekit from "react-typekit";

function App() {
    return (
        <div>
            <HeaderContainer />
            <BodyContainer />
            <FooterContainer />
            <Typekit kitId="rvi3lhz" />
        </div>
    );
}

export default App;
