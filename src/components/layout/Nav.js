import React from 'react';
import { Link } from 'react-router-dom';

import Yinyang from './Yinyang';

class Nav extends React.Component {

  closeNav() {
    let burger = document.querySelector('.burger');
    burger.click();
  }

  render() {
    return (
      <div>
        <div className="gradient"></div>
        <Yinyang />
        <input className="burger-check" id="burger-check" type="checkbox" />
        <label htmlFor="burger-check" className="burger"></label>

        <nav className="navigation">
          <ul>
            <li><Link to="/" onClick={this.closeNav}>Home</Link></li>
            <li><Link to="/about" onClick={this.closeNav}>About</Link></li>
            <li><Link to="/work" onClick={this.closeNav}>Work</Link></li>
            <li><Link to="/contact" onClick={this.closeNav}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
