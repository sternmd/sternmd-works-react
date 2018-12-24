import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectCaspian extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://caspian-app.herokuapp.com">Caspian App</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://caspian-app.herokuapp.com">
            <img src="images/caspian.png" alt="caspian app" />
          </a>
        </div>
        <MessageBody>
          My first Ruby/Sinatra project. Caspian is an emergency management app, for any trip. Caspian stores and presents important In-Case-of-Emergency info and is meant to be used while outdoors or camping.
          <br/>
          <br/>
          <span className="built-with">Built With: Ruby/Sinatra, HTML/CSS/JavaScript</span>
          <a className="button btn-github is-pulled-right" href="https://github.com/alexekim/project_caspian">
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

export default ProjectCaspian;
