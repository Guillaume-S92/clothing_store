// routes/products.js

const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Obtenir la liste des produits
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des produits.' });
  }
});

// Créer un nouveau produit
router.post('/products', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Produit créé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du produit.' });
  }
});

// Mettre à jour un produit
router.put('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
    
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Produit non trouvé.' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du produit.' });
  }
});

// Supprimer un produit
router.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Produit non trouvé.' });
    }

    res.status(200).json({ message: 'Produit supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du produit.' });
  }
});

module.exports = router;
