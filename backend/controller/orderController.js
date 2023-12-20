const OrderModel = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      email,
      phone,
      products,
      total
    } = req.body;

    const newOrder = new OrderModel({
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      email,
      phone,
      products,
      total
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la commande:', error);
    res.status(500).send('Erreur lors de la sauvegarde de la commande');
  }
};

module.exports = {
  createOrder,
};
