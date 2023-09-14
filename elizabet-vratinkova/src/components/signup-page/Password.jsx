import React from "react";

export default function PasswordForm(){
    
    return(
        <div className="password--container">
            <label class="password--label" for="password">Enter Password:</label>
            <input class="password--input" type="text" name="password"/>
            <i class="fa-solid fa-lock password--icon"></i>
        </div>
    )
}