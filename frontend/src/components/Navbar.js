import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { logout } from '../utils/localstorage';
import { setInitialState } from '../redux/actions/userAction';

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const history = useHistory();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { cartItems } = cart;

  // Utiliser des constantes pour les noms de classes réutilisés
  const cartLinkClass = 'cart__link';
  const cartLogoBadgeClass = 'cartlogo__badge';

  // Utiliser useMemo pour mémoriser la valeur de getCartCount
  const getCartCount = useMemo(() => cartItems.reduce((qty, item) => Number(item.qty) + qty, 0), [cartItems]);

  // Fonction pour le rendu conditionnel du lien de déconnexion
  const renderLogoutLink = () => {
    if (!user.userInfo.isLogin) {
      return <Link to="/signin">Compte</Link>;
    } else {
      return <p onClick={_handleLogout}>Déconnexion</p>;
    }
  };

  // Gestion de la déconnexion
  const _handleLogout = () => {
    dispatch(setInitialState());
    logout();
    history.push('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Le Vestiaire</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className={cartLinkClass}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Panier <span className={cartLogoBadgeClass}>{getCartCount}</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Magasin</Link>
        </li>

        <li>{renderLogoutLink()}</li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
