import React from 'react';
import ChatMessage from './ChatMessage';

const ChatBox = (props) => {
  return(
  <section className="ChatBox">
    {
      props.messages.map(message => <ChatMessage message={message}/>)
    }
  </section>
  );
}

export default ChatBox;