import React from "react"

export default function Main({darkMode}) {
    const facts = ["Was first released in 2013", "Was originally created by Jordan Walke", "Has well over 100K stars on GitHub", "Is maintained by Facebook", "Powers thousands of enterprise apps, including mobile apps"]
    const factsList = facts.map((facts, index) => <li key={index}>{facts}</li>)
    return (
        <main className={darkMode ? "dark" : ""}> 
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                {factsList}
            </ul>
        </main>
    )
}
