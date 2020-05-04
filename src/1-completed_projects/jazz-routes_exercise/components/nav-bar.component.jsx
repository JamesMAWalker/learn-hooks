import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { JAZZ_DATA } from '../data/jazz.data';

class NavBar extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      jazzGuys: JAZZ_DATA.jazzGuys,
      menuStatus: '',
    }
  }

  toggleMenu = () => {
    const { menuStatus } = this.state;

    if (menuStatus === '') {
      this.setState({ menuStatus: '--open' })
    } else {
      this.setState({ menuStatus: '' })
    }
  }
  

  render() {
    const { jazzGuys, menuStatus } = this.state;

    let closed = menuStatus === '' ? 'closeMenu' : '';

    return (
      <div className='Nav'>
        <div className={`Nav__links-container ${closed}`}>
          <NavLink
            onClick={this.toggleMenu}
            exact
            to='/'
            className='Nav__link'
            activeClassName='Nav__link--active'
          >
            Home
          </NavLink>
          <span className='Nav__divider'>|</span>
          {jazzGuys.map(jg => (
            <NavLink
              key={jg.name}
              onClick={this.toggleMenu}
              exact
              to={`/jazzguy/${jg.name}`}
              className='Nav__link'
              activeClassName='Nav__link--active'
            >
              {jg.name}
            </NavLink>
          ))}
        </div>
        <span
          onClick={this.toggleMenu}
          className={`Nav__btn${menuStatus}`}
        ></span>
      </div>
    );
  }
}

export default withRouter(NavBar);