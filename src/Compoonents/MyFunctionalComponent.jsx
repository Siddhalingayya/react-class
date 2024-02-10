import React, { useState } from 'react';

const MyFunctionalComponent = () => {
  // State to track the number of clicks
  const [clickCount, setClickCount] = useState(0);

  // Function to handle the "Click Me" button click
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  // Function to handle the "Delete" button click
  const handleDeleteButtonClick = () => {
    alert("Delete")
  };

  const [content, setContent] = useState("welcome ");

  const updateContent = () => {
    setContent("New Content Add")
  }


  const [buttonText, setButtonText] = useState("Click Me");

  const updateButtonText = () => {
    setButtonText("Button Clicked!");
  };




  return (
    <div>
      <h1>Hello!</h1>
      <p>Number of clicks: {clickCount}</p>

      {/* "Click Me" button with click event handler */}
      <button onClick={handleButtonClick} className='btn2'>Click Me</button>

      {/* "Delete" button with click event handler */}
      <button onClick={handleDeleteButtonClick} className='btn'>Delete</button>

      <h1>{content}</h1>
      <button onClick={updateContent} className='btn2'>Update Content</button>

      <button onClick={updateButtonText} className='btn'>{buttonText}</button>
    </div>


  );
};

export default MyFunctionalComponent;
