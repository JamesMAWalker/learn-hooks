import React, { Component } from 'react';

import Coin from './coin.component';

import './flipper.styles.css';


class Flipper extends Component {
  
  static defaultProps = { 
    side: 'heads'
  };

  constructor(props) {
    super(props);

    this.state = {
      flips: []
    };
  }

  flip = () => {
    let headTail = Math.floor(Math.random() * 2);
  
    if (headTail === 1) {
      this.setState(curState => ({
        flips: [...curState.flips, 1]
      }))
    } else {
      this.setState(curState => ({
        flips: [...curState.flips, 0]
      }));
    }
  }

  flipCoin = () => {
    let side = 'heads';
    let flipsArr = this.state.flips;
    let last = flipsArr[flipsArr.length - 1];
  
    if (last === 1) {
      side = 'tails';
    }
    
    return side;
  }

  haveHas = () => {
    let conj = 'have'
    let flipz = this.state.flips 
    let tailz = flipz.filter(flp => flp === 1);

    if (tailz.length === 1) {
      conj = 'has'
    } 


    return conj
  }

  calcFlips = (side) => {
    let flips = this.state.flips.filter(flip => flip === side);
    
    return flips.length;
  }

  handleClick = () => {
    this.flip();
  }

  render() {
    let { side, tails, heads } = this.props;
    let numFlips = this.state.flips.length;

    return (
      <div className='Flipper'>
        <Coin
          src={this.flipCoin()}
        />
        <div className='Flipper-counts'>
          Out of {numFlips} flips, there {this.haveHas()} been{' '}
          {this.calcFlips(1)} tails, and {this.calcFlips(0)} heads.
        </div>
        <button onClick={this.handleClick} className='Flipper-button'>
          FLIPPIT
        </button>
      </div>
    );
  }
}

export default Flipper;