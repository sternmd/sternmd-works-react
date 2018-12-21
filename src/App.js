import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Favorites from './components/pages/Favorites';


class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route path="/favorites" component={Favorites} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
