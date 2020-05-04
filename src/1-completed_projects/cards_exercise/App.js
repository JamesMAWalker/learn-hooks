import React, { Component } from 'react';

import CardsDeck from './components/cards-deck.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CardsDeck />
      </div>
    );
  }
}

export default App;
