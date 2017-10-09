import React from "react"
import Superhero from "./Superhero"
import heroes from "../data/heroes.json"

function genHeroes() {
    return heroes.map((heroObj, i) => {
        return <Superhero obj = {heroObj} handleClick = {handleClick} key = {heroObj.name + i} /> 
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
