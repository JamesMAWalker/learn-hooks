import React, { Component } from 'react';

import Colors from '../../data/colors.data';

class ColorBlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: Colors,
      curColor: Colors[Math.floor(Math.random() * Colors.length)]
    };
  }

  changeColor = () => {
    let { colors } = this.state;

    let newColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(newColor);
    

    this.setState ({
      ...this.state,
      curColor: newColor
    });
  }

  handleClick = () => {
    this.changeColor();
  }

  render() {

    let { curColor, colors } = this.state;

    let style = {
      backgroundColor: curColor,
      border: 'none',
      padding: '.5rem 1rem',
      height: '100%',
      width: '100%',
      cursor: 'pointer'
    };

    return (
      <div>
        <button onClick={this.handleClick} style={style}>:)</button>
      </div>
    );
  }
}

export default ColorBlock;