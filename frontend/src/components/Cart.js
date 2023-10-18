import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      // Utilisez Axios pour récupérer le contenu du panier de l'utilisateur depuis le backend
      axios.get('/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError('Impossible de récupérer le panier.');
      });
    } else {
      setError('Vous devez être connecté pour voir votre panier.');
    }
  }, []);

  return (
    <div>
      <h1>Mon Panier</h1>
      {error && <p>{error}</p>}
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
