import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import BackArrow from '../layout/BackArrow';

const Contact = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>My services include web design and development, SEO, digital marketing, and brand identity. I particularly enjoy working with startups, nonprofits, and small business owners. I believe that honest dialogue with clients and hard work are the keys to creating a remarkable product.
            </p>

            <p className="paddingTlg">
              <a href="mailto:stern.maxwell@gmail.com">email </a>
               / <a target="_blank" href="https://www.linkedin.com/in/maxwellstern">linkedin </a>
               / <a target="_blank" href="https://github.com/sternmd">github </a>
               / <a target="_blank" href="https://codepen.io/sternmd/">codepen</a>
            </p>
            <br />
            <br />
          </Column>
        </Columns>
      </Container>
      <BackArrow />
  </div>

export default Contact;
