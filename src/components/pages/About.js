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
          <Image className='is-hidden-mobile' src='/images/sternmd2.jpg' />
          <br />
          <Image className='is-hidden-mobile' src='/images/sternmd3.jpg' />
        </Column>
        <Column isSize='2/3'>
          <p>
            Hello, I am a web developer and creative freelancer living in
            Portland. I build mobile-friendly websites and apps for clients from
            a range of fields. I specialize in frontend web technology, digital
            marketing, and e-commerce solutions. Whether it’s full-time work, a
            freelance/contract job, or any other art project – I'm open for
            collaborations of all kind!
          </p>
        </Column>
      </Columns>
      <br />
      <Columns>
        <Column>
          <b>Professional</b>
          <br />
          <span class='grey'>2018-present</span>
          <br />
          Freelance Web Developer / Designer
          <br />
          <span class='grey'>2016-2018</span>
          <br />
          Frontend Developer at{' '}
          <a
            href='https://makingwaves.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Making Waves
          </a>
          <br />
          <span class='grey'>2015-2016</span>
          <br />
          Digital Marketing & SEO Manager at{' '}
          <a
            href='https://www.perfectsearchmedia.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Perfect Search Media
          </a>
          <br />
          <span class='grey'>2014-2015</span>
          <br />
          SEO Analyst at Perfect Search Media
          <br />
          <br />
          <b>Entrepreneurship</b>
          <br />
          <span class='grey'>2019-present</span>
          <br />
          Wilderness Photographer at{' '}
          <a
            href='https://sterntravels.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Stern Travels
          </a>
          <br />
          <span class='grey'>2012-present</span>
          <br />
          Co-founder at{' '}
          <a
            href='http://studiomosaic.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Studio Mosaic
          </a>
          <br />
          <span class='grey'>2007-present</span>
          <br /> Founder at{' '}
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
          <span class='grey'>Summer 2013</span>
          <br />
          Web Analytics Intern at{' '}
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
          <span class='grey'>2020</span>
          <br />
          Associate's (A.A.S.), Cybersecurity, Computer Information Systems at{' '}
          <a
            target='_blank'
            href='https://www.pcc.edu/'
            rel='noopener noreferrer'
          >
            PCC
          </a>
          <br />
          <span class='grey'>2016</span>
          <br />
          Full-Stack Web Development Immersive at{' '}
          <a
            target='_blank'
            href='https://generalassemb.ly/'
            rel='noopener noreferrer'
          >
            General Assembly
          </a>
          <br />
          <span class='grey'>2010-2014</span>
          <br />
          Bachelor of Arts (B.A.), Finance, Music at{' '}
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
          <span class='grey'>2020-present</span>
          <br />
          React Developer at{' '}
          <a
            href='https://www.codeforamerica.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Code for PDX / Code for America Brigade
          </a>
          <br />
          <span class='grey'>Summer 2019</span>
          <br />
          Trail Ambassador at{' '}
          <a
            href='https://www.forestparkconservancy.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Forest Park Conservancy
          </a>
          <br />
          <span class='grey'>2018-present</span>
          <br />
          Digital Web Volunteer at{' '}
          <a
            href='https://www.nps.gov'
            target='_blank'
            rel='noopener noreferrer'
          >
            National Park Service
          </a>
          <br />
          <span class='grey'>2011-2014</span>
          <br />
          Director of Electronic Music at{' '}
          <a href='https://wmxm.org/' target='_blank' rel='noopener noreferrer'>
            WMXM 88.9FM
          </a>
        </Column>
        <Column>
          <b>Technologies & Skills</b>
          <br />
          <span class='grey'>Languages/Frameworks:</span>
          <br />
          HTML, CSS (SCSS/LESS), JavaScript (ES6+), jQuery, Vue, React/Redux,
          Node/Express, Linux/UNIX
          <br />
          <br />
          <span class='grey'>Project Management</span>
          <br />
          Git, JIRA (Agile/Scrum), Trello (Kanban), NPM/Yarn, Grunt/Gulp/Webpack
          <br />
          <br />
          <span class='grey'>Digital Marketing:</span>
          <br />
          SEO, Google Analytics, Email & Social Media Marketing
          <br />
          <br />
          <span class='grey'>CMS / eCommerce:</span>
          <br />
          Wordpress, EpiServer, Shopify, Etsy, Big Cartel, Squarespace
          <br />
          <br />
          <span class='grey'>UX/Design:</span>
          <br />
          Adobe Photoshop, Illustrator, Lightroom, Prototyping
          <br />
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
            href='https://sterntravels.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            My Travel Blog
          </a>
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
