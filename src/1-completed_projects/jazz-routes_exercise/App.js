import React, { Component } from 'react';

import NavBar from './components/nav-bar.component';
import Routes from './components/routes/routes';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Routes />
        <div className='footer'>日本のジャズ</div>
      </div>
    );
  }
}

export default App;
