import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function About({item}) {
    return ( 
        <div className="about--container">
            <img src={`../images/${item.image}`} className="about--img" />
            <div className="info--container">
                <div className="location--container">
                    <div className="location--container--small">
                        <FontAwesomeIcon icon={faLocationDot} className="location--icon" />
                        <h4 className="location--country">{item.country}</h4>
                    </div>
                    <a href={item.googleMapsUrl} className="location--map">View on Google Maps</a>
                </div>
                <h2 className="info--name">{item.name}</h2>
                <h3 className="info--date">{item.startDate} - {item.endDate}</h3>
                <p className="info--description">{item.description}</p>
            </div>
        </div>
    )
}
