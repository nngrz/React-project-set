import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer.js"
import data from "./data.js"

export default function App() {
    const destinations = data.map(item => {
        return (
            <About 
                key={item.id}
                item={item}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <section className="destination-list">
                {destinations}
            </section>
            <Footer />
        </div>
    )
}
