import React from 'react';
import ChatMessage from './ChatMessage';

const ChatBox = (props) => {
  return(
  <div className="ChatBox">
    {
      props.messages.map(message => <ChatMessage message={message}/>)
    }
  </div>
  );
}

export default ChatBox;