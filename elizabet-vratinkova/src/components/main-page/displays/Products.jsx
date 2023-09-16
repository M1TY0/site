import React from "react"

export default function Product(props){

    return(
        <div className="product--container">
            <img className="product--image" src=/*{props.pictureURL}*/"./src/images/beautiful-guy.png" alt="" />
            <div className="product--info">
                <h1 className="product--name">{props.name}</h1>
                <h2 className="product--price">${props.price}</h2>

                {/* <time className="product--date">Created: {props.date}</time> */}
                <p><i class="fa-solid fa-location-dot"></i> {props.location}, Bulgaria</p>
            </div>
            
        </div>
    )
}