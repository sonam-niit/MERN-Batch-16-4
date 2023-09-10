import React from "react";

export function Greetings(props){

    const name= props.name;
    return(<div className="container">
        <h1>Greeting Component</h1>
        <h2>Good Morning {name}</h2>
        <h3>Message: {props.message}</h3>
    </div>)

}