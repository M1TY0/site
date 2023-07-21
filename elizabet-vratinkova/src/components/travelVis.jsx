import React from "react"

export default function Travel(props)
{
    return(
        <div className="travel-post">
            <img src={`/images/${props.image}`} className="travel-image"/>
            <div className="travel-main">
                <div className="post-location">
                    <p>
                    <i class="fa-solid fa-location-dot location-icon"></i> <span class="travel-location">{props.location}</span>
                </p>
                <p className="google-maps-link">View on Google Maps</p>
                </div>
                
                <div className="travel-main-info">
                    <h1 className="travel-title" >{props.title}</h1>
                    <p className="travel-date">{props.date}</p>
                    <p className="travel-desc">{props.description}</p>
                </div>
            </div>
        </div>
    )
}