import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="header--container">
            <FontAwesomeIcon icon={faEarthAsia} className="header--icon"/>
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
}
