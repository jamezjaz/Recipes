import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './components/Error';
import FoodDetails from './components/FoodDetails';
import Nav from './components/Nav';
import FoodsList from './container/FoodsList';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={FoodsList} />
      <Route path="/foodDetails/:id" component={FoodDetails} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
