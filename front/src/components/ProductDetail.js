import React, { useState, useEffect } from 'react';

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Faites une requête HTTP GET pour obtenir les détails du produit depuis votre backend
    fetch(`http://localhost:5000/api/products/${match.params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Erreur lors de la récupération des détails du produit', error));
  }, [match.params.id]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} />
          <p>Prix : {product.price} €</p>
          <select>
            <option>Choisissez une taille</option>
            {/* Options de taille ici */}
          </select>
          <button>Ajouter au Panier</button>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
