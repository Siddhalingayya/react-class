import React, { useState } from "react";

const CheckboxAndSelect = () => {
  // State to manage the checkbox and select states
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    setChecked(!isChecked);

    // Reset the selected option when the checkbox is clicked
    setSelectedOption("");
  };

  // Function to handle select changes
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
        Enable Select
      </label>

      <label>
        Select an option:
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          disabled={!isChecked} // Disable the select when the checkbox is not checked
        >
          <option value="">-- Please select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>

      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default CheckboxAndSelect;
