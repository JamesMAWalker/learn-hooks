import React, { Component } from 'react';

import './card.styles.css';

class Card extends Component {

  constructor(props) {
    super(props);
    
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  

  render() {
    const { srcUrl, val, name } = this.props;

    return (
        <img style={{ transform: this._transform }} className="card" src={srcUrl} value={val} name={name} />
    );
  }
}

export default Card;