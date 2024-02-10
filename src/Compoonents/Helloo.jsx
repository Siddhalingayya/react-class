import React from "react";
import ReactDOM from 'react-dom/client';

// const Helloo = ()  => {

//     return React.createElement('div', null, 'Hello siddu')
// }




function Helloo  ()  {
    const click = () => {
        alert("Hii Siddu");
    }

    return (
        <button onClick={click} className="btn">click here!</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

export default Helloo