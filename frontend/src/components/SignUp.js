import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/users/register', {
        name: name,
        email: email,
        password: password,
      });

      if (response.data.token) {
        // Stockez le jeton d'authentification dans le stockage local
        localStorage.setItem('token', response.data.token);

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page sécurisée
        history.push('/'); // Redirigez vers la page d'accueil
      } else {
        setError('Échec de l\'inscription. Veuillez vérifier vos informations.');
      }
    } catch (error) {
      console.error(error);
      setError('Une erreur s\'est produite lors de l\'inscription.');
    }
  }

  return (
    <div>
      <h1>Inscription</h1>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>S'inscrire</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignUp;
