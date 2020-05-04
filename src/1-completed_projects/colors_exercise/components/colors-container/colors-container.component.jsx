import React, { Component } from 'react';

import ColorsBlock from '../color-block/color-block.component';

import Colors from '../../data/colors.data';

import './colors-container.styles.css';

class ColorsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: Colors
    };

    console.log(this.state.colors);
  }

  render() {
    return (
      <div className='ColorsContainer'>
        <h1 className='CC-header'>We got culluzzz</h1>
        {this.state.colors.map(block => (
          <ColorsBlock
            
          />
        ))}
      </div>
    );
  }
}

export default ColorsContainer;