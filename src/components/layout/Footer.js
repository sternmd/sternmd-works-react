import React from 'react';
import { Container, Columns, Column } from 'bloomer';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container className="paddingTlg">
          <Columns>
            <Column className="grey">
                	&copy; Maxwell Stern, {(new Date().getFullYear())}. Built with <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://bloomer.js.org/#/" target="_blank">Bloomer</a>.
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
