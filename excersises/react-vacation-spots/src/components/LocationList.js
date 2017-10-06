import React from "react";
import LocationComponent from "./LocationComponent"
import Header from "./Header"
import locations from "../data/locations.json"

function LocationList() {
    let mappedLocationList = locations.map((location) => {
        let bgColor;
        if (location.continent === "Americas") {
            bgColor = "#00708C"
        } else if (location.continent === "Europe") {
            bgColor = "#DAEBF2"
        } else {
            bgColor = "#bc002d"
        };

        let price;
        if (location.price <= 1000) {
            price = "$"
        } else if (location.price > 1000 && location.price <= 1500) {
            price = "$$"
        } else {
            price = "$$$"
        };

        return <LocationComponent
            name = {location.name}
            region = {location.region}
            price = {price}
            bgColor = {bgColor}
        />
    })
    return (
         <div >
             {mappedLocationList}
         </div>
    )
}

export default LocationList
