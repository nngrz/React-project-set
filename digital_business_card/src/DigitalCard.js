import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function DigitalCard() {
    return (
        <div className="container">
            <div className="main">
                <Info />
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}
