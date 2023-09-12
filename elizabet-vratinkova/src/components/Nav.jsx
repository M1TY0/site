import React from "react"

export default function Nav(){

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
            
            <div className="profile--container">
               <a href="profile.html">
                <img className="profile--pic" src="src\images\avatar-picture.png" alt="profile-pic" />
                </a> 
            </div>
        </div>
    )

}