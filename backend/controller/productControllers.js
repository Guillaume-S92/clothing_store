const ProductModel = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});
    res.json(allProducts);
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const productById = await ProductModel.findById(productId);

    if (!productById) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    res.json(productById);
  } catch (error) {
    console.error('Erreur lors de la récupération du produit par ID:', error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
