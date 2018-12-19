import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectBeatitudes extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://beatitudes.herokuapp.com/">Beatitudes</a></p>
        </MessageHeader>
        <div class="message-image">
          <a href="https://beatitudes.herokuapp.com/">
            <img src="images/beatitudes.png" alt="beatitudes" />
          </a>
        </div>
        <MessageBody>
          Beatitudes is a web app that displays famous quotes and novels by popular Beat Generation writers. You dig?
          <br/>
          <br/>
          <span class="built-with">Built With: Node/Express, HTML/CSS/JavaScript, Less</span>
          <a class="button btn-github is-pulled-right" href="https://github.com/sternmd/beatitudes">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
        </MessageBody>
      </Message>
      </div>
    )
  }
}

export default ProjectBeatitudes;
