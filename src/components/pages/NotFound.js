import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { Link } from 'react-router-dom';

const NotFound = () =>
  <div>
      <Container>
        <Columns>
          <Column>
            <p>Sorry, page not found! Return <Link to="/">home</Link>.</p>
          </Column>
        </Columns>
      </Container>
  </div>

export default NotFound;
