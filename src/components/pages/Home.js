import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Container>
      <Columns>
        <Column>
          <p>Maxwell Stern</p>
          <br />
          <p>Web developer and designer</p>
          <p>
            Co-founder &amp; artist at{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://studiomosaic.org/'
            >
              Studio Mosaic
            </a>
          </p>
          <p>
            Founder & screenprinter at{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.nimbusprints.com/'
            >
              Nimbus Prints
            </a>
          </p>
          <p>
            Daily music blogger/geek at{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://dreamsofvinyl.net/'
            >
              Dreams of Vinyl
            </a>
          </p>
          <br />
          <br />
          <p>
            <Link to='/about'>About</Link> / <Link to='/work'>Work</Link> /{' '}
            <Link to='/services'>Services</Link> /{' '}
            <Link to='/contact'>Contact</Link>
          </p>
        </Column>
      </Columns>
    </Container>
  </div>
);

export default Home;
