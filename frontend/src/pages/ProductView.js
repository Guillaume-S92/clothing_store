import './ProductView.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductView = ({ match }) => {
  const [qty, setQty] = useState(1);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    if (user.userInfo.isLogin) {
      dispatch(addToCart(product._id, qty));
      history.push('/cart');
    } else {
      alert('Vous devez d\'abord vous connecter.');
    }
  };

  return (
    <div className="ProductView">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{`Erreur: ${error}`}</h2>
      ) : (
        <>
          <div className="ProductView__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Prix: {product.price}€</p>
              <p>Description: {product.description}</p>
              <p>Catégorie: {product.category}</p>
              <p>Marque: {product.brand}</p>
            </div>
          </div>
          <div className="ProductView__right">
            <div className="right__info">
              <p>
                Prix:
                <span>{`${product.price}€`}</span>
              </p>
              <p>
                Statut:
                <span>{product.countInStock > 0 ? 'En Stock' : 'En rupture de stock'}</span>
              </p>
              <p>
                Qté
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Ajouter au panier
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
