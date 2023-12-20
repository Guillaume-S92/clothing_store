const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    email: String,
    phone: String,
    products: [{
      name: String,
      price: Number,
      quantity: Number
    }],
    total: Number
  });
  
  // Créer un modèle pour les commandes
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order