import React, { useState } from "react";


function FavoriteColor() {
  const [color, setColor] = useState("Red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("Blue")}
        className="btn2"
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("Red")}
        className="btn2"
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("Pink")}
        className="btn2"
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("Green")}
        className="btn2"
      >Green</button>
    </>
  );
}


export default FavoriteColor