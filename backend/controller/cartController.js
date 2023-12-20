const CartModel = require('../models/Cart');

const getCartProducts = async (req, res) => {
  try {
    const userCart = await CartModel.find({ userId: req.user._id }).populate('productId');
    
    res.status(200).send({ status: 'ok', userCart });
  } catch (error) {
    console.error(error);
    sendResponseError(500, `Error ${error}`, res);
  }
};

const addProductToCart = async (req, res) => {
  const { productId, count } = req.body;
  try {
    const cartItem = await CartModel.findOneAndUpdate(
      { productId },
      { productId, count, userId: req.user._id },
      { upsert: true },
    );

    res.status(201).send({ status: 'ok', cartItem });
  } catch (error) {
    console.error(error);
    sendResponseError(500, `Error ${error}`, res);
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    await CartModel.findByIdAndRemove(req.params.id);
    res.status(200).send({ status: 'ok' });
  } catch (error) {
    console.error(error);
    sendResponseError(500, `Error ${error}`, res);
  }
};

module.exports = { addProductToCart, deleteProductFromCart, getCartProducts };
