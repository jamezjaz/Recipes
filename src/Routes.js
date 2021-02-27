import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import App from './components/App';

const Routes = () => (
  <Router>
    <Nav />
    <App />
  </Router>
);

export default Routes;
