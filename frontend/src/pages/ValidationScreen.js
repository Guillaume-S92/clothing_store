import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom'; 
import './ValidationScreen.css'; 
import CartItem from '../components/CartItem';
import { confirmOrder } from '../redux/actions/cartActions'; 

const ValidationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Récupérez le panier depuis le store Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); // Initialisez useDispatch
  const history = useHistory(); // Utilisez useHistory pour gérer l'historique de navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construisez un tableau de produits à partir du panier
    const products = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.qty,
    }));

    const order = {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      email,
      phone,
      products, // Utilisez le tableau de produits construit
    };

    try {
      // Envoi des données au backend
      await axios.post('http://localhost:3000/api/orders', order);

      // Appel de l'action confirmOrder avec les détails de la commande
      dispatch(confirmOrder(order));

      // Réinitialisez le formulaire ou effectuez d'autres actions après la soumission réussie
      setFirstName('');
      setLastName('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setEmail('');
      setPhone('');

      

      // Redirigez l'utilisateur vers la page de confirmation
      history.push('/confirmation');
    } catch (error) {
      console.error('Erreur lors de la soumission de la commande :', error);
    }
  };

  return (
    <div className="validationscreen">
      <form onSubmit={handleSubmit} className="validationscreen__form">
        <label>
          Prénom:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Nom:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
         Adresse:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Ville:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
           Departement:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </label>
        <label>
           Code postal:
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Numéro de téléphone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
         </label>
        <button type="submit" className="validationscreen__submit-btn">
          Envoyer
        </button>
      </form>

      <div className="validationscreen__cart">
        {cartItems.map((product) => (
          <CartItem
            key={product.product}
            item={product}
            editable={false}  // Passer editable=false pour désactiver les options de modification
          />
        ))}
      </div>
    </div>
  );
};

export default ValidationScreen;
