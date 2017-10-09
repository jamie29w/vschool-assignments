import React from "react"
import LocationList from "./LocationList"
import Header from "./Header"


function App() {
    return (
        <div className="containerDiv">
            <div>
                <Header />
            </div>
            <div className="mappedLocationListDiv">
                <LocationList />
            </div>
        </div>
    )
};

export default App;
