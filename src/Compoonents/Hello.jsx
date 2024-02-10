import React from "react";

const Hello =  (props)  => {
    return(
        <div>
            <h1>hello {props.name}</h1>

            <form className="block">
        
        Name: <input className="block" type="text"></input>
        age: <input className="block" type="integer"></input>
        date: <input className="block" type="date"></input>
    
    
    
            </form>
        </div>
    )
}

export default Hello