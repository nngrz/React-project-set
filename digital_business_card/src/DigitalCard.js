import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function DigitalCard() {
    return (
        <div className="container">
            <div className="header">
                <Info />
            </div>
            <div className="main">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}
