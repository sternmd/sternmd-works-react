import React from 'react';
import { Message, MessageBody, MessageHeader, Container, Columns, Column } from 'bloomer';

class Widgets extends React.Component {
  render() {
    return (
      <div>
      <Container>
      <Columns>
      <Column>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://codepen.io/sternmd/full/rGKBrJ">Pomodoro Timer</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://codepen.io/sternmd/full/rGKBrJ">
            <img src="images/pomodoro.png" alt="pomodoro" />
          </a>
        </div>
        <MessageBody>
          A flexible and easy-to-use tomato timer that follows the <em>Pomodoro Technique</em>.
          <br/>
          <br/>
          <span className="built-with">Built With: Vue.js, HTML/CSS</span>
        </MessageBody>
      </Message>
      </Column>
      <Column>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://codepen.io/sternmd/full/gxLzmX">Vue Calculator</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://codepen.io/sternmd/full/gxLzmX">
            <img src="images/calc.png" alt="vue calc" />
          </a>
        </div>
        <MessageBody>
          A simple calculator app. Add, subtract, multiple, and divide!
          <br/>
          <br/>
          <span className="built-with">Built With: Vue.js, HTML/CSS</span>
        </MessageBody>
      </Message>
      </Column>
      <Column>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://codepen.io/sternmd/full/vJOmpe">Twitch API Stream</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://codepen.io/sternmd/full/vJOmpe">
            <img src="images/twitch.png" alt="twitch" />
          </a>
        </div>
        <MessageBody>
          Ajax practice. Track your favorite twitch channels!
          <br/>
          <br/>
          <span className="built-with">Built With: jQuery/Ajax, HTML/CSS</span>
        </MessageBody>
      </Message>
      </Column>
      </Columns>
      </Container>



      </div>
    )
  }
}

export default Widgets;
