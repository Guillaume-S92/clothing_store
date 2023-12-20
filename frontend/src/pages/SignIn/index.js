import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Api } from '../../utils/Api';
import { setToken } from '../../utils/localstorage';
import './signIn.css';

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (email.length > 2 && password.length > 2) {
      setLoading(true);
      const { statusCode, data } = await Api.postRequest('/api/user/signin', {
        email,
        password,
      });
      setLoading(false);

      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setError(data);
        return;
      }

      const { token } = JSON.parse(data);
      setToken(token);
      history.replace('/');
    }
  }, [email, password, history]);

  return (
    <div className="signinscreen">
      <div className="container">
        <div className="innerContainer">
          <div className="backButton" onClick={() => history.push('/')}>
            <i className="fas fa-arrow-circle-left fa-5x"></i>
          </div>
          <p>Connexion</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/signup" className="link">
              <span>Créer un nouveau compte ?</span>
            </Link>
            <br />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Connexion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
