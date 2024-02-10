import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const Todos = () => {
    const[count, setcount] = useState(0);
    const[todos, settodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setcount((c) => c+ 1);
        settodos((c) => c+ 1)
    };
    return(
        <>
        <Todos todos= {todos}/>
        <hr/>
        <div>
            Count : {count}
            <button onClick={increment}>+</button>
        </div>

            </>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

export default Todos