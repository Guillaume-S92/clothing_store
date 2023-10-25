// routes/auth.js

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// S'inscrire (register)
router.post('/register', async (req, res) => {
  try {
    const { email: username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'Inscription réussie.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Se connecter (login)
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Connexion réussie.' });
});

// Se déconnecter (logout)
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Déconnexion réussie.' });
});

module.exports = router;
