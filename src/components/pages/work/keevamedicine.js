import React from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectKeevaMedicine extends React.Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='http://keevamedicine.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Keeva Medicine
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='http://keevamedicine.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/keevamedicine.png' alt='Aidan Keeva Medicine' />
            </a>
          </div>
          <MessageBody>
            The healing offerings of Aidan Keeva, Lic. Ac. DACM. A practitioner
            of the ancient art of classical Chinese Medicine.
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

export default ProjectKeevaMedicine;
