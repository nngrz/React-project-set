import React from "react"
import ReactDOM from "react-dom/client"
import DigitalCard from "./src/DigitalCard"

// React 17 - please don't use as it requires import ReactDOM from "react-dom" (not "react-dom/client")
//ReactDOM.render(<DigitalCard />, document.getElementById("root"))

// React 18
ReactDOM.createRoot(document.getElementById("root")).render(<DigitalCard />)
