import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectMuCharts extends React.Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://github.com/Cams-Headphones-2/Client-app'
                target='_blank'
                rel='noopener noreferrer'
              >
                /Mu/sic Charts
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://github.com/Cams-Headphones-2/Client-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/mucharts.png' alt='mucharts' />
            </a>
          </div>
          <MessageBody>
            /Mu/sic Charts is an app that allows users to build and share music
            album flowcharts.
            <br />
            <br />
            <span className='built-with'>
              Built With: Node/Express, React, MongoDB, HTML/CSS/JS
            </span>
            <a
              className='button btn-github is-pulled-right'
              href='https://github.com/Cams-Headphones-2/Client-app'
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
      </div>
    );
  }
}

export default ProjectMuCharts;
