import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

export default class Caspian extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://caspian-app.herokuapp.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Caspian App
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://caspian-app.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/caspian.png' alt='caspian app' />
            </a>
          </div>
          <MessageBody>
            My first Ruby/Sinatra project. Caspian is an emergency management
            app, for any trip. Caspian stores and presents important
            In-Case-of-Emergency info and is meant to be used while outdoors or
            camping.
            <br />
            <br />
            <span className='built-with'>
              Built With: Ruby/Sinatra, HTML/CSS
            </span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/alexekim/project_caspian'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon'>
                <i className='fab fa-github' />
              </span>
              <span>GitHub</span>
            </a>
          </MessageBody>
        </Message>
      </div>
    );
  }
}
