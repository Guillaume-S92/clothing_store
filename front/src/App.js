import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Utilisez Routes et Route
import './index.css';
import ProductList from './components/ProductList';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';



function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/loginPage">Login</a>
            </li>
            <li>
              <a href="/registerPage">Register</a>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
