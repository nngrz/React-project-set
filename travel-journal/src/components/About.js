import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function About(props) {
    return ( 
        <div className="about--container">
            <img src={`../images/${props.item.image}`} className="about--img"></img>
            <div className="info--container">
                <div className="location--container">
                    <div className="location--container--small">
                        <FontAwesomeIcon icon={faLocationDot} className="location--icon" />
                        <h4 className="location--country">{props.item.country}</h4>
                    </div>
                    <a href={props.item.googleMapsUrl} className="location--map">View on Google Maps</a>
                </div>
                <h2 className="info--name">{props.item.name}</h2>
                <h3 className="info--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="info--description">{props.item.description}</p>
            </div>
        </div>
    )
}
