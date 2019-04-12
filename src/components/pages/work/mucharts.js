import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectMuCharts extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="https://github.com/Cams-Headphones-2/Client-app" target="_blank">/Mu/sic Charts</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="https://github.com/Cams-Headphones-2/Client-app" target="_blank">
            <img src="images/mucharts.png" alt="mucharts" />
          </a>
        </div>
        <MessageBody>
          /Mu/sic Charts is an app that allows users to build and share music album flowcharts.
          <br/>
          <br/>
          <span className="built-with">Built With: Node/Express, React, MongoDB, HTML/CSS/JS</span>
          <a className="button btn-github is-pulled-right" href="https://github.com/Cams-Headphones-2/Client-app" target="_blank">
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

export default ProjectMuCharts;
