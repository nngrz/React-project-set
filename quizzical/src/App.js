import React, { useState } from "react"

export default function App() {

    return (
        <main>
            <div className="home--container">
                <h1 className="home--title">Quizzical</h1>
                <h2>Answer the questions and test your knowledge!</h2>
                <div className="form">
                    {/* <Dropdown 
                        label="Category:"
                        options={categories}
                        onChange={handleCategoryChange}
                    />                    */}
                </div>
                <button className="btn start-quiz">Start Quiz</button>
            </div>
        </main>
    )
}