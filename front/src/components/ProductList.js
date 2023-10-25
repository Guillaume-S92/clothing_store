import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Requête HTTP GET pour obtenir la liste des produits depuis votre backend
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erreur lors de la récupération des produits', error));
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Prix : {product.price} €</p>
            <button>Ajouter au Panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
