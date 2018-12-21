import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';
import Albums from '../layout/Albums';

const About = () =>
  <div>
    <Container>
      <Columns>
        <Column>
        <p>
          Hello, I am a frontend web developer with 5+ years of professional agency experience. I build mobile-friendly websites and apps for clients from a range of fields. I am eager to learn new technologies and best design practices. Whether it’s full-time work, a freelance job, or an art project – I'm open for collaborations of all kind.
          </p>
        </Column>
      </Columns>
      <br/>
      <Columns>
        <Column>
          <b>Professional</b>
          <br/>
          2016-2018 Frontend Developer at <a href="https://makingwaves.com/">Making Waves</a>
          <br/>
          2015-2016 Digital Marketing & SEO Manager at <a href="https://www.perfectsearchmedia.com/">Perfect Search</a>
          <br/>
          2014-2015 SEO Analyst at Perfect Search
          <br/>
          <br/>
          <b>Entrepreneurship</b>
          <br/>
          2015-present Freelance Web Design & Development
          <br/>
          2012-present Co-founder at <a href="http://studiomosaic.org">Studio Mosaic</a>
          <br/>
          2007-present Founder at <a href="https://www.nimbusprints.com/">Nimbus Prints</a>
          <br/>
          <br/>
          <b>Internship</b>
          <br/>
          2013 Web Analytics Intern at <a href="https://www.cars.com/">Cars.com</a>
          <br/>
          <br/>
        </Column>
        <Column>
          <b>Education</b>
          <br/>
          2016 Full-Stack Web Development Immersive at General Assembly
          <br/>
          2010-2014 Bachelor of Arts (B.A.), Finance, Music at Lake Forest College
          <br/>
          <br/>
          <b>Volunteer</b>
          <br/>
          2018-present Digital Web Volunteer at <a href="https://www.nps.gov">National Park Service</a>
          <br/>
          2018-present Dedicated Contributor at <a href="http://jfwiki.org/index.php">Joe Frank Wiki</a>
          <br/>
          2011-2014 Director of Electronic Music at <a href="https://wmxm.org/">WMXM 88.9FM</a>
        </Column>
        <Column>
          <b>Technologies & Skills</b>
          <br/>
          Languages/Frameworks:
          <br/>
          HTML, CSS (SCSS/LESS), JavaScript, jQuery, Vue, React, Node.js / Express
          <br/>
          <br/>
          Build Tools & Version Control:
          <br/>
          Git, Jira (Agile), NPM, Grunt, Gulp, Webpack, Babel, Visual Studio
          <br/>
          <br/>
          Digital Marketing:
          <br/>
          SEO, Google Analytics, Mailchimp, A/B Testing
          <br/>
          <br/>
          UX/Design:
          <br/>
          Adobe Photoshop, Illustrator, GSAP
          <br/>
          <br/>
          CMS / Commerce:
          <br/>
          Wordpress, EpiServer, Big Cartel
          <br/>
        </Column>
        <Column>
          <b>Exhibitions</b>
          <br/>
          2017 <a href="http://studiomosaic.org/blog/studio-mosaic-opens-shop">Studio Mosaic Opens Shop</a>
          <br/>
          2015 <a href="http://studiomosaic.org/blog/everythings-for-sale">Everything's For Sale</a>
          <br/>
          <br/>
          <b>Publications</b>
          <br/>
          2013 <a href="http://studiomosaic.org/ser-libre">Ser Libre</a> by Patrico Rizzo-Vast
          <br/>
          2012 <a href="http://studiomosaic.org/paradox-lost">Paradox Lost</a> by Maxwell Stern
          <br/>
          <br/>
          <b>DJ Mixes</b>
          <br />
          2017 <a href="http://studiomosaic.org/side-trips-vol-1">Side Trips Vol. I</a>
          <br />
          2017 <a href="http://studiomosaic.org/tales-from-the-lost-jukebox">Tales From the Lost Jukebox</a>
          <br />
          2016 <a href="http://studiomosaic.org/downtime-classic">Downtime Classic</a>
          <br />
          2016 <a href="http://studiomosaic.org/japanoise">Japanoise</a>
          <br/>
          <br/>
          <Link to="/favorites">Selected Favorites</Link>
        </Column>
      </Columns>
    </Container>
    <BackArrow />
    <Footer />
  </div>

export default About;
