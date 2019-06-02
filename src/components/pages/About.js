import React from 'react';
import { Container, Columns, Column, Image } from 'bloomer';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';

const About = () => (
  <div>
    <Container>
      <Columns>
        <Column isSize='1/3'>
          <Image
            className='is-hidden-mobile'
            src='/images/sternmd-bw-min.jpg'
          />
        </Column>
        <Column isSize='2/3'>
          <p>
            Hello, I am a frontend web developer with 5+ years of professional
            agency experience living in Portland. I build mobile-friendly
            websites and apps for clients from a range of fields. I am eager to
            learn new technologies and best design practices. Whether it’s
            full-time work, a freelance/contract job, or any other creative
            project – I'm open for collaborations of all kind.
          </p>
        </Column>
      </Columns>
      <br />
      <Columns>
        <Column>
          <b>Professional</b>
          <br />
          2016-2018 Frontend Developer at{' '}
          <a
            href='https://makingwaves.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Making Waves
          </a>
          <br />
          2015-2016 Digital Marketing & SEO Manager at{' '}
          <a
            href='https://www.perfectsearchmedia.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Perfect Search Media
          </a>
          <br />
          2014-2015 SEO Analyst at Perfect Search
          <br />
          <br />
          <b>Entrepreneurship</b>
          <br />
          2015-present Freelance Web Design & Development
          <br />
          2012-present Co-founder at{' '}
          <a
            href='http://studiomosaic.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Studio Mosaic
          </a>
          <br />
          2007-present Founder at{' '}
          <a
            href='https://www.nimbusprints.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Nimbus Prints
          </a>
          <br />
          <br />
          <b>Internship</b>
          <br />
          2013 Web Analytics Intern at{' '}
          <a
            href='https://www.cars.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cars.com
          </a>
          <br />
          <br />
        </Column>
        <Column>
          <b>Education</b>
          <br />
          2016 Full-Stack Web Development Immersive at{' '}
          <a
            target='_blank'
            href='https://generalassemb.ly/'
            rel='noopener noreferrer'
          >
            General Assembly
          </a>
          <br />
          2010-2014 Bachelor of Arts (B.A.), Finance, Music at{' '}
          <a
            target='_blank'
            href='https://www.lakeforest.edu/'
            rel='noopener noreferrer'
          >
            Lake Forest College
          </a>
          <br />
          <br />
          <b>Volunteer</b>
          <br />
          2019-present Trail Ambassador at{' '}
          <a
            href='https://www.forestparkconservancy.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Forest Park Conservancy
          </a>
          <br />
          2018-present Digital Web Volunteer at{' '}
          <a
            href='https://www.nps.gov'
            target='_blank'
            rel='noopener noreferrer'
          >
            National Park Service
          </a>
          <br />
          2018-present Dedicated Contributor at{' '}
          <a
            href='http://jfwiki.org/index.php'
            target='_blank'
            rel='noopener noreferrer'
          >
            Joe Frank Wiki
          </a>
          <br />
          2011-2014 Director of Electronic Music at{' '}
          <a href='https://wmxm.org/' target='_blank' rel='noopener noreferrer'>
            WMXM 88.9FM
          </a>
        </Column>
        <Column>
          <b>Technologies & Skills</b>
          <br />
          Languages/Frameworks:
          <br />
          HTML, CSS (SCSS/LESS), JavaScript, jQuery, Vue, React, Node/Express
          (MERN)
          <br />
          <br />
          Build Tools & Version Control:
          <br />
          Git, JIRA (Agile/Scrum), NPM, Grunt, Gulp, Webpack, Babel, Visual
          Studio, Postman
          <br />
          <br />
          Digital Marketing:
          <br />
          SEO, Google Analytics, Email Marketing, A/B Testing
          <br />
          <br />
          UX/Design:
          <br />
          Adobe Photoshop, Illustrator, GSAP
          <br />
          <br />
          CMS / Commerce:
          <br />
          Wordpress, EpiServer, BigCartel
          <br />
        </Column>
        <Column>
          <b>Exhibitions</b>
          <br />
          2017{' '}
          <a
            href='http://studiomosaic.org/blog/studio-mosaic-opens-shop'
            target='_blank'
            rel='noopener noreferrer'
          >
            Studio Mosaic Opens Shop
          </a>
          <br />
          2015{' '}
          <a
            href='http://studiomosaic.org/blog/everythings-for-sale'
            target='_blank'
            rel='noopener noreferrer'
          >
            Everything's For Sale
          </a>
          <br />
          <br />
          <b>Publications</b>
          <br />
          2013{' '}
          <a
            href='http://studiomosaic.org/ser-libre'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ser Libre
          </a>{' '}
          by Patrico Rizzo-Vast
          <br />
          2012{' '}
          <a
            href='http://studiomosaic.org/paradox-lost'
            target='_blank'
            rel='noopener noreferrer'
          >
            Paradox Lost
          </a>{' '}
          by Maxwell Stern
          <br />
          <br />
          <b>DJ Mixes</b>
          <br />
          2019{' '}
          <a
            href='https://www.mixcloud.com/studiomosaic/side-trips-vol-ii-festival-flashbacks/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Side Trips Vol. II
          </a>
          <br />
          2017{' '}
          <a
            href='http://studiomosaic.org/side-trips-vol-1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Side Trips Vol. I
          </a>
          <br />
          2017{' '}
          <a
            href='http://studiomosaic.org/tales-from-the-lost-jukebox'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tales From the Lost Jukebox
          </a>
          <br />
          2016{' '}
          <a
            href='http://studiomosaic.org/downtime-classic'
            target='_blank'
            rel='noopener noreferrer'
          >
            Downtime Classic
          </a>
          <br />
          2016{' '}
          <a
            href='http://studiomosaic.org/japanoise'
            target='_blank'
            rel='noopener noreferrer'
          >
            Japanoise
          </a>
          <br />
          <br />
          <b>More about me:</b>
          <br />
          <a
            href='https://euphorm.bandcamp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Electronic Music
          </a>
          <br />
          <Link to='/favorites'>My Favorite Things</Link>
          <br />
          <a
            href='https://dreamsofvinyl.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Music Blog
          </a>
          <br />
          <a
            href='https://github.com/sternmd'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Github
          </a>
        </Column>
      </Columns>
    </Container>
    <BackArrow />
    <Footer />
  </div>
);

export default About;
