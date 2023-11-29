// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList'; // Import ProductList component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* Add a route for ProductList */}
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
