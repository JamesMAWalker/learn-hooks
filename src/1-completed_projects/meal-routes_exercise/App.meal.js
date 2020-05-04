import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Meal from './components/meal.component';
import MealSearch from './components/meal-search.component';
import foodONLY from './components/food-ONLY.component';
import NavBar from './components/nav-bar.component';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/mealsearch' component={MealSearch}/>
          <Route exact path="/">choose an option from above</Route>
          <Route exact path='/food/:name' component={foodONLY} />
          <Route
            exact
            path='/food/:foodName/drink/:drinkName'
            render={(routeParams) => <Meal {...routeParams}/>}
          />
          <Route exact render={() => <h1>ERROR: PAGE NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;