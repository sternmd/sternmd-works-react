import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class Nba extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a href='https://github.com/sternmd/react-nba-spa'>
                NBA Stats App
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a href='https://github.com/sternmd/react-nba-spa'>
              <img src='images/nba-spa.jpg' alt='NBA SPA' />
            </a>
          </div>
          <MessageBody>
            Fullstack mobile app that uses JSON dummy data to pull stats from
            basketball teams, players, and videos.
            <br />
            <br />
            <span className='built-with'>Built With: React, FireBase</span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/sternmd/react-nba-spa'
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

export default Nba;
