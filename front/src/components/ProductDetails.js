// D:\Documents\Developpement\Projets portfolio\Le_dressing\front\src\components\ProductDetails.js

import React, { useState, useEffect } from 'react';

function ProductDetails(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Requête HTTP GET pour obtenir les détails du produit depuis votre backend
    const productId = props.match.params.id;
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Erreur lors de la récupération des détails du produit', error));
  }, [props.match.params.id]);

  const addToCart = () => {
    // Logique pour ajouter le produit au panier ici
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Détails du Produit</h1>
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Prix : {product.price} €</p>
        <p>Marque : {product.brand}</p>
        <p>Catégorie : {product.category}</p>
        <p>En stock : {product.countInStock}</p>
        <p>Description : {product.description}</p>
        <p>Évaluation : {product.rating} (Avis : {product.numReviews})</p>
        <button onClick={addToCart}>Ajouter au Panier</button>
      </div>
    </div>
  );
}

export default ProductDetails;
