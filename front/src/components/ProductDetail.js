import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        if (response.data) {
          setProduct(response.data);
        } else {
          setError('Produit introuvable');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du produit', error);
        setError('Une erreur s\'est produite lors de la récupération du produit.');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

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
