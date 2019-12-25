import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://codepen.io/sternmd/full/gxLzmX'>Vue Calc App</a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://codepen.io/sternmd/full/gxLzmX'>
              <img src='images/calc.png' alt='vue calc' />
            </a>
          </div>
          <MessageBody>
            A simple calculator app. Add, subtract, multiple, and divide!
            <br />
            <br />
            <span className='built-with'>Built With: Vue.js, HTML/CSS</span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
