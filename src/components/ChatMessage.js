import React from 'react';

const ChatMessage = (props) => {
    return (
    <div className = "chatMessage">
      <div className="gradientImage"/>
      <div className="chatText">
        {props.message}
      </div>
    </div>
    )
};

export default ChatMessage;
