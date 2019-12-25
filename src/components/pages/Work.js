import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';

import Projects from './work/Projects';
import Widgets from './work/Widgets';

const Work = () => (
  <div>
    <Container>
      <Columns>
        <Column>
          <p>
            Below is a selection of passion projects, web apps, games, and
            personal websites that I've worked on in the past. For more work
            please visit my <a href='https://github.com/sternmd'>github</a>.
          </p>

          <br />
          <br />

          <p>
            <span class='red'>Some clients I've worked with include:</span>
            <br />
            Electrolux, Frigidaire, Verisk Analytics, TC Energy, Blue Buffalo,
            Symetra, Verahill, Rain For Rent, Emergency Medicine Foundation, New
            York Film Academy, Columbia School of Social Work, New York Code +
            Design Academy, Factor75, GraphicSprings
          </p>
        </Column>
      </Columns>
    </Container>
    <br />
    <br />
    <Container>
      <Columns>
        <Column>
          <p>Personal Apps & Widgets:</p>
        </Column>
      </Columns>
    </Container>

    <Widgets />
    <br />
    <br />
    <Container>
      <Columns>
        <Column>
          <p>Personal & Freelance Web Projects:</p>
        </Column>
      </Columns>
    </Container>

    <Projects />

    <BackArrow />
    <Footer />
  </div>
);

export default Work;
