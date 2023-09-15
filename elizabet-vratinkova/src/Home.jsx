import React from "react"
import Main from "./components/main-page/Main"
import NavLoged from "./components/main-page/NavLoged"
import Footer from "./components/main-page/Footer.jsx"

export default function App()
{
    return(
        <div className="app">
            <NavLoged/>
            <Main/>
            <Footer/>
        </div>
    )
}