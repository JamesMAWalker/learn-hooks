import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import JapanJazz from '../japan-jazz.component';
import JazzGuySingle from '../jazz-guy--single.component';

import { JAZZ_DATA } from '../../data/jazz.data';

class Routes extends Component {
  render() {
    const getGuy = props => {
      let { jg } = props.match.params;

      let currJG = JAZZ_DATA.jazzGuys.find(
        guy => guy.name.toLowerCase() === jg.toLowerCase()
      );
      return <JazzGuySingle {...props} guy={currJG} />;
    };

    return (
      <Switch>
        <Route exact path='/' component={JapanJazz} />
        <Route exact path='/jazzguy/:jg' render={getGuy} />
        <Route exact render={() => <Redirect path='/' />} />
      </Switch>
    );
  }
}

export default Routes;