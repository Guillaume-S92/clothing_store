import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Api } from '../../utils/Api';
import './signup.css';

function SignUp() {
  const history = useHistory();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (fullName.length > 2 && email.length > 2 && password.length > 2) {
      setLoading(true);
      const { statusCode, data } = await Api.postRequest('/api/user/signup', {
        email,
        fullName,
        password,
      });
      setLoading(false);

      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setError(data);
        return;
      }

      alert(data);
      history.replace('/signin');
    }
  }, [email, fullName, password, history]);

  return (
    <div className="signupscreen">
      <div className="container">
        <div className="innerContainer">
          <div className="backButton" onClick={() => history.push('/')}>
            <i className="fas fa-arrow-circle-left fa-5x"></i>
          </div>
          <p>Inscription</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Nom complet</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Votre nom complet.."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

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

            <Link to="/signin" className="link">
              <span>Vous avez déjà un compte ?</span>
            </Link>
            <br />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Inscription</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
