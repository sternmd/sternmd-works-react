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
                    <a href='https://vimeo.com/259898939/85b1fa5eed'>
                      Ascend Shoe App
                    </a>
                  </p>
                </MessageHeader>
                <div className='message-image'>
                  <a href='https://vimeo.com/259898939/85b1fa5eed'>
                    <img src='images/ascend2018-min.png' alt='ascend 2018' />
                  </a>
                </div>
                <MessageBody>
                  Winner of Partnership Spotlight submission. Episerver Ascend
                  is an annual user conference that hosts around 800 digital
                  marketers and commerce leaders. This app featured a live
                  retail demo in which users could interact with shoes and learn
                  about product features in real-time via an in-store display
                  and mobile app.
                  <br />
                  <br />
                  <span className='built-with'>
                    Built With: Node, socketIO, HTML/CSS/JS
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
                  The first player to score 100 points wins the game.
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
                    <a href='https://codepen.io/sternmd/full/rGKBrJ'>
                      Vue Timer
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
