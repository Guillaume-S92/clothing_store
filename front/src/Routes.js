// D:\Documents\Developpement\Projets portfolio\Le_dressing\front\src\Routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductDetail from './components/ProductDetail';

function Routes() {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={ProductList} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Route>
    </Router>
  );
}

export default Routes;
