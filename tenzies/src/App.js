import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: true,
                id:nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value}/>
    ))

    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
            <button className="roll--dice" onClick={rollDice}> Roll </button>
        </main>
    )
}
