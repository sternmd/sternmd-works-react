import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Box  } from 'bloomer';

import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <p>Hello World!</p>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
