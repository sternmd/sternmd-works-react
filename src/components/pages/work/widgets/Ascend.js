import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Ascend extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://vimeo.com/259898939/85b1fa5eed'>
                Ascend Shoe App
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://vimeo.com/259898939/85b1fa5eed'>
              <img src='images/ascend2018-min.png' alt='ascend 2018' />
            </a>
          </div>
          <MessageBody>
            Winner of Partnership Spotlight submission. Episerver Ascend is an
            annual user conference that hosts around 800 digital marketers and
            commerce leaders. This app featured a live retail demo in which
            users could interact with shoes and learn about product features in
            real-time via an in-store display and mobile app.
            <br />
            <br />
            <span className='built-with'>
              Built With: Node, socket.IO, HTML/CSS/JS
            </span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
