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
            </Column>
            <Column>
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
                  Fullstack mobile app that uses JSON dummy data to pull stats
                  from basketball teams, players, and videos.
                  <br />
                  <br />
                  <span className='built-with'>
                    Built With: React, FireBase
                  </span>
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
                      Vue Pomodoro App
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
          </Columns>
          <Columns>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://codepen.io/sternmd/full/gxLzmX'>
                      Vue Calc App
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
                    <a href='https://pig-dice.surge.sh/'>JS Dice Game</a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a href='https://pig-dice.surge.sh/'>
                    <img src='images/js-dice.png' alt='js-dice' />
                  </a>
                </div>
                <MessageBody>
                  The first player to reach 100 points on GLOBAL score wins the
                  game
                  <br />
                  <br />
                  <span className='built-with'>
                    Built With: HTML/CSS, Javascript
                  </span>
                </MessageBody>
              </Message>
            </Column>
            <Column>
              <Message isColor='dark'>
                <MessageHeader>
                  <p>
                    <a href='https://codepen.io/sternmd/full/rGQWBR'>
                      SVG Flag Art
                    </a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a href='https://codepen.io/sternmd/full/rGQWBR'>
                    <img src='images/svg-flags.png' alt='svg flags' />
                  </a>
                </div>
                <MessageBody>
                  Selected country flags in SVG rendering.
                  <br />
                  <br />
                  <span className='built-with'>Built With: HTML/SVG</span>
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
