import React from "react"
import travelData from "./travelData"
import Travel from "./travelVis"

export default function Main()
{
    const travelling = travelData.map(place =>
        {
            return <Travel
             image={place.image}
             location={place.location}
             title={place.title}
             date={place.date}
             description={place.description}
            />
        })
    return(
        <div className="website-main">
            {travelling}
        </div>
    )
}