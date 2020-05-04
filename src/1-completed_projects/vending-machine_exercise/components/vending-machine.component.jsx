import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import SILKYBLACK from './SILKYBLACK.component';




class VendingMachine extends Component {
  render() {
    const { prices } = this.props;
    
    return (
      <div className='VendMach'>
        <div className='VendMach__container'>
          <NavLink
            activeClassname='VendMach__item'
            className='VendMach__item--active'
            to='/CALPICO'
          >
            {prices[0]} | CALPICO
          </NavLink>
          <NavLink
            className='VendMach__item--active'
            className='VendMach__item'
            to='/RAMUNE'
          >
            {prices[1]} | RAMUNE
          </NavLink>
          <NavLink className='VendMach__item' to='/SILKYBLACK'>
            {prices[2]} | SILKYBLACK
          </NavLink>
        </div>
        <div className='VendMach__buttons'>
          <button
            className='VendMach__item--active'
            className='VendMach__select'
          >
            せれくと
          </button>
        </div>
      </div>
    );
  } 
}

export default VendingMachine;