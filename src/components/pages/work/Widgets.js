import React, { Component } from 'react';
import {
  Nba,
  Ascend,
  Kanban,
  Tweet,
  Calculator,
  Dice,
  Pomodoro,
  Flags
} from './widgets/index.js';

import { Container, Columns, Column } from 'bloomer';

class Widgets extends Component {
  render() {
    return (
      <div>
        <Container>
          <Columns>
            <Column>
              <Kanban />
            </Column>
            <Column>
              <Tweet />
            </Column>
            <Column>
              <Nba />
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
              <Dice />
            </Column>
            <Column>
              <Pomodoro />
            </Column>
            <Column>
              <Flags />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}

export default Widgets;
