import React from "react"
import Main from "./components/main-page/Main"
import Nav from "./components/main-page/Nav"
import Footer from "./components/main-page/Footer.jsx"

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