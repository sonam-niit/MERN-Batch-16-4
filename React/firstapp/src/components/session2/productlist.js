import React, { useState } from "react";
//imported JSON data to my React Component
import productsData from './products.json';
import { ProductDetail } from "./productDetail";
export function ProductList(){
    //created state and stored that json value as initial value to that product valiable
    const[products,setProducts]=useState(productsData);

    const [selected,setSelected]= useState(null);
    const selectProduct=(pro)=>{
        setSelected(pro);
    }

    return(<div className="container">
        <h1>Product List</h1>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Price</th><th>Description</th><th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item,index)=>{
                        return(<tr key={index} onClick={()=>{selectProduct(item)}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.rating}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
       {selected && <ProductDetail product={selected}/>}
    </div>)

}