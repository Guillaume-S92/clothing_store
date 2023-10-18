import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminDashboard() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleAddProduct = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.post('/api/products', {
          name: productName,
          price: productPrice,
          // Ajoutez d'autres propriétés du produit ici
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.data) {
          // Affichez un message de succès ou réinitialisez les champs de saisie
          setError('Produit ajouté avec succès.');
          setProductName('');
          setProductPrice('');
        } else {
          setError('Échec d\'ajout du produit. Veuillez vérifier les informations.');
        }
      } else {
        history.push('/signin'); // Redirigez l'administrateur vers la page de connexion
      }
    } catch (error) {
      console.error(error);
      setError('Une erreur s\'est produite lors de l\'ajout du produit.');
    }
  }

  return (
    <div>
      <h1>Tableau de Bord Administrateur</h1>
      <h2>Ajouter un Produit</h2>
      <input
        type="text"
        placeholder="Nom du Produit"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix du Produit"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Ajouter le Produit</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AdminDashboard;
