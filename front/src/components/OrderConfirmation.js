import React, { useContext } from 'react';
import CartContext from './CartContext';

function OrderConfirmation() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Confirmation de Commande</h1>
      <p>Merci pour votre commande ! Voici les détails :</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Prix : {item.price} €</p>
            <p>Quantité : {item.quantity}</p>
          </li>
        ))}
      </ul>
      {/* Affichez d'autres détails de la commande ici, tels que l'adresse de livraison */}
    </div>
  );
}

export default OrderConfirmation;
