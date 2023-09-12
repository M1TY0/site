import React from "react"
import ReactDOM from "react-dom";
import productsData from "./data/productsData";
import Product from "./displays/Products";

export default function Main(props) {

    const productListing = productsData.map(product => {
        return (<Product 
        name={product.name} 
        price={product.price}
        date={product.date}
        description={product.description}
        pictureURL={product.pictureURL}
        location={product.location}/>) })

    
    
    return(
        <div className="site--info--container">
            <div className="main--info--container">
                <div className="main--info">
                    <h1>Uncover Treasures</h1>
                <h1>Embrace Deals</h1>
                <p>Get ready to embark on a treasure-hunting 
                    journey where you'll find a vast array of incredible items at unbeatable prices.
                </p>
                <button className="shopping--button">Start Shopping</button>
                </div>
                
                <div className="site--info--picture">
                   <img  src="src\images\furnite-stack.png" alt="" /> 
                </div>
            </div>
            
            <div className="product--list--container">
                <h1 className="product--header">Deals</h1>
                <span className="product--listing">{productListing} <i class="fa-solid fa-arrows-rotate products--refresh--icon"></i></span>
                
            </div>
            
        </div>
    )
    

}