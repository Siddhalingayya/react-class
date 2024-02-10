import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")} className="btn">
        {" "}
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
