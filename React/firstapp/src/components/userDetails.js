import React, { useState } from "react";

export function UserDetails(){

    const [name,setName]= useState("Prathibha");

    const change=()=>{
        setName("Shruti")
    }

    return(<div>
        <h1>UserDetails Component</h1>
        <h2>Welcome {name}</h2>

        <button className="btn btn-primary" onClick={change}>Change Name</button>
    </div>)
}