import React from 'react';
import { Link } from 'react-router-dom';

import Yinyang from './Yinyang';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="gradient"></div>
        <Yinyang />
        <input className="burger-check" id="burger-check" type="checkbox" />
        <label htmlFor="burger-check" className="burger"></label>

        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
