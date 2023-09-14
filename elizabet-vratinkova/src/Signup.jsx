import React from "react";
import ReactDOM from "react-dom";

import UsernameForm from "./components/signup-page/Username";
import EmailForm from "./components/signup-page/Email";
import PasswordForm from "./components/signup-page/Password";
import ProfileForm from "./components/signup-page/Profile";

export default function SignUp(){

    const [inputData, setInputData] = React.useState(
        {username: "", email: "", password: ""})

    function handleChange(event){
        const {name, value} = event.target
        setInputData(prevData => {
            return {
                ...prevData,
                [name]: value 
            }

        })
    }

    function handleSubmit(event){
        event.preventDefault()
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://localhost:7280/User?email=ivan%40gmail&username=ivan69&password=ivanegotin&pictureURL=picture.picture.com&location=sofia%20bulgaria", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return(
        <div>
            <header className="signup--header">
                <img className="signup--logo" src="/src/images/chicken-logo.png" alt=""/>
                <h1 className="signup--text">Sign Up.</h1>
            </header>

            <form onSubmit={handleSubmit} className="signup--main">
                <div className="username--container">
                    <label className="user--label" htmlFor="username">Enter Username:</label>
                    <input onChange={handleChange}
                           className="user--input"
                           type="text"
                           name="username"
                           value={inputData.username}/>
                    <i className="fa-solid fa-user user--icon"></i>
                </div>

                <div className="email--container">
                    <label className="email--label" htmlFor="email">Enter E-mail:</label>
                    <input onChange={handleChange}
                           className="email--input"
                           type="email"
                           name="email"
                           value={inputData.email}/>
                    <i className="fa-solid fa-envelope email--icon"></i>
                </div>
            
                <div className="password--container">
                    <label className="password--label" htmlFor="password">Enter Password:</label>
                    <input  onChange={handleChange}
                            className="password--input"
                            type="password"
                            name="password"
                            value={inputData.password}/>
                    <i className="fa-solid fa-lock password--icon"></i>
                </div>

                <input value="Create Account" type="submit" className="signup--submit"/>
            </form>
        </div>
    )
}