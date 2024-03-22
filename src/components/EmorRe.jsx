import React from 'react';
import Message from './Message';
import MessageOtherSide from './MessageOtherSide';

const EmorRE = ({ user, message }) => {
  
  return (
    <div>
      {user ? (
        <MessageOtherSide msg={message}></MessageOtherSide>
      ) : (
        <Message msg={message}></Message>
      )}
    </div>
  );
};

export default EmorRE;
