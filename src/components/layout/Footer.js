import React from 'react';
import { Container, Columns, Column } from 'bloomer';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container className='paddingTlg'>
          <Columns>
            <Column className='grey'>
              &copy; Maxwell Stern, {new Date().getFullYear()}. Built with{' '}
              <a
                href='https://reactjs.org/'
                rel='noopener noreferrer'
                target='_blank'
              >
                React
              </a>
              ,{' '}
              <a
                href='https://bloomer.js.org/#/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Bloomer
              </a>
              , and{' '}
              <a
                href='https://pages.github.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub Pages
              </a>
              .
              <br />
              <br />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}

export default Footer;
