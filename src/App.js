import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CounterClass from './components/counter-class.component';
import CounterHook from './components/counter-hook.component';
import Navbar from './components/navbar.component';
import ToggleHook from './components/toggle-hook.component';
import ToggleHookCustom from './components/toggle-hook-custom.component';
import FormClass from './components/form-class.component';
import FormHook from './components/form-hook.component';
import SandBox from './components/sandbox.component';

import './App.scss';

class App extends Component {

  render() {
    
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div className='hooks-home'>
                <h1>Learn some HOOKS</h1>
                <p className=''>
                  The javascript world is an ever-changing landscape, and React
                  is by no means exempt from this constant flow. Hooks have only
                  been around since mid-2019, but they're already becoming an
                  industry standard for React development. This page's goal is
                  to simply explain and demonstrate how React's hooks work, so
                  that you can quickly and easily implement them in your next
                  project.
                </p>
              </div>
            )}
          />
          <Route exact path='/counter-comparison' render={() => (
            <div className='counter-comparison'>
              <CounterClass/>
              <CounterHook/>
            </div>
          )} />
          <Route exact path='/counter-hook' component={CounterHook} />
          <Route exact path='/toggle-hook' component={ToggleHook} />
          <Route
            exact
            path='/toggle-hook-custom'
            component={ToggleHookCustom}
          />
          <Route exact path='/form-comparison' render={() => 
            <div className='form-comparison'>
              <FormClass/>
              <FormHook/>
            </div>} 
          />
          <Route path='/sandbox' component={SandBox}/>
        </Switch>
      </div>
    );
  }
}

export default App;