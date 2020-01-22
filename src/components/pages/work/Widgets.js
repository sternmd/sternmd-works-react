import React, { Component } from 'react';
import {
  Nba,
  Ascend,
  Kanban,
  Tweet,
  Calculator,
  Pomodoro
} from './widgets/index.js';

import { Container, Columns, Column } from 'bloomer';

export default class Widgets extends Component {
  render() {
    return (
      <div>
        <Container>
          <Columns>
            <Column>
              <Tweet />
            </Column>
            <Column>
              <Kanban />
            </Column>
            <Column>
              <Ascend />
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Calculator />
            </Column>
            <Column>
              <Nba />
            </Column>
            <Column>
              <Pomodoro />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
