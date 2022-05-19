import React from "react"
import pinIcon from "../images/location.png"

export default function Card(props) {
    let altText = "a scenic view of " + props.title
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--img" alt={altText}/>
            <div className="card-info">
                <div className="card--locationinfo">
                    <img src={pinIcon} className="card--pin" alt="a location marker"/>
                    <span className="card--location">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} className="card--gmaps">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h2 className="card--duration">{props.startDate} - {props.endDate}</h2>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}