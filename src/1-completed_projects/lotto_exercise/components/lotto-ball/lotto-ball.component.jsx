import React, { Component } from 'react';
import './lotto-ball.styles.css'

class LottoBall extends Component {
  render() {
    const { num } = this.props;

    return (
      <div className='LottoBall'>
        <h1>{num}</h1>
      </div>
    );
  }
}

export default LottoBall;