import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

import BackArrow from '../layout/BackArrow';

const Services = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>My freelance services include:
            <br/>
            <br/>
            <span class="red">
            Web Design and Development.
            <br/>
            Search Engine Optimization (SEO).
            <br/>
            Digital Marketing Strategy.
            <br/>
            Brand Identity.
            </span>
            <br/>
            <br/>
            I particularly enjoy working with startups, nonprofits, and small business owners. I believe that honest dialogue with clients and hard work are the keys to creating a remarkable product. <Link to='/contact'>Contact me</Link> anytime!
            </p>


          </Column>
        </Columns>
      </Container>
      <BackArrow />
  </div>

export default Services;