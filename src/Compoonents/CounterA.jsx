import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterA() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button className="btn2" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </>
  );
}

export default CounterA;
