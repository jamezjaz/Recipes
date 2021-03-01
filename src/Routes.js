import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodDetails from './components/FoodDetails';
import Nav from './components/Nav';
import FoodsList from './container/FoodsList';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={FoodsList} />
      <Route path="/foodDetails" component={FoodDetails} />
    </Switch>
  </Router>
);

export default Routes;
