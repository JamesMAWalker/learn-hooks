import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='Navbar'>
      <Link className='Navbar__link' to='/counter-comparison'>
        Making a Counter
      </Link>
      <Link className='Navbar__link' to='/toggle-hook'>
        Toggle Using Hooks
      </Link>
      <Link className='Navbar__link' to='/toggle-hook-custom'>
        Custom Hooks Intro
      </Link>
      <Link className='Navbar__link' to='/form-comparison'>
        Making a Form
      </Link>
      <Link className='Navbar__link' to='/sandbox'>
        Sandbox
      </Link>
    </div>
  );
}

export default Navbar;