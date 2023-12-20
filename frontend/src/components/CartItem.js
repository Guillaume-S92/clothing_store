import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const productUrl = `/product/${item.product}`;

  return (
    <div className="cartitem">
      {/* Image */}
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      
      {/* Nom avec lien */}
      <Link to={productUrl} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      
      {/* Prix */}
      <p className="cartitem__price">{`${item.price}€`}</p>
      
      {/* Sélecteur de quantité */}
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      
      {/* Bouton de suppression */}
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
