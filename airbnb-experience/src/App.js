import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
        // <Hero />
    const cardElements = data.map(info => {
        return <Card coverImg={info.coverImg} rating={info.statsrating} reviewCount={info.reviewCount} location={info.location} title={info.title} price={info.price}/>
    })
    return (
        <div>
            <Navbar />
            {cardElements}
            {/* <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            /> */}
        </div>
    )
}
