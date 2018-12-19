import React from 'react';
import { Container, Columns, Column } from 'bloomer';

const About = () =>
  <div>
    <section id="about">
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
            2016-2018 Frontend Developer at Making Waves
            <br/>
            2015-2016 Digital Marketing Manager at Perfect Search Media
            <br/>
            2014-2015 SEO Analyst at Perfect Search Media
            <br/>
            <br/>
            <b>Internship</b>
            <br/>
            2013 Web Analytics intern at Cars.com
            <br/>
            <br/>
            <b>Entrepreneurship</b>
            <br/>
            2015-present freelance web design & development
            <br/>
            2012-present co-founder at <a href="http://studiomosaic.org">Studio Mosaic</a>
            <br/>
            2007-present founder at <a href="https://www.nimbusprints.com/">Nimbus Prints</a>
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
            2018-present digital web volunteer at National Park Service
            <br/>
            2018-present dedicated contributor at Joe Frank Wiki
            <br/>
            2011-2014 director of electronic music at WMXM 88.9FM
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
            2013 Ser Libre by Patrico Rizzo-Vast
            <br/>
            2012 Padaox Lost by Maxwell Stern
            <br/>
            <br/>
            <b>DJ Mixes</b>
            <br />
            Downtime Classic
            <br />
            Tales From the Lost Jukebox
            <br />
            Japanoise
            <br />
            Side Trips Vol. I
            </Column>
          </Columns>
        </Container>
      </section>

      <section id="more-about">
      <Container className="paddingTlg">
        <Columns>
          <Column>
              <p>
                More about me:
              </p>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <b>30 Defining Albums</b>
            <br/>
            Music From Big Pink
            Fi
            Moon Safari
            Music Has the Right to Children
            Blood On the Tracks / Desire
            E. 1999 Eternal
            Meddle
            Dubside of the Moon
            The Soft Bulletin
            Pop / Konigsforst
            Vantage Isle Sessions
            Gorillaz / Laika Come Home
            In The Dark
            Europe 72
            Loop Finding Jazz Records
            Everybody Knows This is Nowhere / On The Beach
            Exile On Main St
            Siamese Dream
            Sublime
            Quebec
            Quadrophenia
            Axis Bold as Love
            Hounds Foggy
            Minimoon Star Villalobos
            Surrealistic Pillow
            Notorious Byrd Brothers
            New Decade of Dub
          </Column>
          <Column>
            <b>20 Defining Films</b>
            <br />
            Big Lebowski /
            The Warriors /
            Taxi Driver /
            My Neighbor Totoro /
            Dazed and Confused /
            Life Aquatic /
            Blue Velvet /
            Motorcycle Diaries /
            Y Tu Mama Tambien /
            City of God /
            Apocalypse Now /
            Paris, Texas /
            Lost in Translation /
            Waking Life /
            Sans Soleil /
            Easy Rider /
            Summer Wars /
          </Column>

          <Column>
            <b>20 Defining Reads</b>
            <br/>
            Mans Search For Meaning
            Confederacy Of Dunces
            Of Mice and Men
            SteppenWolf
            Desolation Angels
            The Dharma Bums
            White Noise
            The Stranger
            Blue Highways
            No Exit
            RipRap
            Box Office Poison
            Invisible Man
            Electric Kool Aid Acid Test
            Black Hole
            Zen Mind Beginner's Mind
            Ghost World
          </Column>
        </Columns>
      </Container>
    </section>
  </div>

export default About;
