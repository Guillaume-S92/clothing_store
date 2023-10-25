import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Utilisez Routes et Route
import './index.css';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';



function App() {
  return (
    <div className="App">
      {/* Vos éléments de navigation ici, par exemple, un en-tête */}
      <header>
        {/* Ajoutez des liens vers différentes pages ici */}
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/cart">Panier</a>
            </li>
            <li>
              <a href="/LoginPage">Login</a>
            </li>
            <li>
              <a href="/RegisterPage">Register</a> 
            </li>
            {/* Ajoutez d'autres liens de navigation ici */}
          </ul>
        </nav>
      </header>

      {/* Définissez les routes pour vos composants avec Routes */}
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
