import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  return (
    <div>
      <div className="sc-message--text">{props.data.text}</div>
      {
        props.data.date && props.data.date.length> 0 &&
        <div className="sc-message--date">{props.data.date}</div>
      }
    </div>
  )

}

export default TextMessage