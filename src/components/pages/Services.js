import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';

const Services = () => (
  <div>
    <Container>
      <Columns>
        <Column>
          <p>
            My freelance services include:
            <br />
            <br />
            <span class='red'>
              eCommerce Solutions
              <br />
              Web Design & Development
              <br />
              Digital Marketing Strategy & SEO
              <br />
              Email & Social Media Marketing
              <br />
              Graphic Design & Photography
              <br />
              Computer Lessons & Tutorials
            </span>
            <br />
            <br />I particularly enjoy working with startups, nonprofits, small
            business owners, and seniors. I believe that honest dialogue with
            clients and hard work are the keys to creating a remarkable product.{' '}
            <Link to='/contact'>Contact me</Link> anytime!
          </p>
        </Column>
      </Columns>
    </Container>

    <BackArrow />
    <Footer />
  </div>
);

export default Services;
