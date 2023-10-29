import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.id;

    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Erreur lors de la récupération du produit', error));
  }, [match]);

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
    </div>
  );
}

export default ProductDetail;