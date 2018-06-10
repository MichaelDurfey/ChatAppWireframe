import React from 'react';
import ChatMessage from './ChatMessage';

const ChatBox = (props) => {
  if (props.searchResult.length > 0) {
    const searchResults = [];
    for (let i = props.searchResult.length - 1; i >= 0; i--) {
      searchResults.push(<ChatMessage message={props.searchResult[i]}/>);
    }
    return(
      <section className="ChatBox">
        {
          searchResults
        }
      </section>
    );
  } else {
    const messages = [];
    for (let i = props.messages.length - 1; i >= 0; i--) {
      messages.push(<ChatMessage message={props.messages[i]}/>)
    }
    return(
      <section className="ChatBox">
        {
          messages
        }
      </section>
    );
  }
}

export default ChatBox;