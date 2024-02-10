import React, { useState } from "react";

const CheckBox = () => {
  // State to manage the checkbox status
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the checkbox state
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>

      <p>Checkbox is {isChecked ? "checked" : "unchecked"}.</p>

      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Please select --</option>
        <option value="option1">Option 1 </option>
        <option value="option2">Option 2 </option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default CheckBox;
