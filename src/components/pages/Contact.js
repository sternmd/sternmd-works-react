import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import BackArrow from '../layout/BackArrow';

const Contact = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>Contact me if:
              <br/>
              <br/>
              <span className="red">1.</span> You have a project or idea that I can help you with.
              <br/>
              <span className="red">2.</span> There's a wish to get me involved in some creative work.
              <br/>
              <span className="red">3.</span> You want your website to be optimized for search engines.
              <br/>
              <span className="red">4.</span> You just want to say "Hi!"
            </p>

            <p className="paddingTlg">
              <a href="mailto:stern.maxwell@gmail.com">email</a> /
              <a href="https://www.linkedin.com/in/maxwellstern">linkedin</a> /
              <a href="https://github.com/sternmd">github</a> /
              <a href="https://codepen.io/sternmd/">codepen</a>
            </p>
            <br />
            <br />
          </Column>
        </Columns>
      </Container>
      <BackArrow />
  </div>

export default Contact;
