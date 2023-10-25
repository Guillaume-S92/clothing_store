import React, { useState } from 'react';
import Axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Créez un objet avec les données de connexion
    const loginData = {
      email,
      password,
    };

    // Faites une requête HTTP POST pour envoyer les données de connexion au backend
    Axios.post('http://localhost:5000/api/login', loginData)
      .then((response) => response.data)
      .then((data) => {
        // Gérez la réponse du backend (par exemple, stockez le jeton d'authentification)
        console.log('Réponse du backend:', data);
        // Redirigez l'utilisateur vers une autre page ou effectuez d'autres actions ici
      })
      .catch((error) => console.error('Erreur de connexion', error));
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form>
        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;