import React from "react";
import ReactDOM from "react-dom";
import UsernameForm from ".src/components/signup-page/Username.jsx";

export default function SignUp(){

    return(
        <div>
            <header class="signup--header">
                <img class="signup--logo" src="/src/images/chicken-logo.png" alt=""/>
                <h1 class="signup--text">Sign Up.</h1>
            </header>

            <div class="signup--main">
                <UsernameForm/>

                <label class="email--label" for="email">Enter E-mail:</label>
                <input class="email--input" type="text" name="email"/>
                <i class="fa-solid fa-envelope email--icon"></i>

                <label class="password--label" for="password">Enter Password:</label>
                <input class="password--input" type="text" name="password"/>
                <i class="fa-solid fa-lock password--icon"></i>
        
                <div class="pfp--container">
                <label class="pfp--label" for="pfp">Select Profile Picture:</label>
                <input class="pfp--button" type="file" name="pfp"/>
            </div>

            <button class="signup--submit">Create Account</button>
            </div>
        </div>
    )
}