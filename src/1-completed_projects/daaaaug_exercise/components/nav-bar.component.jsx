import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink exact activeClassname="Nav__active" to="/dawg" className="Nav__link">DG</NavLink>
        <p>|</p>
        <NavLink exact activeClassname="Nav__active" to="/" className="Nav__link">ABT</NavLink>
        <p>|</p>
        <NavLink exact activeClassname="Nav__active" to="/contact" className="Nav__link">CNTCT</NavLink>
      </div>
    );
  }
}

export default NavBar;