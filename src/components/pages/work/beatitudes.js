import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectBeatitudes extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://beatitudes.herokuapp.com/" target="_blank">Beatitudes</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://beatitudes.herokuapp.com/" target="_blank">
            <img src="images/beatitudes.png" alt="beatitudes" />
          </a>
        </div>
        <MessageBody>
          Beatitudes is a web app that displays famous quotes and novels by popular Beat Generation writers. You dig?
          <br/>
          <br/>
          <span className="built-with">Built With: Node/Express, HTML/CSS/JavaScript, Less</span>
          <a className="button btn-github is-pulled-right" href="https://github.com/sternmd/beatitudes" target="_blank">
            <span className="icon">
              <i className="fab fa-github"></i>
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
