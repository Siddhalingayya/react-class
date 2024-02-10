import React, { useState } from 'react';

const DynamicContentComponent = () => {
 
  const [buttonText, setButtonText] = useState("SUBSCRIBE");

  
  const [content, setContent] = useState("Welcome to the Visistor");

 
  const updateButtonText = () => {
    setButtonText("SUBSCRIBED!");
  };

 
  const addContent = () => {
    setContent("Thank you for Subscribing");
    
  };

  const [addContents , setaddContent] = useState("Subscribe");

  const addTopics = () => {
    setaddContent("Subscribed")
  }

 

  return (
    <div>
      <h1>{content}</h1>

     
      {/* <button onClick={updateButtonText} className='btn2'>{buttonText} {content}</button> */}

      
      <button onClick={addContent}  className='btn2'>{content}   </button>
      <button onClick={addTopics} className='btn'> {addContents} </button>
      <button onClick={updateButtonText} className='btn2'> {buttonText}</button>
    </div>
  );
};

export default DynamicContentComponent;
