import React from "react"
export default async function getProduct(){
    // class Product{
    //     constructor(name,price,pictureURL,description,date,location)
    //     {      
    //         this.name = name;
    //         this.price = price;
    //         this.pictureURL = pictureURL;
    //         this.description = description;
    //        // this.date = date;
    //         this.location = location;
     
    //     }}
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return await fetch("https://localhost:7280/rndProduct", requestOptions)
    .then(response => response.text())
    .then(result => {
        return result;
        const product1 = new Product(
            result.name,
            result.price,
            result.pictureURL,
            result.description,
           // result.date,
            result.location,
           
        )
        return product1;
    })
    .catch(error => {
        return ['error', error]
    });
   }

   
//  [
//    getProduct()
   
// ]