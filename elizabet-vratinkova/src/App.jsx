import React from "react"
import Main from "./components/Main.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

export default function App()
{
    return(
        <div className="app">
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    )
}