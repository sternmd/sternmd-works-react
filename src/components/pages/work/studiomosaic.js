import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectStudioMosaic extends React.Component {
  render() {
    return (
      <div>
      <Message isColor="dark">
        <MessageHeader>
          <p><a href="http://studiomosaic.org/">Studio Mosaic</a></p>
        </MessageHeader>
        <div className="message-image">
          <a href="http://studiomosaic.org/" target="_blank">
            <img src="images/studiomosaic.png" alt="studio mosaic" />
          </a>
        </div>
        <MessageBody>
          Studio Mosaic is a Chicago art collective, digital music label, and independent publisher. An unconventional art site for an unconventional art group.
          <br/>
          <br/>
          <br/>
          <br/>
          <span className="built-with">Built With: HTML/CSS/JavaScript, Scss</span>
          <a className="button btn-github is-pulled-right" href="https://github.com/sternmd/studiomosaic" target="_blank">
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

export default ProjectStudioMosaic;
