import React from "react"
import ReactDOM from "react-dom";
import getProduct from "./data/productsData";
import Product from "./displays/Products";

export default function Main(props) {
  

    
    const getProductData=async function () {
        const res = await getProduct()
        console.log(res);
        return res.name;
        
        
    }
      
  
   function returnProduct(){
    const product3 = getProductData()
   return <Product name={product3} 
                   description="{product3.description} "
                   location="{product3.location}"
                   price="{product3.price}"/>
   }
    return(
        <div className="site--info--container">
            <div className="main--info--container">
                <div className="main--info">
                    <h1>Uncover Treasures</h1>
                <h1>Embrace Deals</h1>
                <p>Get ready to embark on a treasure-hunting 
                    journey where you'll find a vast array of incredible items at unbeatable prices.
                </p>
                <button onClick={getProductData} className="shopping--button">Start Shopping</button>
                </div>
                
                <div className="site--info--picture">
                   <img  src="src\images\furnite-stack.png" alt="" /> 
                </div>
            </div>
            
            <div className="product--list--container">
                <h1 className="product--header">Deals</h1>
                
                { <span className="product--listing"> {returnProduct()}<i class="fa-solid fa-arrows-rotate products--refresh--icon"></i></span> }
                
            </div>
            
        </div>
    )
    

}