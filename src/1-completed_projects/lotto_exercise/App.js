import React, { Component } from 'react';
import LottoCard from './components/lotto-card/lotto-card.component';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LottoCard maxNum={40} />
        <LottoCard maxBalls={4} maxNum={10} title={'Mini Daily!'} />
      </div>
    );
  }
}

export default App;
