import React, { Component } from 'react';
import { Message, MessageBody, MessageHeader } from 'bloomer';

class ProjectDreamsOfVinyl extends Component {
  render() {
    return (
      <div>
        <Message isColor='dark'>
          <MessageHeader>
            <p>
              <a
                href='https://dreamsofvinyl.net'
                target='_blank'
                rel='noopener noreferrer'
              >
                Dreams of Vinyl
              </a>
            </p>
          </MessageHeader>
          <div className='message-image'>
            <a
              href='https://dreamsofvinyl.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='images/dreams-of-vinyl-min.png' alt='dreams of vinyl' />
            </a>
          </div>
          <MessageBody>
            A daily music listening blog curated by yours truly. An exploration
            of various sub-genres stemming from: rock, electronic, jazz, folk,
            psychedelic, world, dub-reggae, avant-garde, and more.
            <br />
            <br />
            <span className='built-with'>
              Built With: HTML/CSS/Javascript, Masonry.js
            </span>
          </MessageBody>
        </Message>
      </div>
    );
  }
}

export default ProjectDreamsOfVinyl;
