import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {

  goBack = () => {
    this.props.history.goBack();
    this.props.history.goBack();
  }

  render() {
    return (
      <div className='nav'>
        <Link className='nav__link' to='/food/:name'>
          just food
        </Link>
        <Link className='nav__link' to='/food/oatmeal/drink/coffee'>
          whole meal
        </Link>
        <Link className='nav__link' to='/'>
          home
        </Link>
        <Link className='nav__link' to='/mealsearch'>
          find a meal
        </Link>
        <a className='nav__link' onClick={this.goBack}>
          previous meal
        </a>
      </div>
    );
  }
}

export default withRouter(NavBar);