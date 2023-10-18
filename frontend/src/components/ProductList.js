import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Prix: {product.price} €</p>
            <img src={product.image} alt={product.name} />
            {/* Ajouter plus de détails pour les produits */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
