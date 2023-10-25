// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function Routes() {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirmation" component={OrderConfirmation} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Route>
    </Router>
  );
}

export default Routes;
