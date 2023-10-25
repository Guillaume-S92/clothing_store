import React, { useState, useContext } from 'react';
import CartContext from './CartContext';

function Checkout() {
  const [formData, setFormData] = useState({
    address: '',
    email: '',
    postalCode: '',
  });
  const { cart, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      products: cart,
    };

    // Faites une requête HTTP POST pour soumettre les données de commande au backend
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => response.json())
      .then(data => {
        // Gérez la réponse du backend (par exemple, affichez la confirmation de commande)
        clearCart(); // Effacez le contenu du panier après la commande
      })
      .catch(error => console.error('Erreur lors de la soumission de la commande', error));
  };

  return (
    <div>
      <h1>Passer la Commande</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Adresse :</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="postalCode">Code Postal :</label>
          <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
        </div>
        {/* Autres champs de formulaire */}
        <button type="submit">Payer</button>
      </form>
    </div>
  );
}

export default Checkout;
