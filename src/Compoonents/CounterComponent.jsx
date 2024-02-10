import React, { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="messageblock2">
      <p>Counter: {counter}</p>

      <button onClick={incrementCounter} className="btn">
        Increment
      </button>
      <button onClick={decrementCounter} className="btn2">
        Decrement
      </button>
    </div>
  );
};

export default CounterComponent;
