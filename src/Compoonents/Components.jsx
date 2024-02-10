import React from "react";

function Components(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.comp}</h1>
      <h1>Welcome </h1>
      <h1>TO</h1>
      <h1>React</h1>
      <h1>Components</h1>
    </div>
  );
}

export default Components;
