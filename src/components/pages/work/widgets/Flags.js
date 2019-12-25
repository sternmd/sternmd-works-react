import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Flags extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://codepen.io/sternmd/full/rGQWBR'>SVG Flag Art</a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://codepen.io/sternmd/full/rGQWBR'>
              <img src='images/svg-flags.png' alt='svg flags' />
            </a>
          </div>
          <MessageBody>
            Selected country flags in SVG rendering.
            <br />
            <br />
            <span className='built-with'>Built With: HTML/SVG</span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
