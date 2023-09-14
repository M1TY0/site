import React from "react";

export default function EmailForm(){

    return(
        <div className="email--container">
            <label class="email--label" for="email">Enter E-mail:</label>
            <input class="email--input" type="text" name="email"/>
            <i class="fa-solid fa-envelope email--icon"></i>
        </div>
    )
}