import React from "react"
import ProfileButton from "./displays/ProfileButton"
import Register from "./displays/Register"

export default function Nav(){

    const [loggedIn, setLoggedIn] = React.useState(false)

    let logged = loggedIn ? <ProfileButton url="src\images\avatar-picture.png" /> : <Register/>

    return(
        <div className="nav--container">
            <a href="index.html" className="site--logo">
                <img className="site--logo--image" src="src\images\chicken-logo.png" alt="" />
                <p className="site--logo--text">bitak.</p>
            </a>
            
            <div className="search--bar--container">
                <label for="searchbar"><i class="fa-solid fa-magnifying-glass search--bar--icon"></i></label>
                <input  type="text" id="searchbar" name="searchbar" placeholder="Search Products..." className="search--bar"/>
            </div>
            
            {logged}
        </div>
    )

}