import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer--container">
            <FontAwesomeIcon icon={faGithub} className="footer--icon"/>
            <p className="footer--text">made by nngrz</p>
        </div>
    )
}
