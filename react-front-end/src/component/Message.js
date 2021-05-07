import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Message">
        You have reached the message route
      </div>
    );
  }
}

export default Message;