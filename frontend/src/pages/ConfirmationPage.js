import React from "react";
import { useSelector } from "react-redux";
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const orderDetails = useSelector((state) => state.cart.lastOrder);
  console.log('ConfirmationPage rendered');
  console.log('Cart state:', useSelector((state) => state.cart));

  if (!orderDetails || Object.keys(orderDetails).length === 0) {
    // Gérez le cas où il n'y a pas de détails de commande disponibles
    return <p>Invalid access to confirmation page.</p>;
  }

  const { firstName, lastName, email, phone, products } = orderDetails;

  return (
    <div className="confirmation-page">
      <h1>Confirmation de commande</h1>
      <p>
        Merci, {firstName} {lastName}, pour votre commande! Voici les détails de votre commande:
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Numéro de téléphone:</strong> {phone}
      </p>
      <p>
        <strong>Article commandé:</strong>
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} - {product.price}€ (Quantité: {product.quantity})
          </li>
        ))}
      </ul>
      <p className="confirmation-page__thank-you">Votre commande est confirmée. Merci d'avoir réalisé votre shopping chez nous!</p>
    </div>
  );
};

export default ConfirmationPage;
