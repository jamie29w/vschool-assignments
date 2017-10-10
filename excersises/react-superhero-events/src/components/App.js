import React from "react"
import Antihero from "./Antihero"
import heroes from "../data/heroes.json"

function genHeroes() {
    return heroes.map((heroObj, i) => {
        return <Antihero obj = {heroObj} handleClick = {handleClick} key = {heroObj.name + i} /> 
    })
}

function handleClick(str) {
    alert(str);
}

function App() {
    return (
        <div>
            {genHeroes(heroes)}
        </div>
    )
}

export default App
