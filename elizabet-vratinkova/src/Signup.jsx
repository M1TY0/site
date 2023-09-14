import React from "react";
import ReactDOM from "react-dom";

import UsernameForm from "./components/signup-page/Username";
import EmailForm from "./components/signup-page/Email";
import PasswordForm from "./components/signup-page/Password";
import ProfileForm from "./components/signup-page/Profile";

export default function SignUp(){

    const [inputData, setInputData] = React.useState(
        {username: "", email: "", password: ""})

    console.log(inputData)

    function handleChange(event){
        setInputData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value 
            }

        })
    }
    return(
        <div>
            <header class="signup--header">
                <img class="signup--logo" src="/src/images/chicken-logo.png" alt=""/>
                <h1 class="signup--text">Sign Up.</h1>
            </header>

            <div class="signup--main">
                <div className="username--container">
                    <label className="user--label" for="username">Enter Username:</label>
                    <input onChange={handleChange} className="user--input" type="text" name="username"/>
                    <i className="fa-solid fa-user user--icon"></i>
                </div>

                <div className="email--container">
                    <label class="email--label" for="email">Enter E-mail:</label>
                    <input onChange={handleChange} class="email--input" type="text" name="email"/>
                    <i class="fa-solid fa-envelope email--icon"></i>
                </div>
            
                <div className="password--container">
                    <label class="password--label" for="password">Enter Password:</label>
                    <input onChange={handleChange} class="password--input" type="text" name="password"/>
                    <i class="fa-solid fa-lock password--icon"></i>
                </div>
            
                <div class="pfp--container">
                    <label class="pfp--label" for="pfp">Select Profile Picture:</label>
                    <input class="pfp--button" type="file" name="pfp"/>
                </div>

                <button class="signup--submit">Create Account</button>
            </div>
        </div>
    )
}