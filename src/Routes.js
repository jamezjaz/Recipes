import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import FoodsList from './container/FoodsList';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={FoodsList} />
    </Switch>
  </Router>
);

export default Routes;
