

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; // Importez ProductDetails
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function Routes() {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} /> 
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Route>
    </Router>
  );
}

export default Routes;
