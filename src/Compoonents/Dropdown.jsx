import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="btn">
        Toggle Dropdown 1
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/Components">Components</Link>
            </li>
            <li>
              <Link to="/MyFunctionalComponent">MyFunctionalComponent</Link>
            </li>
            <li>
              <Link to="/NameList">NameList</Link>
            </li>
            <li>
              <Link to="/stylesheet">StyleSheet</Link>
            </li>
            <li>
              <Link to="/myform">MyForm</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
