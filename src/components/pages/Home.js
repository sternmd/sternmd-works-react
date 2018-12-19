import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

const Home = () =>
  <div>
    <section id="about">
      <Container>
        <Columns>
          <Column>
            <p>Maxwell Stern</p>
            <br />
            <p>Frontend web developer and designer</p>
            <p>Co-founder &amp; artist at <a href="http://studiomosaic.org/">Studio Mosaic</a></p>
            <p>Founder & screenprinter at <a href="https://www.nimbusprints.com/">Nimbus Prints</a></p>
            <br />
            <br />
            <p><Link to="/about">About</Link> / <Link to="/work">Work</Link> / <Link to="/contact">Contact</Link></p>
            <br/>
            <br/>
            <p><a href="https://euphorm.bandcamp.com/">Electronic Music</a></p>
            <p>Wilderness Photography</p>
          </Column>
        </Columns>
      </Container>
    </section>
  </div>

export default Home;
