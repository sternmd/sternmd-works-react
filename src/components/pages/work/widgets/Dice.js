import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Dice extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://pig-dice.surge.sh/'>JS Dice Game</a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://pig-dice.surge.sh/'>
              <img src='images/js-dice.png' alt='js-dice' />
            </a>
          </div>
          <MessageBody>
            The first player to score 100 points wins the game.
            <br />
            <br />
            <span className='built-with'>Built With: HTML/CSS, Javascript</span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
