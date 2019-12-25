import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Pomodoro extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://codepen.io/sternmd/full/rGKBrJ'>Vue Timer</a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://codepen.io/sternmd/full/rGKBrJ'>
              <img src='images/pomodoro.png' alt='pomodoro' />
            </a>
          </div>
          <MessageBody>
            A flexible and easy-to-use tomato timer that follows the{' '}
            <em>Pomodoro Technique</em>.
            <br />
            <br />
            <span className='built-with'>Built With: Vue.js, HTML/CSS</span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
