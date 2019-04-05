import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class NbaSPA extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://github.com/sternmd/react-nba-spa">NBA SPA</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://github.com/sternmd/react-nba-spa">
            <img src="images/nba-spa.png" alt="NBA SPA" />
          </a>
        </div>
        <MessageBody>
          A practice mobile single page application (SPA) using React. Uses JSON dummy data to pull stats from basketball teams, players, and videos.
          <br/>
          <br/>
          <span className="built-with">Built With: React</span>
          <a className="button btn-github is-pulled-right" href="https://github.com/sternmd/react-nba-spa">
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

export default NbaSPA;
