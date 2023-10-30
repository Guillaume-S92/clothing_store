import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importez useParams

function ProductDetail() {
  const { id } = useParams(); // Obtenez l'ID du produit à partir de l'URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Erreur lors de la récupération du produit', error));
  }, [id]);

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
