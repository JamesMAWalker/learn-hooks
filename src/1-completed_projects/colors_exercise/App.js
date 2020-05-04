import React, { Component } from 'react';

import ColorsContainer from './components/colors-container/colors-container.component';
import NumberLine from './components/number-line/number-line.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ColorsContainer />
      </div>
    );
  }
}

export default App;
