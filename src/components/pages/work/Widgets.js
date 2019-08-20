import React from 'react';
import {
  Message,
  MessageBody,
  MessageHeader,
  Container,
  Columns,
  Column
} from 'bloomer';

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Columns>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a
                      href='https://github.com/sternmd/react-tweet'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Twitter Real-Time
                    </a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a
                    href='https://github.com/sternmd/react-tweet'
                    target='_blank'
                  >
                    <img src='images/tweet.png' alt='React Tweet' />
                  </a>
                </div>
                <MessageBody>
                  This app displays latest matching tweets (in real-time) based
                  on the user's search input.
                  <br />
                  <br />
                  <span className='built-with'>
                    Built With: React, Express, Socket.io
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
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://github.com/sternmd/react-nba-spa'>
                      NBA Stats Reader
                    </a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a href='https://github.com/sternmd/react-nba-spa'>
                    <img src='images/nba-spa.png' alt='NBA SPA' />
                  </a>
                </div>
                <MessageBody>
                  A practice mobile single-page application (SPA) using React.
                  Uses JSON dummy data to pull stats from basketball teams,
                  players, and videos.
                  <br />
                  <br />
                  <span className='built-with'>Built With: React</span>
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
            </Column>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://codepen.io/sternmd/full/rGKBrJ'>
                      Pomodoro Timer
                    </a>
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
                  <span className='built-with'>
                    Built With: Vue.js, HTML/CSS
                  </span>
                </MessageBody>
              </Message>
            </Column>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://codepen.io/sternmd/full/gxLzmX'>
                      Vue Calculator
                    </a>
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
                  <span className='built-with'>
                    Built With: Vue.js, HTML/CSS
                  </span>
                </MessageBody>
              </Message>
            </Column>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://codepen.io/sternmd/full/vJOmpe'>
                      Twitch API Stream
                    </a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a href='https://codepen.io/sternmd/full/vJOmpe'>
                    <img src='images/twitch.png' alt='twitch' />
                  </a>
                </div>
                <MessageBody>
                  Ajax practice. Track your favorite twitch channels!
                  <br />
                  <br />
                  <span className='built-with'>
                    Built With: jQuery/Ajax, HTML/CSS
                  </span>
                </MessageBody>
              </Message>
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}

export default Widgets;
