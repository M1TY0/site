import React from "react";

export default function ProfileForm(){

    return(
        <div class="pfp--container">
            <label class="pfp--label" for="pfp">Select Profile Picture:</label>
            <input class="pfp--button" type="file" name="pfp"/>
        </div>
    )
}