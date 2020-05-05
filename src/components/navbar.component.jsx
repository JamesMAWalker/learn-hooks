import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='Navbar'>
      <Link className='Navbar__link' to='/counter-class'>
        Class Demo
      </Link>
      <Link className='Navbar__link' to='/counter-hook'>
        Hook Intro
      </Link>
      <Link className='Navbar__link' to='/toggle-hook'>
        Toggle Using Hooks
      </Link>
      <Link className='Navbar__link' to='/toggle-hook-custom'>
        Custom Hooks Intro
      </Link>
      <Link className='Navbar__link' to='/form-comparison'>Class Form Demo</Link>
    </div>
  );
}

export default Navbar;