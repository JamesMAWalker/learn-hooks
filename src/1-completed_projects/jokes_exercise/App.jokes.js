import React, { Component } from 'react';

import JokeList from './components/joke-list.component';

import './App.jokes.scss'

class App extends Component {

  render() {

    return (
      <div className='App'>
        <JokeList/>
      </div>
    );
  }
}

export default App;