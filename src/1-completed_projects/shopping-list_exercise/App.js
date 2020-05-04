import React, { Component } from 'react';

import ShoppingList from './shopping-list_exercise/components/shopping-list.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
