import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import Footer from '../layout/Footer';
import BackArrow from '../layout/BackArrow';

import ProjectBeatitudes from './work/beatitudes';
import ProjectNimbusPrints from './work/nimbusprints';
import ProjectStudioMosaic from './work/studiomosaic';
import ProjectRoygbiv from './work/roygbiv';
import ProjectMuCharts from './work/mucharts';
import ProjectCaspian from './work/caspian';
import Widgets from './work/Widgets';

const Work = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>
              Below is a selection of passion projects, web apps, games, and personal websites that I've worked on in the past. For more work please visit my <a href="https://github.com/sternmd">github</a>.
            </p>

            <br/>
            <br/>

            <p><span class="red">Some clients I've worked with include:</span>
            <br/>
            Electrolux, Frigidaire, Rain For Rent, Blue Buffalo, Landry's, Verahill, Verisk Analytics, Tucker Rocky, Symetra, EMF, TransCanada, New York Film Academy (SEO), Columbia School of Social Work (SEO)</p>
          </Column>
        </Columns>
      </Container>
      <br/>
      <br/>
      <Container>
        <Columns>
          <Column>
          <p>Personal Projects:</p>
          </Column>
        </Columns>
      </Container>
      <Container>
        <Columns>
          <Column>
            <ProjectBeatitudes />
          </Column>
          <Column>
            <ProjectNimbusPrints />
          </Column>
        </Columns>
      </Container>

        <Container>
          <Columns>
            <Column>
              <ProjectStudioMosaic />
            </Column>
          <Column>
            <ProjectRoygbiv />
          </Column>
        </Columns>
      </Container>

      <Container>
        <Columns>
          <Column>
            <ProjectMuCharts />
          </Column>
        <Column>
          <ProjectCaspian />
        </Column>
      </Columns>
    </Container>
    <br/>
    <br/>
    <Container>
      <Columns>
        <Column>
          <p>Widgets:</p>
        </Column>
      </Columns>
    </Container>
    <Widgets />

    <BackArrow />
    <Footer />
  </div>

export default Work;
