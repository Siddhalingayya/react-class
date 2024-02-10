import React from 'react'
import ReactDOM from 'react-dom/client';

 function SubscribeBtn() {
  return (
    <h1>Welcome</h1>
  )
}

function SubscribeBtn2() {
    return (
      <h1>Thank You</h1>
    )
  }

 

  function Subscribe(props) {
    const isSubscribe = props.isSubscribe;
    if (isSubscribe) {
      return <SubscribeBtn2/>;
      
    }
    return <SubscribeBtn />;
  }

  
export default SubscribeBtn
