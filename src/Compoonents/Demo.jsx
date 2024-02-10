import React from "react";
import ReactDOM from "react-dom/client";

function Demo() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <button onClick={shoot} className="btn">
      Take the shot!
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

export default Demo;
