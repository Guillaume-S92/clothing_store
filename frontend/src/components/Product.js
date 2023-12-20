import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId, linkTo }) => {
  // Limiter la description à 100 caractères
  const truncatedDescription = `${description.substring(0, 100)}...`;

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">

        <p className="info__name">{name}</p>


        <p className="info__description">{truncatedDescription}</p>


        <p className="info__price">€{price}</p>

        {/* Lien vers la page détaillée du produit */}
        <Link to={linkTo || `/product/${productId}`} className="info__button">
          Vue détaillée
        </Link>
      </div>
    </div>
  );
};

export default Product;
