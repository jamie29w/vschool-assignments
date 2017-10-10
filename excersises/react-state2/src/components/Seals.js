import React from "react";

function Seals(props) {
    return (
        <div>
            <h1>You have {props.happySeals} happy {props.happySeals === 1 ? "seal" : "seals"}!</h1>
            <button onClick={props.clubSeals}>Club {props.num} {props.num === 1 ? "seal" : "seals"}</button>
            <button onClick={props.petSeals}>Pet {props.num} {props.num === 1 ? "seal" : "seals"}</button>
        </div>
    )
}

export default Seals;
