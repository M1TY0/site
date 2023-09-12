import React from "react"

export default function Profile(props) {

    return(
        <div className="profile--container">
               <a href="profile.html">
               <img className="profile--pic" src={props.url} alt="profile-pic" />
               </a> 
        </div>
    )
}