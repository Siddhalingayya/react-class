import React, { useEffect } from 'react';

const SubscribeButton = ({ channelName }) => {
  useEffect(() => {
    // Render the YouTube subscribe button when the component mounts
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="subscribe-button-container">
      {/* Place the YouTube subscribe button */}
      <div
        className="g-ytsubscribe"
        data-channelid={channelName}
        data-layout="default"
        data-theme="dark"
        data-count="default"
      ></div>
    </div>
  );
};

export default SubscribeButton;
