import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetCart } from "../redux/actions/cartActions";
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const orderDetails = useSelector((state) => state.cart.lastOrder);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // S'assure que les détails de la commande existent avant de continuer
    if (!orderDetails || Object.keys(orderDetails).length === 0) {
      // Redirige vers une page d'erreur
      history.push("/error"); 
    }
  }, [orderDetails, history]);

  const { firstName, lastName, email, phone, products } = orderDetails;

  const handleReturnHome = () => {
    // Réinitialiser le panier une fois la commande confirmée
    dispatch(resetCart());

    // Redirection vers la page d'accueil
    history.push("/");
  };

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

      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={handleReturnHome}>Retour à la page d'accueil</button>
    </div>
  );
};

export default ConfirmationPage;
