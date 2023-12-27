import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Importer useHistory
import './mainPage.css';

import { getProducts as listProducts } from '../redux/actions/productActions';
import { setUserDetails } from '../redux/actions/userAction';

import Product from '../components/Product';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory(); // Initialiser useHistory

  // Sélectionner les données des produits depuis le state global
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  // Utiliser useEffect pour charger la liste des produits au montage du composant
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Utiliser useEffect pour charger les détails de l'utilisateur au montage du composant
  useEffect(() => {
    dispatch(setUserDetails());
  }, [dispatch]);

  // Fonction pour gérer le clic sur une catégorie
  const handleCategoryClick = (category) => {
    // Rediriger vers la catégorie spécifiée
    history.push(`/category/${category}`);
  };

  return (
    <div className="mainPage">
      {/* Catégories avec des événements onClick pour gérer les clics */}
      <h2 className="mainPage__title" onClick={() => handleCategoryClick('Robe')}>
        Robes
      </h2>
      <h2 className="mainPage__title" onClick={() => handleCategoryClick('Chaussure')}>Chaussures</h2>
      <h2 className="mainPage__title" onClick={() => handleCategoryClick('Jeans')}>Jeans</h2>
      <h2 className="mainPage__title" onClick={() => handleCategoryClick('Pull')}>Pull</h2>
      <h2 className="mainPage__title" onClick={() => handleCategoryClick('Veste')}>Vestes</h2>

      {/* Affichage des produits en fonction de l'état de chargement et des erreurs */}
      <div className="mainPage__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          // Mapper à travers les produits pour les afficher
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
