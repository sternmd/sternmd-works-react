import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class Kanban extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://github.com/sternmd/redux-kanban'
                target='_blank'
                rel='noopener noreferrer'
              >
                React Kanban
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://github.com/sternmd/redux-kanban'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/kanban.png' alt='React Kanban' />
            </a>
          </div>
          <MessageBody>
            A kanban board is an agile project management tool designed to help
            visualize work, limit work-in-progress, and maximize efficiency.
            <br />
            <br />
            <span className='built-with'>Built With: React/Redux</span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/sternmd/redux-kanban'
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

export default Kanban;
