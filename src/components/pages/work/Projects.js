import React, { Component } from 'react';
import {
  Beatitudes,
  NimbusPrints,
  StudioMosaic,
  Roygbiv,
  MuCharts,
  Caspian,
  RachRachArt,
  DreamsOfVinyl,
  KeevaMedicine,
  ElectrifyingTransit
} from './projects/index.js';

import { Container, Columns, Column } from 'bloomer';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Container>
          <Columns>
            <Column>
              <StudioMosaic />
            </Column>
            <Column>
              <NimbusPrints />
            </Column>
          </Columns>
        </Container>

        <Container>
          <Columns>
            <Column>
              <Roygbiv />
            </Column>
            <Column>
              <ElectrifyingTransit />
            </Column>
          </Columns>
        </Container>

        <Container>
          <Columns>
            <Column>
              <DreamsOfVinyl />
            </Column>
            <Column>
              <KeevaMedicine />
            </Column>
          </Columns>
        </Container>

        <Container>
          <Columns>
            <Column>
              <RachRachArt />
            </Column>
            <Column>
              <MuCharts />
            </Column>
          </Columns>
        </Container>

        <Container>
          <Columns>
            <Column>
              <Beatitudes />
            </Column>
            <Column>
              <Caspian />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
