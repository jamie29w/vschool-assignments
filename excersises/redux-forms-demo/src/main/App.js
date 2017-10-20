import React from "react";
import FormContainer from "./form/Container";
import CountriesContainer from "./countries/Container";

function App(props) {
    return (
        <div>
            <FormContainer />
            <CountriesContainer />
        </div>
    );
}

export default App;
