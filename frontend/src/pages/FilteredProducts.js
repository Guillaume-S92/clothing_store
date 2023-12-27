// FilteredProducts.js
import React from 'react';
import { useSelector } from 'react-redux';
import './filteredProducts.css';
import Product from '../components/Product';

const FilteredProducts = ({ match }) => {
  const category = match.params.category;

  const { products, loading, error } = useSelector((state) => state.getProducts);

  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="category-screen">
      <h2 className="category-screen__title">{category}</h2>
      <div className="category-screen__products">
        {/* Afficher les produits filtrés */}
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{`Error: ${error}`}</h2>
        ) : (
          filteredProducts.map(({ _id, name, description, price, imageUrl }) => (
            <Product
              key={_id}
              name={name}
              description={description}
              price={price}
              imageUrl={imageUrl}
              productId={_id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
