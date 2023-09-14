import React from "react";

export default function UsernameForm(){

    return(
        <div className="username--container">
            <label className="user--label" for="username">Enter Username:</label>
            <input className="user--input" type="text" name="username"/>
            <i className="fa-solid fa-user user--icon"></i>
        </div>
        
    )
}