import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import BackArrow from '../layout/BackArrow';

const Contact = () => (
  <div>
    <Container>
      <Columns>
        <Column>
          <p>Contact me if:</p>
          <br />
          <p>
            <span class='red'>1.</span> You have a project or idea that I can
            help you with. <span class='red'>2.</span> There's a wish to get me
            involved in some creative dev/design work or co-work.{' '}
            <span class='red'>3.</span> You want your website to be optimized
            for search engines. <span class='red'>4.</span> You just want to say
            "Hi!" and grab some coffee.
          </p>

          <p className='paddingTlg'>
            <a href='mailto:stern.maxwell@gmail.com'>Email </a>/{' '}
            <a
              target='_blank'
              href='https://www.linkedin.com/in/maxwellstern'
              rel='noopener noreferrer'
            >
              Linkedin{' '}
            </a>
            /{' '}
            <a
              target='_blank'
              href='https://github.com/sternmd'
              rel='noopener noreferrer'
            >
              Github{' '}
            </a>
          </p>
          <br />
          <br />
        </Column>
      </Columns>
    </Container>
    <BackArrow />
  </div>
);

export default Contact;
