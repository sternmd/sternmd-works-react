import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectRachRachArt extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://rachrach.art/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Rachel Rach Art
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://rachrach.art/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/rachel-rach-art-min.png' alt='Rachel Rach Art' />
            </a>
          </div>
          <MessageBody>
            A fresh contributor to the Chicago art scene, Rachel Rach is no
            stranger to the art community while her creative spark has been
            constant since she began producing during childhood.
            <br />
            <br />
            <span className='built-with'>Built With: HTML/CSS/Javascript</span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}

export default ProjectRachRachArt;
