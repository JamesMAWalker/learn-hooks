import React, { Component } from 'react';
import LottoBall from '../lotto-ball/lotto-ball.component';

import './lotto-card.styles.css';

class LottoCard extends Component {

  static defaultProps = {
    title: 'Lotto !',
    maxBalls: 6,
    maxNum: 40,
  }

  constructor(props) {
    super(props);

    this.state = {
      nums: Array.from({length: this.props.maxBalls})
    };
  }

  spin = () => {
    const newNum = (limit) => {
      let n = Math.floor(Math.random() * limit) + 1;
      return n;
    } 

    let newNums = this.state.nums.map(n => newNum(this.props.maxNum));
    
    this.setState({
      nums: newNums
    })
    
  }

  handleClick = () => {
    this.spin();
  }

  render() {
    const { title, maxBalls, maxNum } = this.props;
    const { nums } = this.state;

    return (
      <div className='LottoCard'>
        <h1 className='lotto-title'>{title}</h1>
        <div className='ball-container'>
          {
            nums.map(num => <LottoBall num={num}/>)
          }
        </div>
        <button onClick={this.handleClick} className='lotto-spin'>Take a Spin!</button>
      </div>
    );
  }
}

export default LottoCard;