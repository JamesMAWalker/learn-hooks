import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import VendingMachine from './components/vending-machine.component';
import NavBar from './components/nav-bar.component';
import CALPICO from './components/CALPICO.component';
import RAMUNE from './components/RAMUNE.component';
import SILKYBLACK from './components/SILKYBLACK.component';

import './App.vending.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <VendingMachine prices={['¥399', '¥299', '¥199']} />
            )}
          />
          <Route
            exact
            path='/calpico'
            render={() => <CALPICO price='&#165;399' />}
          />
          <Route
            exact
            path='/ramune'
            render={() => <RAMUNE price='&#165;299' />}
          />
          <Route
            exact
            path='/silkyblack'
            render={() => <SILKYBLACK price='&#165;199' />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
