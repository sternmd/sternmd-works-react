import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class Tweet extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://github.com/sternmd/react-tweet'
                target='_blank'
                rel='noopener noreferrer'
              >
                Tweet LiveStream
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://github.com/sternmd/react-tweet'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/tweet.png' alt='React Tweet' />
            </a>
          </div>
          <MessageBody>
            This app displays latest matching tweets (in real-time) based on the
            user's search input.
            <br />
            <br />
            <span className='built-with'>
              Built With: React/Express, Socket.io
            </span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/sternmd/react-tweet'
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

export default Tweet;
