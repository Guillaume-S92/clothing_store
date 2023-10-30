import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Importez ProductDetail
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link> {/* Utilisez Link */}
            </li>
            <li>
              <Link to="/loginPage">Login</Link> {/* Utilisez Link */}
            </li>
            <li>
              <Link to="/registerPage">Register</Link> {/* Utilisez Link */}
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Route pour ProductDetail */}
      </Routes>
    </div>
  );
}

export default App;
