import React from "react";

export function ProductDetail({product}){

    //const product= props.product;
    return (<div className="container">
        <h1>Product Detail</h1>
        <h2>Name: {product.name}</h2>
        <h3>Price:{product.price}</h3>
        <h3>Description: {product.description}</h3>
        <h3>Rating: {product.rating}</h3>
    </div>)
}