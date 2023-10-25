import Axios from 'axios';
import React, { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Créez un objet avec les données d'enregistrement
    const registerData = {
      email,
      password,
    };

    // Faites une requête HTTP POST au backend
    Axios.post('http://localhost:5000/auth/register', registerData)
    .then((response) => response.data)
    .then((data) => {
      // Gérez la réponse du backend (par exemple, affichez un message de succès)
      console.log('Réponse du backend:', data);
      // Redirigez l'utilisateur vers une autre page ou effectuez d'autres actions ici
    })
    .catch((error) => console.error('Erreur d\'enregistrement', error));
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleRegister}>S'inscrire</button>
      </form>
    </div>
  );
}

export default RegisterPage;