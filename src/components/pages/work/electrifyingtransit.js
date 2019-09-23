import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectElectrifyingTransit extends React.Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='http://electrifyingtransit.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Electrifying Transit
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='http://electrifyingtransit.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='images/electrifyingtransit-min.png'
                alt='Electrifying Transit'
              />
            </a>
          </div>
          <MessageBody>
            Supporting the electrification of school buses and public transit,
            with a focus on the Northwest and social equity.
            <br />
            <br />
            <span className='built-with'>
              Built With: Wordpress, HTML/CSS/Javascript
            </span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}

export default ProjectElectrifyingTransit;
