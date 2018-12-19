import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Box  } from 'bloomer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Box>Hello World!</Box>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
