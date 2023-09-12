import React from "react"
import ProfileButton from "./displays/ProfileButton"
import Register from "./displays/Register"

export default function Nav(){

    const [loggedIn, setLoggedIn] = React.useState(false)

    let logged = loggedIn ? <ProfileButton url="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVmYXVsdCUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /> : <Register/>

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