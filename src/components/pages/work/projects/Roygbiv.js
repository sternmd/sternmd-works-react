import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Roygbiv extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='/roygbiv'>ROYGBIV</a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='/roygbiv'>
              <img src='images/roygbiv.png' alt='roygbiv game' />
            </a>
          </div>
          <MessageBody>
            ROYGBIV is a color-matching puzzle game. The goal of the game is for
            a single player to determine the brightest colored row.
            <br />
            <br />
            <span className='built-with'>Built With: HTML/CSS/JavaScript</span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/sternmd/sternmd.github.io/tree/master/roygbiv'
            >
              <span className='icon'>
                <i className='fab fa-github'></i>
              </span>
              <span>GitHub</span>
            </a>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
