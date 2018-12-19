import React from 'react';
import { Container, Columns, Column } from 'bloomer';

const Contact = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>Contact me if:
              <br/>
              <br/>
              <span class="red">1.</span> You have a project or idea that I can help you with.
              <br/>
              <span class="red">2.</span> There's a wish to get me involved in some creative work.
              <br/>
              <span class="red">3.</span> You want your website to be optimized for search engines.
              <br/>
              <span class="red">4.</span> You just want to say "Hi!"
            </p>

            <p class="paddingTlg">
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
  </div>

export default Contact;
