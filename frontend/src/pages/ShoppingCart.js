import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import useLogin from "../utils/hooks/useLogin";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { loginInfo } = useLogin();
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart({ pId: item.product, _id: item._id }));
  };

  const getCartCount = () => cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);

  const getCartSubTotal = () =>
    cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return (
        <div>
          Votre panier est vide <Link to="/">Retour au magasin</Link>
        </div>
      );
    } else {
      return cartItems.map((item) => (
        <CartItem
          key={item.product}
          item={item}
          qtyChangeHandler={qtyChangeHandler}
          removeHandler={() => removeFromCartHandler(item)}
        />
      ));
    }
  };

  return (
    <>
      {loginInfo.loading ? (
        <h1>Loading.....</h1>
      ) : loginInfo.isLogin ? (
        <div className="ShoppingCart">
          <div className="ShoppingCart__left">
            <h2>Panier</h2>
            {renderCartItems()}
          </div>

          <div className="ShoppingCart__right">
            <div className="ShoppingCart__info">
              <p>Sous total ({getCartCount()}) article</p>
              <p>€{getCartSubTotal()}</p>
            </div>
            <div>
              <Link to="/checkout">
                <button>Passer au paiement</button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCart;
