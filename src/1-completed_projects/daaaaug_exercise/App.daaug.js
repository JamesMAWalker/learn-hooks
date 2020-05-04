import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import NavBar from './components/nav-bar.component';
import About from './components/about.component';
import Contact from './components/contact.component';
import DogRoute from './components/dog-route.component';

import './App.daaug.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/dawg' render={() => <DogRoute name="DAUGHNE" />} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
