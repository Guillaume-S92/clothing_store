const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const { sendResponseError } = require('../middleware/middleware');
const { checkPassword, generateToken } = require('../utils/utils');

const signUpUser = async (req, res) => {
  const { email, fullName, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    await UserModel.create({ ...req.body, password: hashedPassword });
    res.status(201).send('Le compte a été créée avec succès');
  } catch (error) {
    console.error('Error:', error);
    sendResponseError(500, 'Quelque chose s\'est mal passé. Veuillez réessayer.', res);
  }
};

const signInUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      sendResponseError(400, 'Email ou mot de passe incorrect!', res);
      return;
    }

    // importation des fonctions
    console.log("Imported functions:", { checkPassword, generateToken });

    const isPasswordValid = await checkPassword(password, user.password);

    if (isPasswordValid) {
      const token = generateToken(user);
      res.status(200).send({ status: 'ok', token });
    } else {
      sendResponseError(400, 'Mot de passe invalide!', res);
    }
  } catch (error) {
    console.error('Error:', error);
    sendResponseError(500, `Error: ${error}`, res);
  }
};

const getUser = async (req, res) => {
  res.status(200).send({ user: req.user });
};

module.exports = {
  signUpUser,
  signInUser,
  getUser,
};