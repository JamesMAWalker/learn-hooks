import React, { Component } from 'react';

import './coin.styles.css'

class Coin extends Component {
  render() {
    let { src } = this.props

    return (
      <div className='Coin'>
        <img className='Coin-img' src={`https://tinyurl.com/react-coin-${src}-jpg`} alt={src} />
      </div>
    );
  }
}

export default Coin;