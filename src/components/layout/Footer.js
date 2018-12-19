import React from 'react';
import { Container, Columns, Column } from 'bloomer';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container className="paddingTlg">
          <Columns>
            <Column className="grey">
                	&copy; Maxwell Stern, 2018. Built with <a href="https://reactjs.org/">React</a> and <a href="https://bloomer.js.org/#/">Bloomer</a>.
                <br/>
                <br/>
            </Column>
          </Columns>
        </Container>
      </div>
    )
  }
}

export default Footer;
