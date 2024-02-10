import React from "react";

function Dropdown2() {
  const name = "john";

  return (
    <div class="dropdown">
      <h2>hi , {name}</h2>
      <button class="dropbtn">
        Dropdown
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default Dropdown2;
