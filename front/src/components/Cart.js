import React, { useContext } from 'react';
import CartContext from './CartContext';

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calculez le total du panier
  const getTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Prix : {item.price} €</p>
              <p>Quantité : {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total : {getTotal()} €</p>
    </div>
  );
}

export default Cart;
