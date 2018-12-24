import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectNimbusPrints extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="http://nimbusprints.com">Nimbus Prints</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="http://nimbusprints.com">
            <img src="images/nimbus.jpg" alt="nimbus prints" />
          </a>
        </div>
        <MessageBody>
          Founded in 2014, Nimbus Prints began as a fan art project inspired by music, film, anime, and pop culture. Today, we have evolved into an experimental printshop, striving to create original, limited edition print series with artists in Chicago.
          <br/>
          <br/>
          <span className="built-with">Built With: BigCartel, HTML/CSS</span>
        </MessageBody>
      </Message>
      </div>
    )
  }
}

export default ProjectNimbusPrints;
